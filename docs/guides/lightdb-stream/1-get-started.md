---
id: get-started
title: Get Started
draft: true
---

## What is Light DB Stream

We created [Light DB](../lightdb/1-get-started.md) on Golioth platform as a flexible way for users to save device state in the cloud and have a way for devices to observe changes on that state, working like a Digital Twin and allowing to be used as a command and control interface for example. But there is also a need to save not just current state, but save historical information on data that the device is collecting over time.

Following the save principle, we want to bring the same schema-less design from Light DB, by allowing users to send any document like values on any given path and also be able to query data over a period of time, selecting a subset of fields, doing aggregations and also support querying for multiple devices.

The core difference is that Light DB Stream is a append-only cloud database, where devices can send data over time and we provide a easy interface for querying your device data saved on it.

Also, an external party authenticated within our system can interact with it. Either by using `goliothctl stream` commands or using machine-to-machine API Keys. External parties for example can create powerful and complex queries on top of the historical information data to show on a UI for their users.

:::note
See more on [goliothctl stream](/docs/reference/goliothctl/goliothctl_stream) reference docs.
:::

### Use Cases

Here are some ideas on what can be created using Light DB Stream.

- Collecting environmental data from your devices over time.
  - Query data using the REST API and plot temperature and humidity data over time.
- Asset Tracking application
  - A device can post GPS data from time to time and them go to sleep to save battery. The device can also publish the battery state so we can keep track of it
  - Query data using the REST API to show positions on a map.

:::note
For bidirectional communication and real time state, we recommend using Light DB.
:::
