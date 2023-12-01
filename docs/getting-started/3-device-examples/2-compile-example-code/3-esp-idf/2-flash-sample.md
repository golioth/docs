---
id: flash-sample
title: Flashing with samples
---

Now we're getting to the good stuff - working with hardware! The sample project
provided will demonstrate a device securely communicating with Golioth and will
demonstrate core features like LightDB State/Stream, Logging, and OTA Updates.

### Build the `golioth_basics` code example

Golioth Firmware SDK example code is located in the
`golioth-firmware-sdk/examples/esp_idf`. Navigate to the `golioth_basics` example and run
the following code to build the example app:

```console
idf.py set-target esp32
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

Press enter to see the command prompt and type `reset` to restart the device.
You will see boot information followed by a warning that credentials cannot be
located:

```console
Type 'help' to get the list of commands.
Use UP/DOWN arrows to navigate through command history.
Press TAB when typing command name to auto-complete.
Press Enter or Ctrl+C will terminate the console environment.
esp32> W (2721) golioth_example: WiFi and golioth credentials are not set
W (2721) golioth_example: Use the shell settings commands to set them, then restart
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

The result should be a successful connection to Golioth.

```console
I (3762) esp_netif_handlers: sta ip: 192.168.1.195, mask: 255.255.255.0, gw: 192.168.1.1
I (3762) example_wifi: WiFi Connected. Got IP:192.168.1.195
I (3772) example_wifi: Connected to AP SSID: MyWiFiAP
I (3792) golioth_coap_client: Start CoAP session
I (3802) libcoap: Setting PSK key

I (3802) golioth_coap_client: Entering CoAP I/O loop
I (4042) golioth_example: Golioth client connected
I (4102) golioth_fw_update: Current firmware version: 1.2.3
I (4222) golioth_fw_update: Waiting to receive OTA manifest
I (4342) golioth_fw_update: Received OTA manifest
I (4342) golioth_fw_update: Manifest does not contain different firmware version. Nothing to do.
I (4352) golioth_fw_update: Waiting to receive OTA manifest
I (4402) golioth_example: Synchronously got my_int = 42
I (4412) golioth_example: Entering endless loop
I (4462) golioth_example: Callback got my_int = 42

```

You can exit from the ESP-IDF Monitor tool using `CTRL-]`. (A help menu can be
displayed by typing `CTRL-T` followed by `CTRL-H`.)

Congratulations! On the next page, we'll look at how Over-the-Air (OTA) firmware
updates work with this sample.
