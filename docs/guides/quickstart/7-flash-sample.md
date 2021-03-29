---
id: flash-sample
title: Flashing Sample
---

We have a sample Hello World application that demonstrates how to connect with Golioth and publish simple Hello messages. Additionally it allows to configure logging backend to send system logs to Golioth.

All samples can be found on the folder `modules/lib/golioth/samples`. We recommend running the commands here from the `modules/lib/golioth` folder.

### Kconfig set up

Configure the following Kconfig options based on your Golioth credentials and server in your own overlay config file:

- `GOLIOTH_SERVER_IP_ADDR` - Server IPv4 address - `104.197.107.212` for our hosted offering
- `GOLIOTH_SERVER_PORT` - Server port number - default port is `5684`
- `GOLIOTH_SERVER_DTLS_PSK_ID` - PSK ID of provisioned device on previous steps
- `GOLIOTH_SERVER_DTLS_PSK` - PSK of provisioned device on previous steps

Configure the following Kconfig options based on your WiFi AP
credentials:

- `ESP32_WIFI_SSID` - WiFi SSID
- `ESP32_WIFI_PASSWORD` - WiFi PSK

This is the overlay template for creating a `overlay-wifi.conf` file with your WiFi credentials:

```{.console}
CONFIG_ESP32_WIFI_SSID="my-wifi"
CONFIG_ESP32_WIFI_PASSWORD="my-psk"
```

### Flashing device

On your host computer open a terminal window, locate the source code of
this sample application (i.e., `sample/hello`) and type:

```{.console}
$ west build -b esp32 samples/hello -- -DOVERLAY_FILE="overlay-wifi.conf;overlay-logging.conf"
$ west flash
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
