#!/bin/bash

CUR_DIR=$(pwd)

# Generate goliothctl CLI docs
pushd ../goliothctl
git pull
make docsgen ARGS="-o $CUR_DIR/docs/reference/4-command-line-tools/1-goliothctl --baseUrl /reference/command-line-tools/"
mv $CUR_DIR/docs/reference/4-command-line-tools/1-goliothctl/goliothctl/* $CUR_DIR/docs/reference/4-command-line-tools/1-goliothctl
# find $CUR_DIR/docs/reference/4-command-line-tools/1-goliothctl -type f -name "*.md" -exec sed -i '' 's/\/goliothctl\/goliothctl\//\/goliothctl/g' {} +
popd

# Generate coap cli docs
pushd ../coap-cli
git pull
make docsgen ARGS="-o $CUR_DIR/docs/reference/4-command-line-tools/2-coap --baseUrl /reference/command-line-tools/"
mv $CUR_DIR/docs/reference/4-command-line-tools/2-coap/coap/* $CUR_DIR/docs/reference/4-command-line-tools/2-coap
# find $CUR_DIR/docs/reference/4-command-line-tools/2-coap -type f -name "*.md" -exec sed -i '' 's/\/coap\/coap\//\/coap/g' {} +
popd

# Generate Golioth Zephyr SDK Docs
pushd ../zephyr/modules/lib/golioth
git pull
for doc in $(find . -type f -name "README.rst" | cut -c3-); do
  #echo "$doc"
  #echo "$CUR_DIR/docs/firmware/3-zephyr-sdk/2-samples/${doc}"
  DOC_DIR=$(dirname "$CUR_DIR/docs/firmware/3-zephyr-sdk/$doc")
  mkdir -p "$DOC_DIR"
  sed -i '' "s~{.console}~\`~g" "$doc"
  pandoc "$doc" -f rst -t markdown -s -o "$DOC_DIR.md"
  sed -i '' "s~(samples/~(/firmware/zephyr-sdk/samples/~g" "$DOC_DIR.md"
  sed -i '' "s~\[samples/~\`sample/~g" "$DOC_DIR.md"
  sed -i '' "s~\]{.title-ref}~\`~g" "$DOC_DIR.md"
  sed -i '' "s~\<board>~[board]~g" "$DOC_DIR.md"
  sed -i '' "s~/README.rst~~g" "$DOC_DIR.md"
done
cp -r $CUR_DIR/docs/firmware/3-zephyr-sdk/samples/* $CUR_DIR/docs/firmware/3-zephyr-sdk/2-samples
cp -r $CUR_DIR/docs/firmware/3-zephyr-sdk/samples/lightdb/* $CUR_DIR/docs/firmware/3-zephyr-sdk/2-samples/lightdb
rm -rf $CUR_DIR/docs/firmware/3-zephyr-sdk/samples/lightdb
rm -rf $CUR_DIR/docs/firmware/3-zephyr-sdk/samples/
echo "---" > gs.txt
echo "title: Getting Started" >> gs.txt
echo "hide_title: true" >> gs.txt
echo "---" >> gs.txt
cat "$CUR_DIR/docs/firmware/3-zephyr-sdk.md" >> gs.txt
rm "$CUR_DIR/docs/firmware/3-zephyr-sdk.md"
mv gs.txt "$CUR_DIR/docs/firmware/3-zephyr-sdk/1-getting-started.md"
popd