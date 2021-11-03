---
id: manage-devices
title: Manage Devices
---


There are two ways to create a device in Golioth:

- Create a device with no credentials.
- Do a full provisioning with the credentials to connect to our platform.

For now we will demonstrate creating a device with no credentials. Don't worry about having a real device as we will simulate one with our tools. For now, create the device with this command:

```
goliothctl device create --name "My first device"
```

Then list your projects devices with the command:

```
$ goliothctl device list
id:"<uuid>" name:"My first device"
```

Now for the device to connect to our platform, we need to setup some credentials for it which we will see in the next step. You can check for more commands to manage devices [here](/reference/command-line-tools/goliothctl/goliothctl_device).

## Optional hardware unique identifier addition

```
goliothctl device create --name "My first device" --hwId "CH:AN:GE:ME"
```

:::note
`"CH:AN:GE:ME"` must be globally unique to the Golioth cloud, so be sure to change it from the above example. A MAC address or other value that represents a unique value (serial number, ICCID/IMSI from the celullar network, etc) is the best source of this info.
:::

```
$ goliothctl device list
id:"<uuid>" name:"My first device" hardware_ids: "CH:AN:GE:ME"
```