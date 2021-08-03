---
id: creating-an-app
title: Creating a New Application
---

While the [Quickstart](golioth-platform-getting-started/platform-overview) focuses on running a sample that's located within the Zephyr file-hierarchy,
it's simple enough to create a new application that's separate from Zephyr. This guide uses the [golioth/golioth-zephyr-app](https://github.com/golioth/golioth-zephyr-app) repo as a base, showing you
how to build an app that uses Golioth and Zephyr in an idiomatic manner.

### Prerequisites

- `goliothctl`
- Authenticated with Golioth - see [Authentication](/docs/guides/golioth-platform-getting-started/platform-authentication)
- Have a project - see [Create a Project](/docs/guides/golioth-platform-getting-started/platform-create-project)
- Have a provisioned device and credentials for it - see [Authorizing Devices](/docs/guides/golioth-platform-getting-started/platform-authorize-devices)

### Setup

1. Create a workspace directory:

```console
mkdir golioth-demo
cd golioth-demo
```

2. Create a virtual environment and activate it (recommended, but not necessary)

```console
python3 -m venv .venv
source .venv/bin/activate
```

If you're using another shell, like `fish`, `source` the `activate` binary that corresponds to your shell, e.g. `source .venv/bin/activate.fish`.

3. Install west

```console
pip3 install west
```

4. Pull down this example:

```console
west init -m git@github.com:golioth/golioth-zephyr-app.git --manifest-rev main
```

or if you've already cloned it

```console
west init -l example-zephyr-app
```

5. Once it's cloned, `cd` to the `golioth-zephyr-app` directory and run `west update`:

```console
west update
```
6. Install the remaining requirements:

```console
pip3 install -r zephyr/scripts/requirements.txt
```

### Understanding the manifest

Take a look at the `west.yml` file from the repo that you just cloned.

It should look like this:

```yaml title="west.yml"
manifest:
  projects:
    - name: zephyr
      revision: v2.6.0
      url: https://github.com/zephyrproject-rtos/zephyr
      import: true
      import:
        name-allowlist:
          - cmsis
          - hal_espressif
          - mbedtls
          - mcuboot
          - mcumgr
          - net-tools
          - segger
          - tinycbor
          - tinycrypt
    # Golioth!
    - name: golioth
      path: modules/lib/golioth
      revision: main
      url: git@github.com:golioth/zephyr.git
  self:
    path: golioth-zephyr-app
```

This manifest imports both Zephyr and Golioth individually, which is how an idiomatic west application pulls in dependencies.
Note that the zephyr dependency explictly only allows certain sub-imports to reduce the time and space required to set up.

### Running the Example

1. `cd` to the `golioth-zephyr-app/app` directory:

```console
cd golioth-zephyr-app/app
```

2. If you're **not** using the Zephyr SDK (which automatically sets up the toolchain):

```console
export ZEPHYR_TOOLCHAIN_VARIANT="espressif"
export ESPRESSIF_TOOLCHAIN_PATH="~/.espressif/tools/xtensa-esp32-elf/esp-2020r3-8.4.0/xtensa-esp32-elf/"
export PATH="$PATH:$ESPRESSIF_TOOLCHAIN_PATH/bin"
```

The `ESPRESSIF_TOOLCHAIN_PATH` could be different, depending on your OS, installation process, and toolchain version.

3. Add your credentials to this application:

Take a look at the [`prj.conf`](app/prj.conf) file and take note of the four lines at the end.

```sh title="prj.conf"
... 25 lines removed ...

CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="<the PSK ID>"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="<the PSK>"

CONFIG_ESP32_WIFI_SSID="<WIFI SSD>"
CONFIG_ESP32_WIFI_PASSWORD="<WIFI PASSWORD>"
```

Fill in `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID` and `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK` with the credentials you've generated with Golioth
and `CONFIG_ESP32_WIFI_SSID` and `CONFIG_ESP32_WIFI_PASSWORD` with your WiFi's SSID and passphrase.

4. Build it:

```console
west build -b esp32 .
```

5. Flash it:

```console
west flash --esp-device=<path to the USB device>
```

### Results

If `prj.conf` is set up correctly (e.g. `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID`, `CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK`, `CONFIG_ESP32_WIFI_SSID`, and `CONFIG_ESP32_WIFI_PASSWORD` are all correct),
then you should be able to see the logs emitted by your device by running:

```bash
goliothctl logs --interval 10m
```
