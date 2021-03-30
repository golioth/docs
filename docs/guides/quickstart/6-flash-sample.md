---
id: flash-sample
title: Flashing a device with Samples
---

Now we're getting to the good stuff - working with hardware! The sample project provided will demonstrate a device securely communicating with Golioth and will also introduce the first device service for _logging_.

Samples can be found in the Zephyr SDK in the folder `modules/lib/golioth/samples`. We recommend running the commands below from the `modules/lib/golioth` folder.

### Kconfig set up

Configure the following Kconfig options based on your Golioth credentials and server in your own overlay config file:

- `GOLIOTH_SERVER_IP_ADDR` - Server IPv4 address - `104.197.107.212` for our Developer Preview instance
- `GOLIOTH_SERVER_PORT` - Server port number - default port is `5684`
- `GOLIOTH_SERVER_DTLS_PSK_ID` - PSK ID of provisioned device from previous steps
- `GOLIOTH_SERVER_DTLS_PSK` - PSK of provisioned device from previous steps

Configure the following Kconfig options based on your WiFi AP
credentials:

- `ESP32_WIFI_SSID` - Wi-Fi SSID
- `ESP32_WIFI_PASSWORD` - Wi-Fi PSK

This is the overlay template for creating a `overlay-wifi.conf` file with your WiFi credentials:

```{.console}
CONFIG_ESP32_WIFI_SSID="my-wifi"
CONFIG_ESP32_WIFI_PASSWORD="my-psk"
```

### Flashing the device

Open a terminal window and locate the source code of
the `hello` sample application at `sample/hello` and type:

```{.console}
west build -b esp32 samples/hello -- -DOVERLAY_FILE="overlay-wifi.conf;overlay-logging.conf"
west flash
```

### Sample output

This is the output from the serial console:

```
[00:00:00.000,000] <dbg> golioth_hello.main: Start CoAP-client sample
[00:00:00.000,000] <inf> golioth_hello: Initializing golioth client
[00:00:00.000,000] <inf> golioth_hello: Golioth client initialized
[00:00:00.000,000] <inf> golioth_hello: Sending hello! 0
[00:00:00.000,000] <dbg> golioth_hello.main: Debug info! 1
[00:00:00.000,000] <dbg> golioth_hello.func_1: Log 1: 1
[00:00:00.000,000] <dbg> golioth_hello.func_2: Log 2: 1
[00:00:00.000,000] <wrn> golioth_hello: Warn: 1
[00:00:00.000,000] <err> golioth_hello: Err: 1
[00:00:00.000,000] <inf> golioth_hello: Starting connect
[00:00:00.000,000] <inf> golioth_hello: Client connected!
```

These are just the logs the device has created but they're also being sent to Golioth for later use. The next step will show you how to view logs from the cloud.
