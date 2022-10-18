---
title: DFU Sample Code Review
---

Golioth has [a Device Firmware Update (DFU) sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/dfu)
that demonstrates how to connect with Golioth for an Over-the-Air (OTA) update.
Here is a walkthrough of the role that helper functions and data structures play
in that sample.

### Header File fw.h

Let's first discuss the functions found within
[fw.h](https://github.com/golioth/golioth-zephyr-sdk/blob/main/include/net/golioth/fw.h).

* The enum `golioth_fw_state{}` is used to register and indicate the current
  state of the DFU service process.
* The struct `golioth_dfu_result{}` indicates whether the process was successful
  or that an error has occurred.
* The `golioth_fw_desired_parse()` function parses the CBOR-encoded payload is
  received after requesting a specific version of firmware from the Golioth
  server.
* The `golioth_fw_observe_desired()` function works similarly to the observe
  functions found in the LightDB observe samples. It creates a subscription to
  the state of the firmware in the cloud and registers a callback function in
  order to trigger an update if the active firmware is changed.
* The `golioth_fw_download()` is a helper function that makes use of the
  `golioth_client` object to request a firmware download from Golioth, and
  registers a callback that is run when the download is received.
* The `golioth_fw_report_state` function is used to communicate the application
  state to the Golioth server. The reported state is used to govern firmware
  transfers and report to the Golioth server when transfers are complete.

### Logging

The `log_ctrl.h` header is included to make use of the log functions which
connect the Golioth logging backend to the Zephyr logging system.

* `LOG_PANIC()` is used to synchronize the log messages and ensure that all logs
  are received by Golioth server prior to exiting the function containing
  logging calls. The `LOG_PANIC()` call will ensure that log calls in all
  threads are processed. In the case of the sample code this is performed prior
  to calling a system reboot.

### Writing to Flash

The `flash.h` is a helper included specifically for the dfu application. The
flash helper functions govern things like writing to flash and confirming
contents of flash.

Most of the flash helper functions provide an abstraction for testing with the
QEMU platform. If the project is configured to use a platform utilizing MCUboot,
then most of the functions present in this file will not be used as indicated by
the `#ifdef CONFIG_BOOTLOADER_MCUBOOT` section of code.

### Sample main.c Walkthrough

In the `main.c` file the first thing to be instantiated is the `golioth_client`
struct to enable the Golioth system client.

The `data_received()` function receives each block of the firmware update. For
each block of data, the response struct includes the following variables:

* rsp->data: the data
* rsp->err: Error code delivered from the server
* rsp->get_next: Macro will return `NULL` if this is the last block
* rsp->len: length of the data
* rsp->off: offset in flash for this block of data

The `uri_strip_leading_slash()` function strips the leading slash from the URI
to prepare it for consumption by the CoAP library.

The `golioth_desired_update()` function is called when a new update request is
received. The response struct include `data`, `err`, and `len` variables that
carry the firmware manifest information from the Golioth servers.

The `golioth_on_connect()` function is common to many of the Golioth samples.
The portion of it that is unique to this sample is the
`golioth_fw_observe_desired()` which monitors the state of the firmware artifact
currently in the Golioth server and registers the `golioth_desired_update()` to
run when new firmware version data is received.

### Application instantiation in `main()`

The `main()` function contains the setup for the DFU process. The `if
(!boot_is_img_confirmed())` evaluation checks to see if the current boot image
is confirmed. This means that after reboot, the firmware has been downloaded and
verified successfully (or that this is the first bootup). Next is the
`net_connect()` helper is called to help establish a network connection. Finally
the `client->on_connect` object is populated with the function pointer that will
launch and manage the continuous DFU update and monitoring process.
