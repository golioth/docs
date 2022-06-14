# Golioth Device Catalog

This scripts generates files and meta-data for the device catalog
from various sources.

Currently, it uses the Zephyr repository as the only source.

It outputs files into
* `vendor/zephyr`
* `docs/hardware`
* `static/img`

which can then be re-used by Docusaurus pages and in the future other Golioth systems, too.

You'll need `node` and `bash` to run it. It's only been tested with `bash`.

## Execution

There is a `build-device-catalog` node.js script available on the project level. Running it from the
repository root is the preferred execution method for generating the device catalog:

`npm run build-device-catalog`

You can also execute the individual scripts from that node.js script.

## Development

If you want to further extend the scripts, the following notes should help you get started.

### Getting started

Fetch the Zephyr repository into the `vendor/zephyr` directory by running `./get-zephyr-boards.sh` from the repository root.
This will perform a sparse checkout of the `main` branch, or update the already checked out repository.

The sparse checkout is set to only the `boards` directory of the Zephyr repo, but is still ~430 MB download.

You'll need Linux shell to execute the `.sh` script.

### Generating files

The `index.js` script will process and transform the available data sources into a folder structure in the `docs/hardware` and `static/img`.


## Golioth Board Support Levels

We have number of different support levels for boards, indicating how
well they are integrated with our platform.

To add support level annotation for a board
* look up the architecture of the board
* look up the Board ID of the board
* edit `scripts/device-catalog/support.json`
* under the specific architecture and Board ID, add the support level

The support level values are
* `unverified` = board with unknown compatibility with Golioth
* `community` = community members verified the board work with Golioth
* `verified` = Golioth team verified the board works at some point in time
* `quickstart` = Golioth team provides support and periodically tests compatibility
