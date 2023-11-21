---
id: overview
title: Settings Overview
slug: /device-management/settings
---

## What is the Settings Service?

The Golioth platform provides a flexible way for users to configure settings on
each device in your fleet. You can change settings for you entire fleet of
devices in a single operation, or make more targeted changes.

Settings describe how the device will operate. This is fundamentally different
from LightDB State, which is valuable for describing the current state of the
device. The Settings Service should be used for long-lived persistent settings
data that affects your entire fleet, groups of devices, and of course single
devices.

### Settings Hierarchy

There is a hierarchy to apply settings for devices:

1. A setting is always created at the project-level. The initial value applies
   to all devices of that project.
2. Overriding a settings value at the blueprint-level will apply that new value
   to all devices that match the blueprint.
3. Overriding a settings value at the device-level will apply the new value to
   that device only.

#### Pay attention to the precedence order of the overrides:

* Device-level overrides will always override blueprint and project-level
  settings.
* Blueprint-level overrides will always override project-level settings.

### Use Cases

Here are some ideas on how a device's behaviors can be changed using settings
without touching the devices.

- Adjust logging levels
  - Adjust which log level a device or a group of devices is sending back to the
    Golioth servers. For example, change from the `info` log level to `warn`,
    `error` or `debug`.
- Configure the sensor reading delay
  - With settings, the rate of sensor readings can be easily changed. It's
    possible to increase or decrease the time between readings.
- Improve power consumption by adjust how frequently a cellular connection is
  used
  - Settings can be used to change interval between uploading sensor data via a
    cellular connection.
  - Remaining in deep-sleep longer by uploading less frequently can help improve
    the battery consumption.
- Set a task trigger according to sensor readings
  - You may want to trigger some task to be executed based on a sensor reading
    that is not precicesly known when the device is installed. The Settings
    service allows this value to be adjusted remotely at any time.
