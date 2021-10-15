---
id: overview
title: Overview
slug: /services/ota
---

Golioth Device Firmware Update (DFU) enables quick, secure deployment of firmware packages to IoT devices throughout the world. The Golioth Console enables easy management of firmware releases, including multi-part binary bundles, enabling updates for devices as diverse as smart speakers, digital signage, machine learning enabled sensor systems, multiple processor embedded devices, and more.

Our DFU feature is highly flexible, allowing to not just update your main firmware, but sub components like the Cellular Modem firmware, update a on device Machine Learning model or even sending custom binaries required for your application as part of a release.

A stream can be accessed through either the [`goliothctl dfu`](/reference/command-line-tools/goliothctl/goliothctl_dfu) subcommand or the [DFU REST API](/reference/api-docs).

### Concepts

- Artifacts
- Releases
- Blueprints

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
