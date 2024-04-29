# Status

Device status is described by three attributes, all of which are visible when
viewing a device summary in the Golioth console.

- **Session Established**: the time at which a device last [established a secure
  session](/device-management/authentication) with the Golioth platform.
- **Last Report**: the time at which a device last successfully delivered any
  data to the Golioth platform.
- **Setting Sync**: the time at which a device last reported the status of its
  settings, and whether they were synchronized with the values set on the
  Golioth platform.

## Analyzing Device Status

The three device status attributes can be used in concert to analyze different
aspects of a device's behavior. Examples for how to interpret various
permutations of device status attributes are provided below.

### Handshake Frequency

It is typically optimal to maintain a session with the Golioth platform as long
as possible, as re-establishing a session uses network bandwidth, power, and
compute resources for a device. Approximate session duration can be ascertained
by calculating the difference between the **Session Established** and **Last
Report** attributes.

For example, if the **Session Established** timestamp is 20 hours old, but the
**Last Report** timestamp is a few seconds ago, the device has maintained the
same session of approximately 20 hours. In contrast, if the **Session
Established** timestamp and **Last Report** timestamp are frequently close in
value, it is potentially a sign that the device is performing unnecessarily
frequent handshakes.

### Availability

Availability of a device, or whether it is actively listening for updates, is
highly dependent on the environment in which it operates and the firmware that
it is running. For example, a device may be operating normally, but not able to
respond to updates from the Golioth platform due to entering a power save mode.

The **Last Report** attribute can be useful for predicting whether a device is
online, or likely to come online soon, but ultimately the only mechanism to know
for sure is to attempt to contact the device and to see if it responds. This can
be accomplished by a number of mechanisms, such as Golioth's [Remote Procedure
Call (RPC)](/device-management/rpc) service.

### Settings Freshness

The **Setting Sync** attribute indicates whether the last reported settings from
a device match the current settings [configured on the Golioth
platform](/device-management/settings). It is normal for settings to become out
of sync for some period of time, as a device may not immediately process a
change made on the platform. However, devices may process settings changes and
report an error, which indicates that either the setting is not recognized by a
device, or its value is not valid for the current version of firmware on the
device.
