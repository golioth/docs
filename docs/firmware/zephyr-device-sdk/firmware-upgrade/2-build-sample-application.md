---
title: Over-the-Air (OTA) Update Walkthrough
sidebar_position: 2
---

Over-the-Air (OTA) updates are a type of Device Firmware Upgrade (DFU); for this
sample let's consider the two terms synonymous. In this page we'll walk through
the DFU sample found in [the Golioth Zephyr (and NCS)
SDK](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/dfu).

We will target the Nordic nRF9160dk, however these step are portable to all
other supported boards.

## Overview

### Expected Outcome

By the end of this page your device will download, verify, install, and run an
updated firmware version and report the results to the Golioth Console.

### OTA Update Sample Workflow

1. Set credentials for the device
2. Build and flash the initial DFU sample application
3. Rebuild the firmware with new version number (the update)
4. Upload the signed/versioned firmware as an artifact
5. Create a release from the artifact and roll it out to the device
6. Observe the device reporting the update version number

## Running the OTA Sample

### 1. Set credentials for the device

:::note Credential Storage

By default, the Golioth DFU sample hardcodes PSK device credentials in the
compiled binary. However, hardcoded certificate credentials and runtime PSK
credentials are also supported. View the [readme for this
sample](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/dfu#authentication-specific-configuration)
for details.

:::

Navigate to the Golioth module in your zephyr install. If you followed [our
nRF9160 Zephyr Quickstart](/hardware/nrf91/zephyr-quickstart) this will be in
the `golioth-ncs-workspace/module/lib/golioth` directory.

Update the sample project `samples/dfu/prj.conf` file with you device
credentials:

```cfg
CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK_ID="my-psk-id"
CONFIG_GOLIOTH_SAMPLE_HARDCODED_PSK="my-psk"
```

:::tip Where do I find my device credentials?
Credentials can be copied from the Device details page in the [Golioth
Console](https://console.golioth.io).
:::

### 2. Initial build and flash

Build and flash the sample code.

```bash
west build -b nrf9160dk_nrf9160_ns samples/dfu -p
west flash
```

This will build and run `v1.2.3` firmware on the Nordic nRF9160 development kit.

:::info Building and flashing MCUboot to other devices

The nRF9160 build tools handle the bootloader and image signing in a different
way from other boards. In most other cases, you should use the `--sysbuild`
command when building the DFU sample:

```bash
$ west build -b <board> --sysbuild samples/dfu
$ west flash
```

:::

### 3. Rebuild firmware with new version number

Now give your firmware a new version number by editing `samples/dfu/prj.conf` and updating the version as follow:

```cfg
CONFIG_GOLIOTH_SAMPLE_FW_VERSION="1.2.4"
```

Build the application a second time.

```bash
west build -p -b nrf9160dk_nrf9160_ns samples/dfu --
```

:::note
Do not run the west flash command. We will upload this binary to the
Golioth Console and it will be loaded on the device via Over-The-Air (OTA)
update.
:::

### 4. Upload new firmware to the Golioth Console

The new binary is located at `build/zephyr/app_update.bin` and can now be used
to create an artifact on the Golioth Console.

1. Log into the Golioth Console
2. Navigate to `Firmware-Updates`&rarr;`Artifacts` menu and click the `Create` button
3. Enter the version number you used at compile time into the `Artifact Version`
   box
4. Click the upload icon and choose your app_update.bin file
5. Click `Upload Artifact`

:::info Binary Location for other Boards

When building for a board that is not the nRF9160, the new binary will be
located at `build/dfu/zephyr/zephyr.signed.bin`

:::

### 5. Create a release and rollout the firmware update

You must create a release based on the artifact you just uploaded, then rollout
that release to tell your devices there is an update available.

1. Log into the Golioth Console
2. Navigate to `Firmware-Updates`&rarr;`Releases` menu and click the `Create` button
3. Choose your newly updated artifact from the `Artifacts` dropdown box, then
   click `Create Release`
4. You will see a list of releases, click the `Rollout` button next to your new
   release.

Each time the device establishes an active connection with the Golioth Cloud it
will compare the firmware version currently running with what is available from
the server. Newer firmware releases will be automatically downloaded, verified,
and flashed to the device.

### 6. Verify the new version

By default, the device will use MCUboot to verify the signature of new firmware
and ensure that it can be run before switching. Once the new release is running,
the device will report the version to Golioth which can be viewed in the
Firmware tab of the Golioth Console.

![Golioth Console showing firmware version](../assets/golioth-console-firmware-version.jpg)

## Summary

Over-the-Air updates are one of the most powerful tools in IoT. Running [the
Golioth DFU sample
application](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/dfu)
has demonstrated how the firmware updates are compiled and versioned, the
process for creating the artifact and rollout on the Golioth Console, and the
device reporting back a new version number after a successful update.
