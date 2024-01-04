---
title: Clean Application
hide_title: false
sidebar_position: 99
---

While the [Quickstart](/getting-started) focuses on running a sample that's located within the Zephyr file-hierarchy,
it's simple enough to create a new application that's separate from Zephyr.

import PrerequisitesDevice from '/docs/_partials-common/prerequisites-device.md'

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
cmake_minimum_required(VERSION 3.20.0)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(hello)

target_sources(app PRIVATE src/main.c)
```

```txt title="Kconfig"
mainmenu "Golioth application options"

if DNS_RESOLVER

config DNS_SERVER_IP_ADDRESSES
	default y

config DNS_SERVER1
	default "1.1.1.1"

endif # DNS_RESOLVER

source "Kconfig.zephyr"
```

```txt title="prj.conf"
CONFIG_GOLIOTH_SAMPLES_COMMON=y

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
CONFIG_MBEDTLS_HEAP_SIZE=10240
CONFIG_MBEDTLS_SSL_MAX_CONTENT_LEN=2048

# Application
CONFIG_MAIN_STACK_SIZE=4096

CONFIG_GOLIOTH=y
CONFIG_GOLIOTH_SYSTEM_CLIENT=y

CONFIG_MINIMAL_LIBC_MALLOC_ARENA_SIZE=256

CONFIG_LOG_BACKEND_GOLIOTH=y
CONFIG_LOG_PROCESS_THREAD_STACK_SIZE=2048

CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK_ID="<the PSK ID>"
CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK="<the PSK>"

CONFIG_GOLIOTH_SAMPLE_WIFI_SSID="<WIFI SSD>"
CONFIG_GOLIOTH_SAMPLE_WIFI_PSK="<WIFI PASSWORD>"
```

As you can see at the end of `prj.conf`, there are some values that you'll need to fill in yourself that depend on your registered devices and environment.

Now create two directories, `boards` and `src`. Inside of `boards/`, create a configuration file for the board you're using. In this guide, we're using an ESP32.

:::note
For the most part, you can copy these configuration files from Zephyr and Golioth samples.
:::

```txt title="boards/esp32.conf"
CONFIG_WIFI=y
CONFIG_HEAP_MEM_POOL_SIZE=98304

CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_DHCPV4=y

CONFIG_MBEDTLS_ENTROPY_ENABLED=y
CONFIG_MBEDTLS_KEY_EXCHANGE_ECDHE_ECDSA_ENABLED=y
CONFIG_MBEDTLS_ECP_ALL_ENABLED=y

CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_L2_WIFI_SHELL=y
CONFIG_GOLIOTH_SAMPLE_WIFI=y
```

An overlay file for the ESP32 is used to enable the Wi-Fi

```txt title="boards/esp32.overlay"
&wifi {
	status = "okay";
};
```

Create one file, `main.c`, inside `src/`.

For this example, the contents should be a simple logger.

```c title="src/main.c"
/*
 * Copyright (c) 2021 Golioth, Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(golioth_hello, LOG_LEVEL_DBG);

#include <net/golioth/system_client.h>
#include <samples/common/net_connect.h>
#include <zephyr/net/coap.h>

static struct golioth_client *client = GOLIOTH_SYSTEM_CLIENT_GET();

static K_SEM_DEFINE(connected, 0, 1);

static void golioth_on_connect(struct golioth_client *client)
{
	k_sem_give(&connected);
}

void main(void)
{
	int counter = 0;
	int err;

	LOG_DBG("Start Hello sample");

	if (IS_ENABLED(CONFIG_GOLIOTH_SAMPLES_COMMON)) {
		net_connect();
	}

	client->on_connect = golioth_on_connect;
	golioth_system_client_start();

	k_sem_take(&connected, K_FOREVER);

	while (true) {
		LOG_INF("Sending hello! %d", counter);

		err = golioth_send_hello(client);
		if (err) {
			LOG_WRN("Failed to send hello!");
		}
		++counter;
		k_sleep(K_SECONDS(5));
	}
}
```

### Building the Application

:::note
This guide is for the ESP32, so setting up the required toolchain for other boards will be slightly different.

Look at the Zephyr documentation for your particular board to learn more about setting up the toolchain.
:::

Make sure that `west` can find the `golioth/zephyr` codebase on your local
machine. You'll have to `source` a particular file to do so.

```bash
source ~/golioth-zephyr-workspace/zephyr/zephyr-env.sh
```

This will set the `$ZEPHYR_BASE` environment variable, as well as make sure
`west` can find the correct subcommands.

:::note
The exact paths may not match up with what is shown here. Look at [Set
up Zephyr (on
ESP32)](/getting-started/device-examples/compile-example-code/zephyr) page
for more information about setting up the toolchain. environment variables.
:::

Now, to build it:

```bash
west build -b esp32 -p
```

And to flash it to the board (exact paths may vary)

```bash
west flash --esp-device=/dev/cu.usbserial-14210
```

### Results

If `prj.conf` is set up correctly (e.g. `CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK_ID`,
`CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK`, `CONFIG_GOLIOTH_SAMPLE_WIFI_SSID`, and
`CONFIG_GOLIOTH_SAMPLE_WIFI_PSK` are all correct), then will see the logs
emitted by your device by running:

```bash
goliothctl logs --interval 10m
```
