---
id: overview
title: Settings Overview
slug: /cloud/services/settings
---

## What is Settings?

One of the goals of the Golioth platform is to provide a flexible way for users to configure a set of settings on each device.

Unlike LightDB (State) that's more indicated for describing the current state of the device, for example, the current value of a temperature sensor, settings should be used for long-lived persistent data that, in general terms, will describe how the device will operate.

### Settings Hierarchy

Settings service lets users to set one or more settings for a single device, for all devices that belong to a blueprint and for all devices of a project. It's important to understand that there is an hierarchy to apply settings for devices:

* a setting will always be created first at the project-level and, for that reason, it'll be applied to all devices of that project.

But if you want to change the value of the settings either for a single device or an entire group of devices under a blueprint you can:

* override a per blueprint-level setting value, to be applied only to blueprint's devices
* override a per device-level setting value, to be applied only to that device

Pay attention to the precendence order of the overrides:
* Device-level overrides will always override blueprint and project-level settings.
* Blueprint-level overrides will always override project-level settings.

### Settings Structure

Each setting has the following fields structured:
* Name
* Data Type
* Value

For example:

Name | Data Type | Value
-|-|-
MAX_RPM | Integer | 120
LOG_LEVEL | String | DEBUG
READINGS_PERIOD | Integer | 60
TEMP_LIMIT_IN_C | Float | 88.5
SEND_DATA_AT_NIGHT | Boolean | true

#### Setting Name

It's a per project unique name to describe a setting. There are rules to create a setting name:
<!-- * It's allowed only numbers and  -->

#### Setting Data Type

These are the allowed settings data types:
* string
* float
* integer
* boolean

:::caution

**Too much important to observe is once a setting is created, its name (or key) and data type cannot be changed in the future. They're immutable attributes. This was designed this way to avoid issues and inconsistences with firmwares after a setting is already being used.**

:::

### Use Cases

Some ideas on how device's behaviors can be changed using settings without touching the devices.

- Adjusting log levels
  - It's possible to adjust which log level a device or a group of devices must report. For example, changing from info log level to warn, error or debug log levels
- Configuring the sensor readings delay
  - With settings, the rate of readings can be easily changed. It's possible to increase or decrease the time between readings.
- Adjusting how frequently a cellular connection is used to improve the power consumption
  - Settings can be used to improve the battery consumption, for example, when a setting describes the interval to send a new data over the cellular connection.
- Setting a task trigger according to sensor readings
  - You may want to trigger some task to be executed only if a sensor reading is equal, higher or lower than certain setting value, for example.