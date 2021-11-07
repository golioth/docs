---
id: overview
title: Overview
slug: /cloud/service/ota
---

Golioth Device Firmware Update (DFU) enables quick, secure deployment of firmware packages to IoT devices throughout the world. The Golioth Web Console enables easy management of firmware releases, including multi-part binary bundles, enabling updates for devices as diverse as smart speakers, digital signage, machine learning enabled sensor systems, multiple processor embedded devices, and more.

Our DFU feature is highly flexible, allowing to not just update your main firmware, but sub components like the Cellular Modem firmware, update a on device Machine Learning model or even sending custom binaries required for your application as part of a release.

Artifact and Releases can be accessed through either the [`goliothctl dfu`](/reference/command-line-tools/goliothctl/goliothctl_dfu) subcommand, the [DFU REST API](/reference/api-docs) or from Golioth Web Console.

### Concepts

- Artifacts
  - An artifact is a binary image that can be pushed to your embedded device. This may take the form of the base level firmware (to be used with a bootloader), a binary blob for an external processor, a firmware image for the modem onboard (such as the nRF91), or a required content element for the running application, such as an image or sound file. Individual binaries (artifacts) can be versioned and tracked before being added to a release.
- Release
  - A release is a collection of artifacts to be delivered to the target embedded device. In the simplest example, a release will only contain a single artifact, the firmware image to reprogram the main processor on board. Once you mark a release as active, any eligible embedded devices will attempt to download and install that firmware update. Release rollout and rollback can be controlled from the [Golioth Console](https://console.golioth.io)
- Blueprint
  - Blueprint is a mapping of the elements on board your system. This includes the memory mapping of flash elements onboard. Blueprints help to segment which devices in your fleet are elible to download a particular release. For instance, the release may have a different firmware memory offset for one blueprint vs another, due to differences in the flash memory on different versions of a product.
 

### Use Cases

Here are some ideas on what can be created using our DFU Service.

- Push new feature your devices in the field.
  - Your product can be constantly evolving, so you can be constantly pushing new firmware securely to your fleet.
- Fix critical issues in your fleet of devices
  - Security patches, critical bug fixes, etc.
- Edge computing scenarios
  - A critical part on a edge computing scenario, is improving you Machine Learning model and updating devices with that latest optimized model.
  - Push timeseries data to LightDB Stream, improve your ML model and upload it as an Artifact on our platform that can be part of a DFU Release.
- Digital billboard
  - Any kind of file can be uploaded as an Artifact and added as part of a DFU Release, so you can push digital assets like images and videos to your devices.
