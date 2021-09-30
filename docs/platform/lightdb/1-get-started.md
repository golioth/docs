---
id: get-started
title: Get Started
---

## What is Light DB

One of the goals of the Golioth platform is to provide a flexible way for users to have access to Data and Compute resources for IoT projects.

Light DB falls into the Data Resource category, providing an easy way for IoT devices to save, query and listen to data changes in the cloud. Any authenticated device can connected to one of the gateways on our system and access Light DB.

Also, an external party authenticated within our system can interact with it. Either by using `goliothctl lightdb` commands or in the future we gonna allow the creation of machine-to-machine API Key. External parties for example can query data to show on a UI and also change data so the device can react to those changes.

:::note
See more on [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb) reference docs.
:::

### Use Cases

Here are some ideas on what can be created using Light DB.

- Persisting state and querying from the device.
  - A device can persist it's own state in the Cloud.
  - In a scenario of loosing local state, it can sync up with the saved state in the Cloud.
- Checking device latest state
  - A device can post data that is being collected to a given path and them go to sleep.
  - An external service can read the full device data and present that into a user friendly interface.
- Basic Commands Interface or Bidirectional Communication
  - A device can Observe a path that represents the next desired state.
  - An external service can update that desired state value.
  - Device can delete the given path after applying changes.
- Track Device Generated Alerts
  - A device can trigger an alert state and update a path in the cloud.
  - An external service can monitor that path.
  - When that service acknowledges the alert, it deletes the path, so the device knows that it was acknowledged.
