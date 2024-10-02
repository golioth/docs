---
id: managing-cohorts
title: Managing Cohorts
---

In order to deploy OTA updates to your devices, you'll need to assign them to a
Cohort. A Cohort is a group of devices that should have the same set of
packages, and receive the same firmware updates.

Typically, you'll need to create a Cohort for each type of device in your
project. For example, if your project contains both light switches and light
bulbs, you should form one "Light Switch" Cohort and one "Light Bulb" Cohort, so
that you can manage the firmware of the two types of devices separately. You may
also want to create dedicated cohorts for devices that should receive the
updates early, such as internal test devices or external beta testers.

## Assigning devices to a Cohort

There are three ways to assign a device to a Cohort in the Golioth Web Console:

- In the Cohort's page:
    1. Click the `Add Devices` button in the top right corner
    2. Find the device you want to add to the Cohort in the table
    3. Click the `Add` button next to your device in the table
- In the Device Index:
    1. Select the devices you want to add using the checkboxes in the device
       list
    2. Click `Bulk Actions` in the top right corner
    3. Select `Assign to Cohort`
    4. Select the right Cohort and press `Assign`
- In the Edit Device page:
    1. Click the `Edit` button in the top right corner
    2. Select a Cohort in the `Cohort` dropdown in the form
    3. Click `Save`

If your device is online and observing the OTA manifest, it will immediately
receive a manifest update and start updating its packages to match the Cohort's
active deployment.


## Removing devices from a Cohort

You can remove a device from a Cohort through the Device Index and the Edit
Device page using the same workflow as when you added them. You can also remove
the device from a Cohort in the Devices tab of the Cohort page by selecting the
device in the table and clicking `Remove Device` in the top right corner.

When you remove a device from a Cohort, it stops receiving updates about its deployments. Contrary to when you added a device to a Cohort, removing it will **not** prompt an immediate manifest change event on the device.

:::warning Fallback to legacy releases

If you have previously used the old Releases concept to distribute OTA updates,
devices that are removed from their cohorts will fall back to using releases as
a basis for their manifest. You can avoid this by disabling rollout for all your
old releases. See [the migration
documentation](./5-migrating-from-releases/README.md) for more information.

:::
