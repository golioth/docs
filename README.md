# Golioth Docs

The Golioth documentation website is built using [Docusaurus 2](https://v2.docusaurus.io/).


Click the Gitpod badge to open a contributor workspace instance

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build:dev (or :prod)
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to Firebase Hosting

Deploy to [Golioth Docs Dev site](https://docs.golioth.dev)

```console
npm run fb-deploy-dev
```

Deploy to [Golioth Docs Prod Site](https://docs.golioth.io)

```console
npm run fb-deploy-prod
```

Maintainers of the Golioth docs merging into the `main` branch will also automatically deploy to production (based on the CI system setup)
## Versioning

In Ubuntu, the default npm install will not be up to date with the required npm packages. Consider using nvm to choose an LTS solution that will work better with Docusaurus V2.

* [nvm install for Ubuntu 20.04 (option 3)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
