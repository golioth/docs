---
id: packages
title: OS Packages
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Golioth also provides its own `CLI's` through package managers from different OS like **Linux**, **MacOS** and **Windows**. 

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

First you need create a reference to our `.deb` repository in your linux. Open your terminal and tap:
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
1.0.0
```

```
$ coap version
1.0.0
```

It must show the respective CLI version.
</TabItem> 


<TabItem value="yum/dnf">

#### For distros like CentOS, Fedora, Red Hat, openSUSE, etc

First of all, our `.rpm` package is compatible with both YUM and DNF package managers. Choose one and follow the steps.

You need create an reference to our `.rpm` repository in your linux. Open your terminal and tap:
```
echo -en "[fury]
name=Golioth Linux Repo
baseurl=https://repos.golioth.io/yum/
enabled=1
gpgcheck=0\n" | sudo tee /etc/yum.repos.d/golioth.repo
```

:::note
Your password migth be requested.
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

During the developer preview CLIs on macOS will be distributed as a [Tap](https://docs.brew.sh/Taps) and will be published to the public Homebrew ecosystem in the future. Beta members can access [the GitHub repository that containst the tap](https://github.com/golioth/homebrew-tap).

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

:::note
Golioth does not yet have instructions for Windows. We are working on it!
:::

</TabItem>
</Tabs>

<!-- ### Package Managers

import InstallLinux from '../../../partials/install-linux-packages.md'

<InstallLinux/> -->