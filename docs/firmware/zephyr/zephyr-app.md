---
title: Clean Application
hide_title: false
---

While the [Quickstart](/getting-started) focuses on running a sample that's located within the Zephyr file-hierarchy,
it's simple enough to create a new application that's separate from Zephyr.


import PrerequisitesDevice from '/docs/partials/prerequisites-device.md'

<PrerequisitesDevice />


### Setting up file structure

For reference, this is the file structure of the app we're going to set up:

```
example-app/
├── CMakeLists.txt
├── Kconfig
├── boards
│   └── esp32.conf
├── prj.conf
└── src
    └── main.c
```

To make this, create a new directory for your app (we called ours `example-app`). Feel free to name it whatever you'd like.

Inside this directory, create 3 files: `CMakeLists.txt`, `Kconfig`, and `prj.conf`.

Here are their contents:

```txt title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(example-app)

target_sources(app PRIVATE src/main.c)
```

```txt title="Kconfig"
mainmenu "Golioth application options"

if WIFI_ESP32

config ESP32_WIFI_SSID
	default GOLIOTH_SAMPLE_WIFI_SSID

config ESP32_WIFI_PASSWORD
	default GOLIOTH_SAMPLE_WIFI_PSK

endif # WIFI_ESP32

source "Kconfig.zephyr"
```

```txt title="prj.conf"
# Generic networking options
CONFIG_NETWORKING=y
CONFIG_NET_IPV4=y
CONFIG_NET_IPV6=n

# Logging
CONFIG_NET_LOG=y

# Network Shell
CONFIG_NET_SHELL=y

# TLS configuration
CONFIG_MBEDTLS_ENABLE_HEAP=y
CONFIG_MBEDTLS_HEAP_SIZE=8192
CONFIG_MBEDTLS_SSL_MAX_CONTENT_LEN=2048

# Application
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_EVENTFD=y

CONFIG_GOLIOTH=y
CONFIG_GOLIOTH_SYSTEM_CLIENT=y

CONFIG_LOG_BACKEND_GOLIOTH=y
CONFIG_LOG_PROCESS_THREAD_STACK_SIZE=2048

CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="<the PSK ID>"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="<the PSK>"

CONFIG_ESP32_WIFI_SSID="<WIFI SSD>"
CONFIG_ESP32_WIFI_PASSWORD="<WIFI PASSWORD>"
```

As you can see at the end of `prj.conf`, there are some values that you'll need to fill in yourself that depend on your registered devices and environment.

Now create two directories, `boards` and `src`. Inside of `boards/`, create a configuration file for the board you're using. In this guide, we're using an ESP32.

:::note
For the most part, you can copy these configuration files from Zephyr and Golioth samples.
:::

```txt title="boards/esp32.conf"
CONFIG_WIFI=y
CONFIG_WIFI_ESP32=y
CONFIG_HEAP_MEM_POOL_SIZE=131072

CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_DHCPV4=y

CONFIG_NET_CONFIG_LOG_LEVEL_DBG=y
CONFIG_NET_CONFIG_SETTINGS=y
CONFIG_NET_CONFIG_NEED_IPV4=y

CONFIG_MBEDTLS_ENTROPY_ENABLED=y
CONFIG_MBEDTLS_KEY_EXCHANGE_ECDHE_ECDSA_ENABLED=y
CONFIG_MBEDTLS_ECP_ALL_ENABLED=y

CONFIG_ESP32_WIFI_STA_AUTO=y
```

Create one file, `main.c`, inside `src/`.

For this example, the contents should be a simple logger.

```c title="src/main.c"
/*
 * Copyright (c) 2021 Golioth, Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <logging/log.h>
LOG_MODULE_REGISTER(golioth_logging, LOG_LEVEL_DBG);

#include <net/coap.h>
#include <net/golioth/system_client.h>
#include <net/golioth/wifi.h>

static struct golioth_client *client = GOLIOTH_SYSTEM_CLIENT_GET();

static void golioth_on_message(struct golioth_client *client,
                   struct coap_packet *rx)
{
    uint16_t payload_len;
    const uint8_t *payload;
    uint8_t type;

    type = coap_header_get_type(rx);
    payload = coap_packet_get_payload(rx, &payload_len);

    if (!IS_ENABLED(CONFIG_LOG_BACKEND_GOLIOTH) && payload) {
        LOG_HEXDUMP_DBG(payload, payload_len, "Payload");
    }
}

void main(void)
{
    int counter = 0;

    LOG_DBG("Start Logging sample");

    if (IS_ENABLED(CONFIG_GOLIOTH_SAMPLE_WIFI)) {
        LOG_INF("Connecting to WiFi");
        wifi_connect();
    }

    client->on_message = golioth_on_message;
    golioth_system_client_start();

    while (true) {
        LOG_INF("INFO: the counter is %d", counter);

        counter++;

        k_sleep(K_SECONDS(5));
    }
}
```

### Building the Application

:::note
This guide is for the ESP32, so setting up the required toolchain for other boards will be slightly different.

Look at the Zephyr documentation for your particular board to learn more about setting up the toolchain.
:::

Set these environment values (The exact method used to do that varies between operating system and shell).

```bash
export ZEPHYR_TOOLCHAIN_VARIANT="espressif"
export ESPRESSIF_TOOLCHAIN_PATH="~/.espressif/tools/xtensa-esp32-elf/esp-2020r3-8.4.0/xtensa-esp32-elf/"
export PATH="$PATH:$ESPRESSIF_TOOLCHAIN_PATH/bin"
```

You'll also need to make sure that `west` can find the `golioth/zephyr` codebase on your local machine. You'll have to `source` a particular file to do so.

```bash
source ~/golioth/zephyr/zephyr/zephyr-env.sh
```

This will set the `$ZEPHYR_BASE` environment variable, as well as make sure `west` can find the correct subcommands.

:::note
The exact paths may not match up with what is shown here. Look at [`Set up Zephyr (on ESP32)`](hardware/esp32/quickstart/set-up-zephyr) page for more information
about setting up the toolchain and the necessary environment variables.
:::

Now, to build it:

```bash
west build -b esp32
```

And to flash it to the board (exact paths may vary)

```bash
west flash --esp-device=/dev/cu.usbserial-14210
```

### Results

If `prj.conf` is set up correctly (e.g. `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID`, `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK`, `CONFIG_ESP32_WIFI_SSID`, and `CONFIG_ESP32_WIFI_PASSWORD` are all correct),
then you should be able to see the logs emitted by your device by running:

```bash
goliothctl logs --interval 10m
```
