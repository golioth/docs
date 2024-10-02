---
title: Over-the-Air (OTA) Upgrade Overview
sidebar_position: 1
slug: firmware-upgrade
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
[OTA Updates Documentation](../../../device-management/5-ota/README.md).

### Device Side

When a device registers for firmware upgrades, it will receive a manifest from
the Golioth cloud each time a deployment occurs. The SDK automatically parses
the manifest, comparing the received firmware version number with the version
the device is currently running. If the manifest version is newer, the SDK
begins a block download of the artifact. The exact device firmware upgrade (DFU)
mechanism used to verify and flash the firmware varies from platform to
platform. Upon successful update, the device reports the new firmware version
number to the cloud.
