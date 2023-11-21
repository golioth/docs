---
id: overview
title: LightDB Stream Overview
slug: /data-management/stored-data/lightdb-stream
---

## What is LightDB Stream?

A LightDB Stream is just that, the concept of LightDB applied to streamed, timeseries data. Instead of a single value, with the most recent data taking precedence, LightDB Stream is append-only and store all data that's ever been submitted, in order of timestamp.

LightDB Stream queries are highly configurable, supporting field subsets, aggregation, and multiple devices at once.

A stream can be accessed through either the [`goliothctl stream`](/reference/command-line-tools/goliothctl/goliothctl_stream) subcommand or the [LightDB Stream REST API](/reference/rest-api/openapi).

### Use Cases

Here are some ideas on what can be created using LightDB Stream.

- Collecting environmental data from your devices over time.
  - Query data using the REST API and plot temperature and humidity data.
- Asset Tracking application
  - A device can post GPS data from time to time and them go to sleep to save battery. The device can also publish the battery state so we can keep track of it
  - Query data using the REST API to show positions on a map.

:::note
For bidirectional communication and real time state, we recommend using LightDB.
:::
