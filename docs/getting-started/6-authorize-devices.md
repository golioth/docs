---
id: authorize-devices
title: Authorizing Devices
---

We saw on the [Manage Devices](/getting-started/manage-devices) we can create the device. To connect to our platform we also need to create a credential for it.

Currently we only support PreShared Key based authentication, but we will be adding more methods in the future.

To provision a device, we can use the command `goliotctl provision`. To do a full provision that creates a device and credentials we can use the command:

```
goliothctl provision --hwId "DE:AD:BE:EF" --name "My first device" --credId "deadbeef-id"  --psk "supersecret"
```

:::note
Credential Identifier also needs to be unique.
:::

To add credentials to an existing device, we can update just the hardware ID or device ID. Here are some examples:

```
# By Hardware ID
goliothctl provision --hwId "DE:AD:BE:EF" --credId "deadbeef-id"  --psk "supersecret"
# By Device ID
goliothctl provision --id <device-uuid> --credId "deadbeef-id"  --psk "supersecret"
```

:::note
Get the device ID by running the `goliothctl device list` command:

```
$ goliothctl device list
id:"<uuid>" name:"My first device" hardwareIds: "DE:AD:BE:EF"
```

:::

Now your device can connect to our platform. Check for more commands to provision devices [here](/reference/command-line-tools/goliothctl/goliothctl_provision).
