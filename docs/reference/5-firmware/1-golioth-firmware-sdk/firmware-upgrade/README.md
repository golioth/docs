---
title: Over-the-Air (OTA) Upgrade Overview
sidebar_position: 1
---

This section will guide you through Over-The-Air (OTA) firmware updates for
embedded devices using the Golioth Device Firmware Update (DFU) service. The
Golioth Firmware SDK includes DFU sample code which runs on all Continuously
Verified Boards. A walkthrough is included here to help you become familiar with
the process.

## OTA Overview

### Cloud Side

The Golioth Cloud stores firmware as "packages". Packages are included in
deployments, which can be rolled out to groups of devices. Devices targeted by a
deployment will automatically see new package version and begin the update
process. Read more about how deployments are handled in the Golioth Cloud in the
[OTA Updates Documentation](/device-management/5-ota/README.md).

### Device Side

When a device subscribes to the OTA manifest
([`golioth_ota_manifest_subscribe()`](https://firmware-sdk-docs.golioth.io/group__golioth__ota.html)),
Golioth sends it a new manifest each time a deployment changes. The device also
fetches the manifest periodically, once a day by default
(`CONFIG_GOLIOTH_OTA_MANIFEST_SUBSCRIPTION_POLL_INTERVAL_S`). The
firmware update sample code parses the manifest and compares the received
firmware version number with the version the device is currently running. If
they differ, the sample begins a block download of the artifact. The exact
device firmware upgrade (DFU) mechanism used to verify and flash the firmware
varies from platform to platform. Upon successful update, the device reports
the new firmware version number to the cloud.
