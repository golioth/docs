---
title: LightDB Client Overview
sidebar_position: 1
---

LightDB is a database service hosted by Golioth. It can be used to create applications involving resource state. Device state such as LED on/off, door lock position, or thermostat settings are easy to manage using the Golioth cloud.

The key differentiator between the LightDB and LightDB Stream services offered by Golioth is data persistence. LightDB data values do not accumulate, they are replaced with update calls. The LightDB Stream service can be used to create time series data.

![Console](../assets/lightDB-trans-svg-A4.svg)

Checkout the [LightDB guides](https://docs.golioth.io/cloud/services/lightdb/) for a walkthrough of the samples demonstrating the firmware calls used to interact with the Golioth LightDB service.
