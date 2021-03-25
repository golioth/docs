#!/bin/bash

CUR_DIR=$(pwd)

# Generate Golioth Backend/CLI Docs
pushd ../golioth
git pull
make docsgen ARGS="-o $CUR_DIR/docs/reference --baseUrl /docs/reference/"
popd

# Generate Golioth Zephyr SDK Docs
pushd ../zephyr/modules/lib/golioth
git pull
for doc in $(find . -type f -name "README.rst" | cut -c3-); do
  #echo "$doc"
  #echo "$CUR_DIR/docs/reference/zephyr/${doc}"
  DOC_DIR=$(dirname "$CUR_DIR/docs/reference/zephyr/$doc")
  mkdir -p "$DOC_DIR"
  pandoc "$doc" -f rst -t markdown -s -o "$DOC_DIR.md"
  sed -i '' "s~(samples/~(/docs/reference/zephyr/samples/~g" "$DOC_DIR.md"
  sed -i '' "s~\[samples/~\`sample/~g" "$DOC_DIR.md"
  sed -i '' "s~\]{.title-ref}~\`~g" "$DOC_DIR.md"
  sed -i '' "s~/README.rst~~g" "$DOC_DIR.md"
done
echo "---" > gs.txt
echo "title: Getting Started" >> gs.txt
echo "hide_title: true" >> gs.txt
echo "---" >> gs.txt
cat "$CUR_DIR/docs/reference/zephyr.md" >> gs.txt
rm "$CUR_DIR/docs/reference/zephyr.md"
mv gs.txt "$CUR_DIR/docs/reference/zephyr/getting-started.md"
popd