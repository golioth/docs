---
id: authorize-devices
title: Authorizing Devices
---

As we saw on the [Manage Devices](./platform-manage-devices) we can create the device, but for it to connect to our platform, we also need to create a credential for it.

Currently we only support PreShared Key based authentication, but we are gonna be adding more in the future.

To provision a device, we can use the command `goliotctl provision`. To do a full provision, creating a device and the credential we can use the command:

```
goliothctl provision --hwId "DE:AD:BE:EF" --name "My first device" --credId "deadbeef-id"  --psk "supersecret"
```

:::note
Credential Identifier also needs to be unique.
:::

If you just want to add credentials to an existing device, you can inform just the hardware ID or device ID. Here are some examples:

```
# By Hardware ID
goliothctl provision --hwId "DE:AD:BE:EF" --credId "deadbeef-id"  --psk "supersecret"
# By Device ID
goliothctl provision --id <device-uuid> --credId "deadbeef-id"  --psk "supersecret"
```

:::note
You can get the device ID by running the `goliothctl device list` command:

```
$ goliothctl device list
id:"<uuid>" name:"My first device" hardwareIds: "DE:AD:BE:EF"
```

:::

Now your device can connect to our platform. You can check for more commands to provision devices [here](/docs/reference/goliothctl/goliothctl_provision).
