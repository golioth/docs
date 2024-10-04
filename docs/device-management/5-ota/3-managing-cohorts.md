---
id: managing-cohorts
title: Managing cohorts
---

In order to deploy OTA updates to your devices, you'll need to assign them to a
cohort. A cohort is a group of devices that should have the same set of
packages, and receive the same firmware updates.

Typically, you'll need to create a cohort for each type of device in your
project. For example, if your project contains both light switches and light
bulbs, you should form one "Light Switch" cohort and one "Light Bulb" cohort, so
that you can manage the firmware of the two types of devices separately. You may
also want to create dedicated cohorts for devices that should receive the
updates early, such as internal test devices or external beta testers.

## Assigning devices to a cohort

There are three ways to assign a device to a cohort in the Golioth Web Console:

- In the cohort's page:
    1. Click the `Add Devices` button in the top right corner
    2. Find the device you want to add to the cohort in the table
    3. Click the `Add` button next to your device in the table
- In the Device Index:
    1. Select the devices you want to add using the checkboxes in the device
       list
    2. Click `Bulk Actions` in the top right corner
    3. Select `Assign to cohort`
    4. Select the right cohort and press `Assign`
- In the Edit Device page:
    1. Click the `Edit` button in the top right corner
    2. Select a cohort in the `cohort` dropdown in the form
    3. Click `Save`

If your device is online and observing the OTA manifest, it will immediately
receive a manifest update and start updating its packages to match the cohort's
active deployment.


## Removing devices from a cohort

You can remove a device from a cohort through the Device Index and the Edit
Device page using the same workflow as when you added them. You can also remove
the device from a cohort in the Devices tab of the cohort page by selecting the
device in the table and clicking `Remove Device` in the top right corner.

When you remove a device from a cohort, it stops receiving updates about its deployments. Contrary to when you added a device to a cohort, removing it will **not** prompt an immediate manifest change event on the device.

:::warning Fallback to legacy releases

If you have previously used the old releases concept to distribute OTA updates,
devices that are removed from their cohorts will fall back to using releases as
a basis for their manifest. You can avoid this by disabling rollout for all your
old releases. See [the migration
documentation](./5-migrating-from-releases/README.md) for more information.

:::
