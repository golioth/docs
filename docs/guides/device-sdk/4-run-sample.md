---
id: run-sample
title: Run a sample
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Run our Hello World sample

This sample application demonstrates how to connect with Golioth and publish simple Hello messages. Additionally it allows to configure logging backend to send system logs to Golioth. We recommend running the commands here from the `modules/lib/golioth` folder.

### Requirements

- Authenticated with Golioth - see [Authentication](../getting-started/authentication)
- Have a project - see [Create a Project](../getting-started/create-project)
- Have a provisioned device and credential for it - see [Authorizing Devices](../getting-started/authorize-devices)
- Network connectivity

### Building and Running

Configure the following Kconfig options based on your Golioth credentials and server in your own overlay config file:

- `GOLIOTH_SERVER_IP_ADDR` - Server IPv4 address
- `GOLIOTH_SERVER_PORT` - Server port number - default port is `5684`
- `GOLIOTH_SERVER_DTLS_PSK_ID` - PSK ID of registered device
- `GOLIOTH_SERVER_DTLS_PSK` - PSK of registered device

### Platform specific configuration

<Tabs
groupId="arch"
defaultValue="esp32"
values={[
{label: 'Espressif SDK', value: 'esp32'},
{label: 'Nordic SDK', value: 'nrf'},
{label: 'QEMU', value: 'qemu'},
{label: 'Others Boards', value: 'others'},
]}>
<TabItem value="esp32">

Configure the following Kconfig options based on your WiFi AP
credentials:

- ESP32_WIFI_SSID - WiFi SSID
- ESP32_WIFI_PASSWORD - WiFi PSK

On your host computer open a terminal window, locate the source code of
this sample application (i.e., `sample/hello`) and type:

```{.console}
$ west build -b esp32 samples/hello
$ west flash
```

or

```{.console}
$ west build -b esp32 samples/hello -- -DOVERLAY_FILE="<overlay1.conf>;<overlay2.conf>"
$ west flash
```

This is the overlay template for WiFi credentials:

```{.console}
CONFIG_ESP32_WIFI_SSID="my-wifi"
CONFIG_ESP32_WIFI_PASSWORD="my-psk"
```

See
[ESP32](https://docs.zephyrproject.org/latest/boards/xtensa/esp32/doc/index.html)
for details on how to use ESP32 board.

</TabItem>
<TabItem value="nrf">

🚧 Work in Progress... 🚧
</TabItem>
<TabItem value="qemu">

This application has been built and tested with QEMU x86 (qemu_x86) and
QEMU ARM Cortex-M3 (qemu_cortex_m3).

On your Linux host computer, open a terminal window, locate the source
code of this sample application (i.e., `sample/hello`) and
type:

```
$ west build -b qemu_x86 samples/hello
$ west build -t run
```

or

```
$ west build -b qemu_x86 samples/hello -- -DOVERLAY_FILE="<overlay1.conf>;<overlay2.conf>"
$ west build -t run
```

See [Networking with
QEMU](https://docs.zephyrproject.org/latest/guides/networking/qemu_setup.html#networking-with-qemu)
on how to setup networking on host and configure NAT/masquerading to
access Internet.
</TabItem>
<TabItem value="others">

Follow more specific instructions for each supported board architecture on [Zephyr's website](https://docs.zephyrproject.org/latest/boards/index.html).
</TabItem>
</Tabs>
