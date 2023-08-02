---
title: LightDB State Client Overview
sidebar_position: 1
---

LightDB is a set of database services hosted by Golioth. **LightDB State** a
bi-directional service that handles stateful data, use it to create applications
involving resource state. Device state such as LED on/off, door lock position,
or thermostat settings are easy to manage using the Golioth cloud.

## LightDB State vs. LightDB Stream

Key differentiators between the LightDB State and LightDB Stream services
offered by Golioth:

* **Data Persistence:**
    * LightDB State data values do not accumulate, they are replaced with update
      calls
    * LightDB Stream data accumulates, resulting in a timestamp-based historical
      record of all received values
* **Directionality:**
    * LightDB State is bidirectional; changes may originate from either the
      device or the cloud (e.g. via a REST API call or changes made on the
      Golioth Web Console)
    * LightDB Stream is a unidirectional service (device to cloud) useful for
      recording time series data

## LightDB API

The [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk)
includes numerous functions for working with state data. They can be grouped
into four categories:

* LightDB Delete: delete stored data at a specific path
* LightDB Get: retrieve stored state data from a specific path
* LightDB Observe: register a callback to run whenever data changes on the cloud
* LightDB Set: store state data at a specific path

These categories are described in-depth in the pages to follow. Please review
the Golioth Firmware SDK Doxygen site for [a comprehensive LightDB API
reference](https://firmware-sdk-docs.golioth.io/group__golioth__lightdb.html).

:::tip
LightDB API calls that have `stream` in the name&mdash;e.g.,
`golioth_lightdb_stream_set_int_async()`&mdash;are used for the time-series
LightDB State service. All others relate to the LightDB State service.
:::
