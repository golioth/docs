---
title: Zephyr Firmware Update Example Walkthrough
sidebar_position: 2
---

Over-the-Air (OTA) updates are a type of Device Firmware Upgrade (DFU). In this
page we'll walk through the FW Update sample found in [the Zephyr
port of the Golioth Firmware
SDK](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/fw_update),
which shows how to use the Golioth OTA update service.

We will target the Nordic nRF9160dk (Using the NCS version of Zephyr), however
these step are portable to all other supported boards.

## Overview

### Expected Outcome

By the end of this page your device will download, verify, install, and run an
updated firmware version and report the results to the Golioth Console.

### OTA Update Sample Workflow

1. Add hardcoded credentials
2. Build and flash the initial FW Update sample application
3. Upload the signed/versioned firmware as an artifact
4. Create a release from the artifact and roll it out to the device
5. Observe the device reporting the update version number

## Running the OTA Sample

### 1. Add hardcoded credentials

Navigate to the Golioth module in your zephyr install. This will be the
`/modules/lib/golioth-firmware-sdk` directory.

Add the Golioth device PSK-ID and PSK to the project `prj.conf` file:

```cfg
CONFIG_GOLIOTH_SAMPLE_PSK_ID="my-psk-id"
CONFIG_GOLIOTH_SAMPLE_PSK="my-psk"
```

:::tip Where do I find my device credentials?

Credentials can be copied from the Device details page in the [Golioth
Console](https://console.golioth.io).

:::

### 2. Initial build and flash

```console
west build -b nrf9160dk_nrf9160_ns examples/zephyr/fw_update
west flash
```

By default this will build and run version `v1.2.3` firmware on the Nordic
nRF9160 development kit.

:::tip Building for other devices

The Nordic version of Zephyr (NCS) uses a slightly different build command from
upstream Zephyr. For non-Nordic boards the build command should also use the
`--sysbuild` flag:

```console
# Example build command for NXP i.MX RT1024 Evaluation Kit
west build -b mimxrt1024_evk --sysbuild examples/zephyr/fw_update
west flash
```

:::

### 3. Rebuild firmware with new version number

Now update the firmware version in the project `prj.conf` file:

```cfg
CONFIG_MCUBOOT_IMGTOOL_SIGN_VERSION="1.2.4"
```

Then build the application a second time.

```console
west build -b nrf9160dk_nrf9160_ns examples/zephyr/fw_update
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
3. Enter the version number you used in the `prj.conf` file (`1.2.4`) into the
   `Artifact Version` box
4. Click the upload icon and choose your `app_update.bin` file
5. Click `Upload Artifact`

:::tip Different update files for other builds

Builds that use Zephyr (and not NCS) have a different update file. In those
cases, upload the `build/fw_update/zephyr/zephyr.signed.bin` file to Golioth.

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

![Golioth Console showing firmware version](../../assets/golioth-console-firmware-version.png)

## Summary

Over-the-Air updates are one of the most powerful tools in IoT. Running the
Golioth FW Update sample application has demonstrated how the firmware updates
are compiled and versioned, the process for creating the artifact and rollout on
the Golioth Console, and the device reporting back a new version number after a
successful update.

:::note Do not use hardcoded credential in practice

The Golioth FW Update sample uses hardcoded PSK credentials to simplify the
example code. An alternate option must be used when more than one device is
receiving an update (e.g. device certificate authentication stored in persistent
memory). This will ensure that credentials specific to each device are not
overwritten by hardcoded values present in the update.

:::

:::note Binaries signed with a default key

This sample uses the default MCUboot key for signing. For production devices,
you must generate your own key to sign the binary files.

:::
