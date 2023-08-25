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

The Golioth Cloud stores firmware as "artifacts" that can optionally include
tags and blueprints to filter which devices are targeted. For example, you might
tag a few devices as "dev" to test firmware rollouts, or categorize a hardware
blueprint for all of the "nRF9160_asset_tracker" devices in your IoT fleet. A
release is created using the artifact. Devices will automatically see new
release version and begin the update process. Golioth includes a one-click
rollback feature if you ever need to revert a rollout.

### Device Side

When a device registers for firmware upgrades, it will receive a manifest from
the Golioth cloud each time a release rollout change occurs. The SDK
automatically parses the manifest, comparing the received firmware version
number with the version the device is currently running. If the manifest version
is newer, the SDK begins a block download of the artifact. The exact device
firmware upgrade (DFU) mechanism used to verify and flash the firmware varies
from platform to platform. Upon successful update, the device reports the new
firmware version number to the cloud.
