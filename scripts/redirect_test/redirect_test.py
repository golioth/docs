import xml.etree.ElementTree as ET
import json
from urllib.parse import urlparse
tree_main = ET.parse('./sitemap.xml')
tree_testing = ET.parse('../../build/sitemap.xml')

# Print out some debugging info
print_existing = False
print_missing = False
print_redirects = True

main_urls = list()
testing_urls = list()

main_root = tree_main.getroot()
testing_root = tree_testing.getroot()

for r in main_root:
    parsed = urlparse(r[0].text)
    main_urls.append(parsed.path)

for t in testing_root:
    parsed = urlparse(t[0].text)
    testing_urls.append(parsed.path)

def get_redirect_rules(infile="../../firebase.json"):
    try:
        with open(infile, 'r') as f:
            rules = json.load(f)

        ruleset = rules['hosting'][0]['redirects']
        print("Using redirect rules for target:", rules['hosting'][0]['target'])
        return ruleset

    except Exception as e:
        print("Error accessing redirect rules file:", infile, e)

def check_missing():
    total = 0
    for t in main_urls:
        if t in testing_urls:
            if (print_existing):
                print("Link Exists: ", t)
        else:
            if (print_missing):
                print("Link Broken: ", t)
            total += 1
    print("Total missing:", total)

def match_url(in_url, source_url):
    wildcards = dict()

    in_t = in_url.split('/')

    if source_url.endswith("{,/**}"):
        wildcards["closehash"] = True
        source_url = source_url.rstrip("{,/**}")
        if in_t[-1] == "":
            # Remove the trailing empty string which indicates a slash
            # This makes it easier to match since we know we have the wildcard
            in_t.pop()

    source_t = source_url.split('/')

    for i, t in enumerate(in_t):
        if i >= len(source_t):
            return None

        elif source_t[i].startswith(":"):
            if source_t[i].endswith("*"):
                wildcards[source_t[i][:-1]] = '/'.join(in_t[i:])
                return wildcards
            else:
                wildcards[source_t[i]] = t
        elif source_t[i] != t:
            return None

    if len(source_t) == len(in_t):
        return wildcards
    else:
        return None

def check_link_trailing_slash(link, url_list):
    """
    Check link with and without a trailing slash, returning true if it is found
    in the url_list
    """
    if link in url_list:
        return True

    link += "/"
    return link in url_list

def process_redirect(wildcards, dest_url):
    dest_t = dest_url.split('/')

    out_url = ""
    for i, t in enumerate(dest_t):
        if t.startswith(":"):
            if t not in wildcards:
                return None
            else:
                out_url = '/'.join([out_url, wildcards[t]])
        elif t == "":
            if i == 0:
                #Empty member for leading slash
                #This is expected; the first join op will generate leading slash
                continue
            elif i == len(dest_t) - 1 and "closehash" in wildcards:
                return out_url + "/"
            else:
                return None
        else:
            out_url = '/'.join([out_url, t])
    return out_url

def test_redirect_rules(redirect='../../firebase.json', orig_sitemap=main_urls,
                        dev_sitemap=testing_urls):
    ruleset = get_redirect_rules(redirect)
    if ruleset == None:
        raise Exception(ValueError, f"Unable to get redirect rules: {redirect}")

    total = 0

    for t in orig_sitemap:
        newlink = None
        if t in dev_sitemap:
            if (print_existing):
                print("Link Exists: ", t)
        else:
            for r in ruleset:
                wild = match_url(t, r['source'])
                if wild == None:
                    continue

                newlink = process_redirect(wild, r['destination'])
                if newlink == None:
                    continue

                if check_link_trailing_slash(newlink, dev_sitemap):
                    if print_redirects == True:
                        print("Redirect:", t, "->", newlink)
                    break
                else:
                    newlink = None

            if newlink == None:
                if (print_missing):
                    print("Link Broken: ", t)
                total += 1


    print("Total missing:", total)

check_missing()
test_redirect_rules()
