---
title: Firmware
slug: /firmware
sidebar_position: 0
---

## Introduction

Golioth is a cloud services platform for IoT devices. One accepted model for understanding services like those provided by golioth is the [Client Server Model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). Applying Client/Server to the IoT stretches the definition a bit but will prove useful for introducing our Device SDK (DSDK).

### Device SDK Architecture

The code contained within the DSDK plays the client role in that it is the initiator of communications to a Golioth server. The point is, Whether you have one device or many they can use the DSDK to connect a central Golioth "server" which assists the device (*and you*) with day to day functions.

The Golioth DSDK currently abstracts the following services:

* Authentication
* Firmware Updates
* Telemetry reporting via LightDB
* Bulk data streaming via LightDB Stream
* System Logging

The following sections provide an overview and detailed guides on how to consume these services from an embedded, or firmware, development context.
