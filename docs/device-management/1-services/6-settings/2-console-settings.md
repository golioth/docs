---
id: locate-setting
title: Settings in the Golioth Console
---

There are three distinct places in the Golioth Console to work with Settings
service values: the project-level, the blueprint-level, and the device-level.

:::tip Creating a new setting

Remember that a new setting can only be created at the project-level.

:::

## Project-level settings

Project-level settings are easily found in the main page of the Golioth Console.
Click on `Device Settings` in the left side bar menu to open the project-level
settings listing.

The `Create` button in the upper right is used to generate a new setting:

![Create new setting modal](./assets/create-setting-modal.png)

Use upper-case letters, numbers, and underscore to set a unique Key. Specify the
data type, and set an initial value before clicking the save button.

![Listing Project-level settings](./assets/listing-project-level-settings.png)

Here you can see two settings keys (`FIRST_SETTING` and `SECOND_SETTING`). The
`Create` button in the upper right is used to add new settings.

This interface may be used to delete a setting by first selecting the check box
to the right of it and then clicking on the `Delete Selected` button that
appears.

## Blueprint-level settings

Blueprint-level settings are adjusted from the details section of a specific
blueprint. Click the `Blueprints` entry on the left sidebar menu and choose the
desired blueprint:

![Blueprints](./assets/blueprint-listing.png)

At the blueprint details page you can find the `Device Settings` section with
all the settings applicable to that blueprint:

![Listing Blueprint-level settings](./assets/listing-blueprint-level-settings.png)

In this view, the `Level` column indicates which level of the settings hierarchy
is responsible for the settings value. We can see that the `SECOND_SETTING` has
been updated at the `Blueprint` level. The garbage-can icon next to the setting
can be used to remove this override, restoring the project-level value in the
process.

## Device-level settings

Device-level settings are found on the details tab of a specific device. Click
on `Devices` from the left sidebar menu. Choose the desired device, then click
on the `Settings` tab:

![Device Settings Tab](./assets/device-settings-tab.png)

![Listing Device-level settings](./assets/listing-device-level-settings.png)

Once again, the `Level` column indicates which level of the settings hierarchy
is responsible for the settings value. We can see that the `SECOND_SETTING` has
been overridden at the `Device` level and this value will only affect the device
you're currently viewing. The garbage-can icon next to the setting can be used
to remove this override, restoring the project-level/blueprint-level
inheritance.

## Settings synch status and other information

### Sync status

Devices will report their settings synchronization status to the Golioth
Console. Sync status is shown in summary tab and settings tab of each device.
Hover over the red-I icon to reveal the sync status message.

![Settings sync status](./assets/sync-status.png)

For more information on types of sync status, see the `golioth_settings_status`
enumeration on [the Golioth Zephyr SDK
reference](https://zephyr-sdk-docs.golioth.io/group__golioth__settings.html).

### Inheritance information on mouseover

When viewing a setting that has been overridden, an information icon will be
present in the `Level` column. Stop the mouse over the icon to reveal a modal
containing a summary of the hierarchy of overrides:

![Hierarchy of overrides](./assets/overrides-hierarchy.png)
