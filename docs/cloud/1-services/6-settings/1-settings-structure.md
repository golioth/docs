---
id: settings-structure
title: Settings Structure
---

Each setting structure includes the following fields:

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

### Setting Keys

The settings keys are unique names used to describe a setting. They are used by
the Golioth Console, the Golioth Cloud, and the firmware running on the devices
so they are limited to the following characters:

* Upper case letters (A-Z)
* Numbers (0-9)
* Underscore (`_`)

No other characters may be used.

### Setting Data Type

These are the allowed settings data types:
* string
* float
* integer
* boolean

:::caution Settings keys and data types cannot be changed after they are created.

The settings key and data type are immutable attributes. This is by design to
avoid issues and inconsistences with device firmware after a setting is already
being used.

:::

