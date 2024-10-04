# Migrating From releases

The cohorts workflow for rolling out OTA updates to devices is a direct
replacement of the old releases workflow. Releases are already disabled for all
new projects, and will be disabled for all existing projects at a later stage.

If your project is currently deploying OTA updates using the releases workflow,
we recommend transitioning to cohorts as soon as possible.

## Differences between releases and cohorts

Cohorts bring two fundamental upgrades to the way OTA Updates are distributed
to your devices. The most important change is that you now have to explicitly
add a device to a cohort, instead of relying on the blueprint and tags matching
mechanism in releases and Artifacts. The second fundamental change is the way
each update is rolled out — with releases, each release could be enabled and
disabled at any time, and there could be multiple releases enabled at the same
time. With cohorts, updates (referred to as deployments) are rolled out in a
linear timeline of events, with no option for retracting existing deployments.

Let's take a closer look at how this affects your workflow.

### Explicit targeting

Releases targeted devices through implicit matching of tags and blueprints. When
a release was rolled out, the Golioth Cloud would determine which devices should
be receiving the release based on the tags and blueprints of each device in the
project. While this made it easy to target new devices by changing their tags,
it meant that actions like adding a tag to a device carried an unproportionate
weight to it, as this could make the device pull down a new OTA update
unintentionally, which could be catastrophic. Additionally, there wasn't a clear
indication about which devices would receive a new release, which made the issue
worse.

The new workflow alleviates this problem by enforcing explicit targeting. Every
device that needs to receive an OTA update now has to be assigned to a cohort
first. While this adds an extra step to update management, it makes it a lot
harder to push the wrong OTA update by mistake.

### Linear timeline of deployments

Releases featured a roll out toggle that would let you enable or disable
releases at any time. This caused releases to behave more like firmware
configurations you could move between than updates you could push to your fleet.

In the new workflow, deployments are immutable events. You can still move
between different versions of your firmware, but to roll back to a previous
version, you now have to issue a new deployment that instructs the device to go
back. A deployment is applied to every device in the cohort, and there's only
ever one active deployment for each cohort. This makes it easier to determine
exactly what firmware each device is expected to have — not just right now, but
also historically.

### Other differences

In addition to explicit targeting and a linear timeline of deployments, there
are a couple of smaller differences between releases and cohorts:

- **Adding a device to a cohort will push a manifest update to the device right
  away.** With releases, devices would only receive an update notification when
  you rolled out a release, but could still poll for the active release between
  roll outs. With cohorts, the active deployment is always issued to every
  device in the cohort as soon as possible.
- **Artifact blueprints are no longer considered.** If a deployment contains an
  artifact, the artifact will be distributed to all devices in the cohort
  unconditionally. If your devices require different firmware configurations,
  they need to be in separate cohorts. Once the old releases workflow is
  disabled, the Artifact's Blueprint property will be removed.
- **Artifacts are no longer required to use semantic versioning.** While using
  semantic versioning for your packages is still encouraged, it is no longer
  required. If you continue to use semantic versioning, the Golioth Console will
  be able to categorize changes to your packages as upgrades or downgrades in
  the UI, but no other behavior will be affected.
- **SUIT manifests are no longer supported.** It's not possible for your devices
  to receive SUIT manifests for the new deployments.

:::note The Device API is unchanged

All changes in the OTA updates workflow are purely on the cloud side of Golioth.
The OTA API on the device side is unchanged, and you do not need to change
anything in your firmware.

:::

## Moving devices to cohorts

As a device has to be part of a cohort to receive deployments, you can opt into
the new workflow on a per device basis.

To make sure your migration from releases to cohorts doesn't trigger any
accidental OTA updates, we recommend testing the new concept by moving a test
device or two into a cohort before transitioning your entire fleet.

To ensure minimal disruption, we recommend going through the following steps to
transition devices whose firmware is managed by an existing release over to
cohorts:

1. Navigate to the cohorts section under Firmware Updates in the Golioth
   Console.
2. Create a new cohort.
3. [Create the first deployment in your
   cohort.](../4-deploying-updates.md#creating-deployments) The deployment
   should contain the same artifacts as the active release on your device.
4. [Assign the device to the
   cohort](../3-managing-cohorts.md#assigning-devices-to-a-cohort).

That's it! If your device is online and listening to OTA manifest updates, it
will receive an OTA manifest update from the Golioth Cloud, but as the new
manifest will contain all the same artifacts, the device will not download any
packages.

With a device in your cohort, we recommend [making a new
deployment](../4-deploying-updates.md#creating-deployments) before transitioning
your entire fleet over to the new workflow, to make sure you're comfortable with
the new concepts.

Once you're comfortable with the new workflow and have made sure that it does
not cause any disruptions, you can transition the rest of your fleet.

## Reverting to the old workflow

If anything unexpected happens, you can still opt out of the new cohorts
workflow for some time. To move a device back to using releases, you can remove
it from the cohort. This causes the device to receive OTA updates using the old
releases workflow, as if it never belonged to a cohort. Note that moving the
device out of a cohort does not trigger an OTA manifest update on the device,
even if there is an active release that targets it. However, the next time the
device fetches the OTA manifest, the Golioth Cloud will respond with whatever
release manifest the device should receive through the releases workflow.

## Disabling the releases workflow for your project

While assigning a device to a cohort is enough to make sure it's receiving
deployments, we still recommend disabling your releases to complete your
transition. Leaving a release active can still cause unintended OTA updates for
devices that are not part of a cohort.

You can also contact Golioth Support to disable the releases workflow for your
project altogether.
