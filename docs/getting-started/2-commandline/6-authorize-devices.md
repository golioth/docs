---
id: authorize-devices
title: Authorize Devices
---

We saw on the [Manage Devices](/getting-started/2-commandline/5-manage-devices.md) we can create the device. To connect to our platform we also need to create a credential for it.

Currently we only support PreShared Key based authentication, but we will be adding more methods in the future.

To provision a device, we can use the command `goliotctl provision`. To do a full provision that creates a device and credentials we can use the command:

```
goliothctl provision --name "My first device"
```

The command will create a device with the name `My first device` with a generated hardware id based on the device name and a credential that the device can use to access out platform.

```
id:"61aa3834e46b0ffed740c3a0" hardware_ids:"20211203113100-my-first-device" name:"My First Device" status:"-"
credentials:
id:"61aa3834e46b0ffed740c3a1" identity:"20211203113100-my-first-device@my-project-id" pre_shared_key:"1c2c37859771b3d647291866f986b219"
```

:::note
You can also inform your own Hardware ID, Credential Identifier and PSK, but keep in mind that those needs to be unique on the project.
:::

:::note
Even if you inform a credential identifier, all credentials will be suffixed with your project id. So will be in the format `<credential_identifier>@<project_id>`.
:::

To add credentials to an existing device, we can reference an existing device with device name, hardware ID or device ID. Here are some examples:

```
# Finding by device name and informing credential identifier, PSK will be auto generated
goliothctl provision --name "My first device" --credId "deadbeef-id"
# Finding by Hardware ID and informing PSK, credential identifier will be auto generated
goliothctl provision --hwId "DE:AD:BE:EF" --psk "supersecret"
# Finding by Device ID and informing both credential identifier and PSK, nothing is auto generated
goliothctl provision --id <device-uuid> --credId "deadbeef-id"  --psk "supersecret"
```

:::note
Get the device ID by running the `goliothctl device list` command:

```
$ goliothctl device list
id:"<uuid>" name:"My first device" hardwareIds: "DE:AD:BE:EF"
```

:::

You can also check later the existing credentials of a device with the command `goliothctl credential list`.

```
$ goliothctl credential list "My First Device"
id:"61aa3834e46b0ffed740c3a1" identity:"20211203113100-my-first-device@my-project-id" pre_shared_key:"1c2c37859771b3d647291866f986b219"
```

Now your device can connect to our platform. Check for more commands to provision devices [here](/reference/command-line-tools/goliothctl/goliothctl_provision).
