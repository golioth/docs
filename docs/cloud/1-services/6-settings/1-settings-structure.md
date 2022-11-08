---
id: settings-structure
title: Settings Structure
---

## Settings Structure

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

### Setting Name

It's a per project unique name to describe a setting. There are rules to create a setting name:
<!-- * It's allowed only numbers and  -->

### Setting Data Type

These are the allowed settings data types:
* string
* float
* integer
* boolean

:::caution

**Too much important to observe is once a setting is created, its name (or key) and data type cannot be changed in the future. They're immutable attributes. This was designed this way to avoid issues and inconsistences with firmwares after a setting is already being used.**

:::

