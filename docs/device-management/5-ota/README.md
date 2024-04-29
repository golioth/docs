# Over-the-Air (OTA) Updates

The Golioth Over-the-Air (OTA) firmware update service enables quick, secure
deployment of firmware packages to IoT devices throughout the world. The Golioth
API enables easy management of firmware releases, including multi-part binary
bundles, enabling updates for devices as diverse as smart speakers, digital
signage, machine learning enabled sensor systems, multiple processor embedded
devices, and more.

Our OTA feature is highly flexible, allowing to not just update your main
firmware, but sub components like the Cellular Modem firmware, update an on
device Machine Learning model or even sending custom binaries required for your
application as part of a release.

Artifacts and Releases can be accessed from Golioth Web Console, the [Golioth
REST API](/reference/rest-api/openapi), or by using the [`goliothctl
dfu`](/reference/command-line-tools/goliothctl/goliothctl_dfu) subcommand.
:::info Details for OTA manifest, path, and status

For more information on how the Golioth server and IoT devices communicate with
each other about Over-the-Air updates, see the OTA section of our CoAP
reference:

- [**CoAP Gateway Interface**](/reference/protocols/coap/ota)

:::

## Concepts

### Artifacts

An artifact is a binary image that can be pushed to your embedded device. This
may take the form of the base level firmware (to be used with a bootloader), a
binary blob for an external processor, a firmware image for the modem onboard
(such as the nRF91), or a required content element for the running application,
such as an image or sound file. Individual binaries (artifacts) are versioned
and tracked before being added to a release.

### Releases

A release is a collection of artifacts to be delivered to the target embedded
device. In the simplest example, a release will only contain a single artifact,
the firmware image to reprogram the main processor on board. Once you mark a
release as active, any eligible embedded devices will attempt to download and
install that firmware update. Groups of devices may be targeted using Blueprints
and Tags. Release rollout and rollback can be controlled from the [Golioth
Console](https://console.golioth.io), the REST API, or via command line tools.

### Blueprints

A Blueprint is a way to indicate a unique hardware version for devices in your
fleet. Blueprints help to segment which devices should be notified of a
particular release. For instance, the release may support a different processor
or different peripheral hardware for any given variation of fleet device.

### Tags

One or more tags may be optionally applied to each device in your fleet. Tags
help to associate groups of devices when rolling out firmware updates.
Designating a subgroup of test devices, associating all devices in one building
or on each floor, and grouping devices by application are all good examples of
how tags may be used.

## Use Cases

Here are some ideas on what can be created using our OTA Service.

- Push new feature your devices in the field.
  - Your product can be constantly evolving, so you can be constantly pushing
    new firmware securely to your fleet.
- Fix critical issues in your fleet of devices
  - Security patches, critical bug fixes, etc.
- Edge computing scenarios
  - A critical part of an edge computing scenario, is improving you Machine
    Learning model and updating devices with that latest optimized model.
  - Push timeseries data to LightDB Stream, improve your ML model and upload it
    as an Artifact on our platform that can be part of a subsequent OTA Release.
- Digital billboard
  - Any kind of file can be uploaded as an Artifact and added as part of a
    subsequent OTA Release, so you can push digital assets like images and
    videos to your devices.
