---
id: overview
title: Overview
slug: /service/lightdb
---

## What is LightDB?

One of the goals of the Golioth platform is to provide a flexible way for users to have access to Data and Compute resources for IoT projects.

LightDB provids an easy way for IoT devices to save, query and listen to data changes in the cloud. Any authenticated device can connected to one of the gateways on our system and access LightDB.

An external party authenticated within our system (such as the command line interface on your computer) can interact with LightDB. Currently this is possible via the `goliothctl lightdb` command. External parties can query data to show on a UI and also change data so the device can react to those changes.

The device state database serves as the “device twin” of your device. All the state of your device can be captured and synchronized with the cloud. You can query devices based on their current dynamic state, and apply actions based on the queries: Call remote procedure (RPC), change configuration (in bulk), turn features on or off, or trigger (bulk) firmware updates.

:::note
See more on [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb) reference docs.
:::

### Use Cases

Here are some ideas on what can be created using LightDB.

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
