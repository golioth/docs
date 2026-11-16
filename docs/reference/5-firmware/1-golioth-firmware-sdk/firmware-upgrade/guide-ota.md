---
title: Golioth OTA API
sidebar_position: 1
---

The Golioth Firmware SDK provides the OTA service API (`golioth/ota.h`). The
firmware update logic built on it (manifest handling, download, flashing and
state reporting) is sample code that you copy into your application:
`examples/zephyr/fw_update/src/fw_update.c` for Zephyr and NCS,
`examples/esp_idf/fw_update/main/fw_update.c` for ESP-IDF, and
`examples/common/fw_update.c` with a platform backend (for example
`examples/linux/golioth_basics/fw_update_linux.c`) for Linux and ModusToolbox.
It needs just one function call that sets the currently running firmware
version and registers for updates.

## Includes

```c
#include <golioth/client.h>
#include <golioth/ota.h>
#include "fw_update.h"
```

Include the `fw_update.h` header of the sample you based your application on.

## Current firmware version

```c
static const char* _current_version = "1.2.5";
```

Your firmware binary must indicate a version number using [semantic
versioning](https://semver.org/). Pass this version to the firmware update
sample code as a string (an array of char values).

## Registering for OTA firmware updates

```c
golioth_fw_update_init(client, _current_version);
```

A pointer to the firmware version string is passed via a function call that
initializes the Over-the-Air (OTA) firmware update. This spawns a background
thread that listens for firmware updates from Golioth to automatically update
firmware on the device.

The Zephyr `fw_update` sample provides `golioth_fw_update_run()` instead, which
runs the update loop on the calling thread and does not return:

```c
golioth_fw_update_run(client, _current_version);
```

Applications based on the Zephyr sample also need
`CONFIG_IMG_ENABLE_IMAGE_CHECK=y` and `CONFIG_MBEDTLS_PSA_CRYPTO_C=y`.

## Using a custom package name

By default, firmware updates will use `main` as the name of the package
(e.g. `main-1.2.3`). You may override this by passing a configuration context
during initialization.

```c
struct golioth_fw_update_config fw_config = {
    .current_version = "1.2.3",
    .fw_package_name = "dev"
};
```

```c
golioth_fw_update_init_with_config(client, &fw_config);
```

The Zephyr `fw_update` sample has no `golioth_fw_update_init_with_config()`.
Set the package name with `CONFIG_GOLIOTH_FW_UPDATE_PACKAGE_NAME` instead.

Custom package names are one way to differentiate firmware types used by your
IoT fleet. The package name specified here must match the package name used when
uploading the binary update to Golioth.

## Examples

* The [ESP-IDF `fw_update`
  sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/esp_idf/fw_update)
  uses `golioth_fw_update_init()`.
* The [Zephyr `fw_update`
  sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/fw_update)
  uses `golioth_fw_update_run()`.

## Resources

Further documentation of the OTA API that the firmware update sample code is
built on is available in the [Golioth Firmware SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__ota.html)
(Doxygen).
