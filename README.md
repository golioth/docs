# Golioth Docs

The Golioth documentation website is built using [Docusaurus 2](https://v2.docusaurus.io/).

## Contributor Information

Please use the `.editorconfig` file when editing/adding documentation. This will
instruct your code editor to follow some simple formatting guidelines such as:

* Max column width of 80 characters (where possible)
* UTF-8 character set
* Use linefeed as the end-of-line treatment

### VS Code

Formatting can be enabled automatically in VS Code by enabling the following
Plugins:

* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  for VS Code: Automatically uses the `.editorconfig` file
* [Rewrap](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap):
  Enable the `Rewrap>Auto Wrap` setting to hard wrap at the 80 character max
  line width.

### Gitpod

A pre-configured VS Code instance is available by clicking the Gitpod badge to
open a contributor workspace instance:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

Automatic hard wrapping in this Gitpod instance can be turned on by pressing
`CTRL comma` to open settings, then search for `rewrap auto wrap`.

### Neovim (Vim)

EditorConfig is [supported natively in
Neovim](http://neovim.io/doc/user/editorconfig.html). Support can be added to
Vim using the [editorconfig-vim
plugin](https://github.com/editorconfig/editorconfig-vim).

Hard breaks will be added to lines automatically and you can manually reflow
paragraphs using `qgap` and sentences using `gqas`.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```console
npm run build:dev (or :prod)
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Device Catalog

The device catalog is automatically generated. To update it, run this command
from the project root directory:

```console
npm run build-device-catalog
```

Quickstart guides can be added in the `docs/hardware/6-catalog/quickstart`
directory and enabled by adding a node in the
`scripts/device-catalog/support.json` file.

Documentation on automatic generation and adding customized pages for supported
boards can be found in [the device catalog
README](scripts/device-catalog/README.md).

## Deployment to Firebase Hosting

Deploy to [Golioth Docs Dev site](https://docs.golioth.dev)

```console
npm run fb-deploy-dev
```

Deploy to [Golioth Docs Prod Site](https://docs.golioth.io)

```console
npm run fb-deploy-prod
```

Maintainers of the Golioth docs merging into the `main` branch will also
automatically deploy to production (based on the CI system setup)

## Versioning

In Ubuntu, the default npm install will not be up to date with the required npm
packages. Consider using nvm to choose an LTS solution that will work better
with Docusaurus V2.

* [nvm install for Ubuntu 20.04 (option 3)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
