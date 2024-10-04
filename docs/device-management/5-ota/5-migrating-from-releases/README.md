# Migrating From Releases

The Cohorts workflow for rolling out OTA updates to devices is a direct
replacement of the old Releases workflow. Releases are already disabled for all
new projects, and will be disabled for all existing projects at a later stage.

If your project is currently deploying OTA updates using the Releases workflow,
we recommend transitioning to Cohorts as soon as possible.

## Differences between Releases and Cohorts

Cohorts bring two fundamental upgrades to the way OTA Updates are distributed
to your devices. The most important change is that you now have to explicitly
add a device to a Cohort, instead of relying on the blueprint and tags matching
mechanism in Releases and Artifacts. The second fundamental change is the way
each update is rolled out — with Releases, each Release could be enabled and
disabled at any time, and there could be multiple Releases enabled at the same
time. With Cohorts, updates (referred to as Deployments) are rolled out in a
linear timeline of events, with no option for retracting existing Deployments.

Let's take a closer look at how this affects your workflow.

### Explicit targeting

Releases targeted devices through implicit matching of tags and blueprints. When
a Release was rolled out, the Golioth Cloud would determine which devices should
be receiving the Release based on the tags and blueprints of each device in the
project. While this made it easy to target new devices by changing their tags,
it meant that actions like adding a tag to a device carried an unproportionate
weight to it, as this could make the device pull down a new OTA update
unintentionally, which could be catastrophic. Additionally, there wasn't a clear
indication about which devices would receive a new Release, which made the issue
worse.

The new workflow alleviates this problem by enforcing explicit targeting. Every
device that needs to receive an OTA update now has to be assigned to a Cohort
first. While this adds an extra step to update management, it makes it a lot
harder to push the wrong OTA update by mistake.

### Linear timeline of Deployments

Releases featured a roll out toggle that would let you enable or disable
releases at any time. This caused Releases to behave more like firmware
configurations you could move between than updates you could push to your fleet.

In the new workflow, Deployments are immutable events. You can still move
between different versions of your firmware, but to roll back to a previous
version, you now have to issue a new Deployment that instructs the device to go
back. A Deployment is applied to every device in the Cohort, and there's only
ever one active Deployment for each Cohort. This makes it easier to determine
exactly what firmware each device is expected to have — not just right now, but
also historically.

### Other differences

In addition to explicit targeting and a linear timeline of Deployments, there
are a couple of smaller differences between Releases and Cohorts:

- **Adding a device to a Cohort will push a manifest update to the device right
  away.** With Releases, devices would only receive an update notification when
  you rolled out a Release, but could still poll for the active Release between
  roll outs. With Cohorts, the active Deployment is always issued to every
  device in the Cohort as soon as possible.
- **Artifact blueprints are no longer considered.** If a Deployment contains an
  artifact, the artifact will be distributed to all devices in the Cohort
  unconditionally. If your devices require different firmware configurations,
  they need to be in separate Cohorts. Once the old Releases workflow is
  disabled, the Artifact's Blueprint property will be removed.
- **Artifacts are no longer required to use semantic versioning.** While using
  semantic versioning for your packages is still encouraged, it is no longer
  required. If you continue to use semantic versioning, the Golioth Console will
  be able to categorize changes to your Packages as upgrades or downgrades in
  the UI, but no other behavior will be affected.
- **SUIT manifests are no longer supported.** It's not possible for your devices
  to receive SUIT manifests for the new Deployments.

:::note The Device API is unchanged

All changes in the OTA updates workflow are purely on the cloud side of Golioth.
The OTA API on the device side is unchanged, and you do not need to change
anything in your firmware.

:::

## Moving devices to Cohorts

As a device has to be part of a Cohort to receive Deployments, you can opt into
the new workflow on a per device basis.

To make sure your migration from Releases to Cohorts doesn't trigger any
accidental OTA updates, we recommend testing the new concept by moving a test
device or two into a Cohort before transitioning your entire fleet.

To ensure minimal disruption, we recommend going through the following steps to
transition devices whose firmware is managed by an existing Release over to
Cohorts:

1. Navigate to the Cohorts section under Firmware Updates in the Golioth
   Console.
2. Create a new Cohort.
3. [Create the first Deployment in your
   Cohort.](../4-deploying-updates.md#creating-deployments) The Deployment
   should contain the same artifacts as the active release on your device.
4. [Assign the device to the
   Cohort](../3-managing-cohorts.md#assigning-devices-to-a-cohort).

That's it! If your device is online and listening to OTA manifest updates, it
will receive an OTA manifest update from the Golioth Cloud, but as the new
manifest will contain all the same artifacts, the device will not download any
packages.

With a device in your Cohort, we recommend [making a new
Deployment](../4-deploying-updates.md#creating-deployments) before transitioning
your entire fleet over to the new workflow, to make sure you're comfortable with
the new concepts.

Once you're comfortable with the new workflow and have made sure that it does
not cause any disruptions, you can transition the rest of your fleet.

## Reverting to the old workflow

If anything unexpected happens, you can still opt out of the new Cohorts
workflow for some time. To move a device back to using Releases, you can remove
it from the Cohort. This causes the device to receive OTA updates using the old
Releases workflow, as if it never belonged to a Cohort. Note that moving the
device out of a Cohort does not trigger an OTA manifest update on the device,
even if there is an active Release that targets it. However, the next time the device
fetches the OTA manifest, the Golioth Cloud will respond with whatever release
manifest the device should receive through the Releases workflow.

## Disabling the Releases workflow for your project

While assigning a device to a Cohort is enough to make sure it's receiving
Deployments, we still recommend disabling your Releases to complete your
transition. Leaving a Release active can still cause unintended OTA updates for
devices that are not part of a Cohort.

You can also contact Golioth Support to disable the Releases workflow for your
project altogether.
