---
id: binaries
title: Pre-built Binaries
---

`goliothctl` is a command-line interface (CLI) utility that lets you work with Golioth, from creating your account to registering devices to interacting with _device services_ (more on those later.) It runs on your local machine so you'll want to install the version that's appropriate for your operating system:

### Download Pre-built CLIs

We recommend working with the binaries to start with, as this will be the most up to date, and lowest complexity way to get started quickly. 

import InstallTools from '/docs/partials-common/install-tools.mdx'

<InstallTools/>

### Using the Pre-built CLIs

Unpack the CLIs using the links above to a known location. You will then either need to specifically call out the location of the binary, or add it to a location findable from the command line. Running the binary from linux may require it to be added to the PATH variable or to be run as a script: `./goliothctl`




<!-- #### APT (debian and ubuntu based distros)

Fisrt you need create an reference to our `.deb` repository in your linux. For that open your terminal and tap:
```
echo "deb [trusted=yes] https://repos.golioth.io/apt/ /" | sudo tee /etc/apt/sources.list.d/golioth.list
```

Your password migth be requested.

Next, you need update your list of packages locally
```
sudo apt update
```

Lastly, install the desired CLI. For `goliothctl`
```
sudo apt install goliothctl
```
For `coap-cli`
```
sudo apt install coap
```

To check if the CLI has been installed, run
```
goliothctl version
```

```
coap version
```

It must show the respective CLI version.

#### YUM/DNF (CentOS, Fedora, Red Hat, openSUSE, etc)

Fisrt of all, our `.rpm` package is compatible with both YUM and DNF pakcage managers. Chosse one and follow the steps.

You need create an reference to our `.rpm` repository in your linux. For that open your terminal and tap:
```
echo -en "[fury]
name=Golioth Linux Repo
baseurl=https://repos.golioth.io/yum/
enabled=1
gpgcheck=0\n" | sudo tee /etc/yum.repos.d/golioth.repo
```

Your password migth be requested.

Next, you just need install the desired CLI. For `goliothctl`
```
sudo dnf install goliothctl
```
For `coap-cli`
```
sudo dnf install coap
```

To check if the CLI has been installed, run
```
goliothctl version
```

```
coap version
```

It must show the respective CLI version.


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
``` -->
