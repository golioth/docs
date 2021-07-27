---
id: platform-manage-devices
title: Manage Devices
---


There are two ways to create a device in Golioth:

- Create a device with no credentials.
- Do a full provisioning with the credentials to connect to our platform.

For now we are gonna go just with the initial device management command and create one. Don't worry about having a real device, later we are gonna see how to simulate one with our tools. For now, you can create the device with this command:

```
goliothctl device create --name "My first device" --hwId "DE:AD:BE:EF"
```

:::note
The hardware ID is something that unique identify your device, so it can be the serial number, ICCID/IMSI from the celullar network, MAC Address or another way to you identify your device. This is an important step, every IoT device need a way to be unique identified. We are gonna add more docs later to help you on that proccess.
:::

Them you list your projects devices with the command:

```
$ goliothctl devices list
id:"<uuid>" name:"My first device" hardwareIds: "DE:AD:BE:EF"
```

Now for the device to connect to our platform, we need to setup some credentials for it and we are gonna see that in the next step. You can check for more commands to manage device [here](/docs/reference/goliothctl/goliothctl_device).
