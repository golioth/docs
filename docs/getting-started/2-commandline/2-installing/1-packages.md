---
id: packages
title: OS Packages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Golioth's command line interface (CLI) tools are available from a variety of package managers. If you OS is not supported by the options below, [binary downloads are available](/getting-started/commandline/installing/binaries) in the next docs page.

The available CLIs are:

- `goliothctl`
- `coap`

Follow the steps according to your OS:

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

For linux users, the `.deb` and `.rpm` packages are provided through **APT** or **YUM/DNF** package managers. Follow according to your current linux distribution:

<Tabs
groupId="pm"
defaultValue="apt"
values={[
{label: 'APT', value: 'apt'},
{label: 'YUM/DNF', value: 'yum/dnf'},
]}>

<TabItem value="apt">

#### For debian and ubuntu based distros

First you need create a reference to our `.deb` repository in your linux. Open your terminal and type:
```
echo "deb [trusted=yes] https://repos.golioth.io/apt/ /" | sudo tee /etc/apt/sources.list.d/golioth.list
```

:::note
After above step your password migth be requested.
:::

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
$ goliothctl version 
1.3.0
```

```
$ coap version
1.0.5
```

It must show the respective CLI version.
</TabItem> 


<TabItem value="yum/dnf">

#### For distros like CentOS, Fedora, Red Hat, openSUSE, etc

Our `.rpm` package is compatible with both YUM and DNF package managers. Choose one and follow the steps.

You need create an reference to our `.rpm` repository in your linux. Open your terminal and type:
```
echo -en "[fury]
name=Golioth Linux Repo
baseurl=https://repos.golioth.io/yum/
enabled=1
gpgcheck=0\n" | sudo tee /etc/yum.repos.d/golioth.repo
```

:::note
Your password might be requested.
:::

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
$ goliothctl version
1.0.0
```

```
$ coap version
1.0.0
```

It must show the respective CLI version.
</TabItem>
</Tabs> 
</TabItem>

<TabItem value="macos">

:::note

During the developer preview CLIs on macOS will be distributed as a [Tap](https://docs.brew.sh/Taps) and will be published to the public Homebrew ecosystem in the future. Beta members can access [the GitHub repository that contains the tap](https://github.com/golioth/homebrew-tap).

:::

To enable the Golioth Tap globally, use

```
brew tap golioth/tap
```


Install the CLI's with `brew install`

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
</TabItem>

<TabItem value="windows">

For windows users, the CLI packages are currently available through the **[Chocolatey](https://chocolatey.org/)** package manager.

<!-- <Tabs
groupId="pm"
defaultValue="choco"
values={[
{label: 'Chocolatey', value: 'choco'},
{label: 'Winget', value: 'winget'},
]}>

<TabItem value="choco"> -->

Requirements:

- [install the chocolatey package manager](https://chocolatey.org/install)
- run PowerShell or CMD as **Administrator**

First, open the PowerShell or the command line (CMD) as administrator.

To install the `goliothctl` run:

```shell
choco install goliothctl
```

For the `coap-cli` run:

```shell
choco install coapcli
```

To check if the CLI has been installed, run

```text
C:\Users\Golioth> goliothctl version
1.5.0
```

```text
C:\Users\Golioth> coap version
1.1.0
```

To upgrade the `goliothctl`, run

```shell
choco upgrade goliothctl
```

For the `coap-cli`, run

```shell
choco upgrade coapcli
```

<!-- </TabItem>

<TabItem value="winget">

:::note
Golioth does not have support for Windows Package Manager (aka Winget) yet. We are working on it!
:::

</TabItem>

</Tabs>  -->
</TabItem>

<!-- End OS tab -->
</Tabs>

<!-- ### Package Managers

import InstallLinux from '../../../partials/install-linux-packages.md'

<InstallLinux/> -->