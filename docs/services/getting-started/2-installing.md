---
id: installing
title: Installing Goliothctl
---

`goliothctl` is a command-line interface (CLI) utility that lets you work with Golioth, from creating your account to registering devices to interacting with _device services_ (more on those later.) It runs on your local machine so you'll want to install the version that's appropriate for your operating system:

### Download Pre-built CLIs

We recommend working with the binaries to start with, as this will be the most up to date, and lowest complexity way to get started quickly. 

import InstallTools from '../../partials/install-tools.mdx'

<InstallTools/>

### Using the Pre-built CLIs

Unpack the CLIs using the links above to a known location. You will then either need to specifically call out the location of the binary, or add it to a location findable from the command line. Running the binary from linux may require it to be added to the PATH variable or to be run as a script: `./goliothctl`


### Package Managers

We have plans to support package managers for the various operating systems so you can download, install, and maintain your `goliothctl` install with the latest version. For now, we have some test builds allowing users to install directly from the command line.


import ComingSoon from '../../partials/coming-soon.md'

<ComingSoon/>

#### macOS (Homebrew)

:::note

During the developer preview CLIs on macOS will be distributed as a [Tap](https://docs.brew.sh/Taps) and will be published to the public Homebrew ecosystem in the future. Beta members can access [the GitHub repository that containst the tap](https://github.com/golioth/homebrew-tap).

:::

To enable the Golioth Tap globally, use

```
brew tap golioth/tap
```

The available CLIs are:

- `goliothctl`
- `coap`

Install them with `brew install`

```
brew install goliothctl coap
```

Alternatively you can also install the CLI directly (without adding a tap globally)

```
brew install golioth/tap/goliothctl
```

Verify that `goliothctl` is installed correctly by checking the version

```
$ goliothctl version
1.0.0
```
