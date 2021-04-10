---
id: installing
title: Installing Goliothctl
---

`goliothctl` is a command-line utility that lets you work with Golioth, from creating your account to registering devices to interacting with _device services_ (more on those later.) It runs on your local machine so you'll want to install the version that's appropriate for your operating system:

import InstallTools from '../../partials/install-tools.md'

<InstallTools/>

### Package Managers

import ComingSoon from '../../partials/coming-soon.md'

<ComingSoon/>

#### macOS (Homebrew)

:::note

During the developer preview CLIs on macOS will be distributed as a [Tap](https://docs.brew.sh/Taps) and will be published to the public Homebrew ecosystem in the future.

:::

To enable the Golioth Tap globally, use

```
brew tap golioth/tap
```

The available CLIs are:
* `goliothctl`

Install them with `brew install` like in

```
brew install goliothctl
```

Alternatively you can also install the CLI directly (without adding a tap globally) with

```
brew install golioth/tap/goliothctl
```

Verify that `goliothctl` is installed correctly by checking the version:
```
$ goliothctl version
0.10.3
```