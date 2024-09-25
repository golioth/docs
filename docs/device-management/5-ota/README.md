# Over-the-Air (OTA) Updates

:::usage
Deploying OTA updates incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The Golioth Over-the-Air (OTA) firmware update service enables quick, secure
deployment of firmware packages to IoT devices throughout the world. The Golioth
API enables easy management of firmware deployments, including multi-part binary
bundles, enabling updates for devices as diverse as smart speakers, digital
signage, machine learning enabled sensor systems, multiple processor embedded
devices, and more.

Our OTA feature is highly flexible, allowing to not just update your main
firmware, but sub components like the Cellular Modem firmware, update an on
device Machine Learning model or even sending custom binaries required for your
application as part of a deployment.

Packages and Deployments can be accessed from Golioth Web Console, the [Golioth
REST API](/reference/management-api/openapi), or by using the [`goliothctl
dfu`](/reference/command-line-tools/goliothctl/goliothctl_dfu) subcommand.

:::info Details for OTA manifest, path, and status

For more information on how the Golioth server and IoT devices communicate with
each other about Over-the-Air updates, see the OTA section of our CoAP
reference:

- [**CoAP Gateway Interface**](/reference/device-api/api-docs/ota)

:::

## Concepts

### Packages

A package is an upgradeable software component on your embedded device. Packages
can represent executable firmware or static assets like images, AI models or
sound files. Each package has a version history and a set of metadata to let you
categorize and track changes to each software component in your project.

### Artifacts

An artifact is the binary content of a single package version. Artifacts are
uploaded to Golioth as files and distributed to your devices by being included
in [Deployments](#deployments).

### Deployments

Deployments are bundles of artifacts that are distributed to the devices in your
project. A deployment can contain any number of artifacts, each targeting a
specific package on your device. Each deployment should contain all the packages
your devices need to operate correctly, even if you don't update all of them
every time.

### Cohorts

A cohort is a group of devices that all receive the same deployments. A device
can only belong to one cohort, and each cohort will only have one active
deployment at any time. Adding a device to a cohort will immediately emit an
event to the device telling it to upgrade its packages to the versions in the
active deployment.

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
    as an Artifact on our platform that can be part of a subsequent OTA
    Deployment.
- Digital billboard
  - Any kind of file can be uploaded as an Artifact and added as part of a
    subsequent OTA Deployment, so you can push digital assets like images and
    videos to your devices.
