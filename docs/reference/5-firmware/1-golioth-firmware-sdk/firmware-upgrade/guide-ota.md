---
title: Golioth OTA API
sidebar_position: 1
---

The firmware upgrade process is handled by the SDK, requiring just one function
call that sets the currently running firmware version and registers for updates.

## Includes

```c
#include "golioth.h"
```

Including the `golioth.h` header file makes the Golioth API functions available
to your program.

## Current firmware version

```c
static const char* _current_version = "1.2.5";
```

Your firmware binary must indicate a version number using [semantic
versioning](https://semver.org/). Pass this version to the SDK as a string (an
array of char values).

## Registering for OTA firmware updates

```c
golioth_fw_update_init(client, _current_version);
```

A pointer to the firmware version string is passed via an API call that
initializes the Over-the-Air (OTA) firmware update. This spawns a background
thread that listens for firmware updates from Golioth to automatically update
firmware on the device

## Using a custom package name

By default, firmware updates will use `main` as the name of the package
(e.g. `main-1.2.3`). You may override this by passing a configuration context
during initialization.

```c
golioth_fw_update_config_t fw_config = {
    .current_version = "1.2.3",
    .fw_package_name = "dev"
};
```

```c
golioth_fw_update_init_with_config(client, &fw_config);
```

Custom package names are one way to differentiate firmware types used by your
IoT fleet. The package name specified here must match the package name used when
uploading the binary update to Golioth.

## Examples

* [Golioth
  Basics](https://github.com/golioth/golioth-firmware-sdk/blob/main/examples/common/golioth_basics.c)
  demonstrates the OTA update process.
* The Zephyr port includes [a standalone DFU
  sample](https://github.com/golioth/golioth-firmware-sdk/tree/main/examples/zephyr/fw_update).

## Resources

Further documentation of the device SDK is available in the [Golioth Firmware
SDK
Reference](https://firmware-sdk-docs.golioth.io/group__golioth__fw__update.html)
(Doxygen).
