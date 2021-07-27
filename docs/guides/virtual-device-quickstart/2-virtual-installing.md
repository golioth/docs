---
id: virtual-installing
title: Installing Simulation Tools
---

import InstallTools from '../../partials/install-tools.mdx'

<InstallTools/>

### Building from source (Maintainers Only)

You need [Go](https://golang.org) installed on your system. We recommend using Go 1.15 to build from source.

Clone the [golioth](https://github.com/golioth/golioth) repository from Github.

Them run the command `make install` on the root folder to install the `goliothd`, [goliothctl](/docs/reference/goliothctl/goliothctl) and [coap](/docs/reference/coap/coap) command line tools.
