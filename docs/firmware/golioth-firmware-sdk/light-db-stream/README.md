---
title: LightDB Stream Client Overview
sidebar_position: 1
---

LightDB is a set of database services hosted by Golioth. **LightDB Stream** is a
uni-directional service that handles time-series data. Use it to accumulate
sensor data received from devices in the field. Golioth will automatically add a
timestamp to each set of received data, or you may optionally include your own
timestamps for Golioth to use.

## LightDB State vs. LightDB Stream

Key differentiators between the LightDB State and LightDB Stream services
offered by Golioth:

* **Data Persistence:**
    * LightDB State data values do not accumulate, they are replaced with update
      calls.
    * LightDB Stream data accumulates, resulting in a timestamp-based historical
      record of all received values.
* **Directionality:**
    * LightDB State is bidirectional; changes may originate from either the
      device or the cloud (e.g. via a REST API call or changes made on the
      Golioth Web Console).
    * LightDB Stream is a unidirectional service (device to cloud) useful for
      recording time series data.

## LightDB API

The [Golioth Firmware SDK](https://github.com/golioth/golioth-firmware-sdk)
includes functions for working with stream data. These are described in depth
in the next page.
