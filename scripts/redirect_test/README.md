# Testing Firebase Redirects

Moving pages or sections of our docs around will break links that have been
indexed by search engines (as well as user bookmarks, blog and social posts,
etc.).

The redirect_test.py script is used to test redirects in the firebase.json file
using a source sitemap.xml file you supply and a destination sitemap.xml file
located in the build directory.

## Partial redirect support

This script does not fully support the redirect syntax used by Firebase. Here is
what is supported, and how fully it is supported:

* Parameter syntax
    * `/mypath/:myparam/morepath`: The literals before and after `:myparam` will
      be fully matched. The area represented by `:myparam` may not contain
      forward slashes (I don't know if this adheres to firebase's parsing or
      not) and will be saved for use when formulating the destination path
    * `/my/path/:myparam*`: The literals before `:myparam*` will be fully
      matched. Everything from where `:myparam*` begins to the end of the source
      path will be saved (including forward slashes) for use when formulating
      the destination path. This is what should be used when moving sections of
      documentation.
    * Using params in destination URLs:
        * `/new/path/:myparam/more/path`
        * `/new/path/:subdirparam/more/path/:wildcardparam`
        * Examples show multiple ways to use parameters. Direct substitutions are made.
    * Choose your own param names

* Slash wildcard: `{,/**}`
    * Firebase will match with or without a closing slash **and everything in
      the path afterwards**

## Usage

1. Copy the sitemap.xml from the live site (before moving things around) into
   the `scripts/redirect_test/` folder.
2. Make the docs changes your needs.
3. Build the site locally with `npm run buid:dev`
4. Add redirects as needed to the `docs-dev` section of firebase.json
5. Run the script
    ```
    cd script/redirect_test
    python3 redirect_test.py
    ```
