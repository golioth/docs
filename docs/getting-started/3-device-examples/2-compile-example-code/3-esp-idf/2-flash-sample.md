---
id: flash-sample
title: Flashing with samples
---

Now we're getting to the good stuff - working with hardware! The `hello` sample
connects securely to Golioth and sends a log message every 5 seconds.

### Build the `hello` code example

Golioth Firmware SDK example code is located in the
`golioth-firmware-sdk/examples/esp_idf`. Navigate to the `hello` example and run
the following code to build the example app for the ESP32-S3 (use the target
that matches your chip if it is a different one, e.g. `esp32c3`):

```console
cd ~/golioth-firmware-sdk/examples/esp_idf/hello
idf.py set-target esp32s3
idf.py build
```

### Flashing the device

Flashing is a simple `idf.py` command away.

```console
idf.py flash
```

:::note
If your ESP32 is not found by the flash command, you may need to specify
a port such as: `idf.py -p /dev/ttyUSB0 flash`
:::

### Set credentials in the serial terminal

You must set WiFi and Golioth credentials for the example to connect properly.
Connect to the device over a serial console. This can be done using a tool like
`screen`, but the IDF also includes a command for this purpose:

```console
idf.py monitor
```

Press enter to see the command prompt. Until the WiFi credentials are set, the
sample logs a warning that tells you to use the shell `settings` commands. The
shell greeting looks like this:

```console
Type 'help' to get the list of commands.
Use UP/DOWN arrows to navigate through command history.
Press TAB when typing command name to auto-complete.
Press Enter or Ctrl+C will terminate the console environment.
```

Use the `settings set <key> <value>` syntax to set the for required items. Your
Golioth PSK-ID and PSK can be found on the device page of [the Golioth
Console](https://console.golioth.io). Use the `reset` command once you've set
these credentials to restart the device.

```console
esp32> settings set wifi/ssid MyWiFiAP
Setting wifi/ssid saved
esp32> settings set wifi/psk some_wifi_password
Setting wifi/psk saved
esp32> settings set golioth/psk-id 20220720212709-esp-idf@espidf-demo
Setting golioth/psk-id saved
esp32> settings set golioth/psk e1b66bde537969b37be0e8698dbf85bc
Setting golioth/psk saved
esp32> reset
```

The result should be a successful connection to Golioth. The device joins the
WiFi network and the CoAP session to Golioth is established. The SSID and
PSK-ID in this output are example values; yours will differ:

```console
I (3200) esp_netif_handlers: sta ip: 192.168.200.7, mask: 255.255.255.0, gw: 192.168.200.1
I (3200) example_wifi: WiFi Connected. Got IP:192.168.200.7
I (3210) example_wifi: Connected to AP SSID: golioth
I (3210) golioth_mbox: Mbox created, bufsize: 2520, num_items: 20, item_size: 120
I (3250) golioth_coap_client_libcoap: Start CoAP session with host: coaps://coap.golioth.io
I (3250) golioth_coap_client_libcoap: Session PSK-ID: devboard-one-id@ttgo-demo
I (3270) libcoap: Setting PSK key

I (3270) golioth_coap_client_libcoap: Entering CoAP I/O loop
I (3720) golioth_coap_client_libcoap: Golioth CoAP client connected
```

The `hello` sample then logs `Golioth client connected` and, every 5 seconds,
`Sending hello! <n>` with an increasing counter.

You can exit from the ESP-IDF Monitor tool using `CTRL-]`. (A help menu can be
displayed by typing `CTRL-T` followed by `CTRL-H`.)

Congratulations! On the next page, we'll look at how Over-the-Air (OTA) firmware
updates work using the `fw_update` sample.
