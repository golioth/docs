---
id: manage-devices
title: Manage Devices
---


There are two ways to create a device in Golioth:

- Create a device with no credentials.
- Do a full provisioning with the credentials to connect to our platform.

For now we will demonstrate creating a device with no credentials. Don't worry about having a real device as we will simulate one with our tools. For now, create the device with this command:

```
goliothctl device create --name "My first device" --hwId "DE:AD:BE:EF"
```

:::note
The hardware ID is something that is unique to identify your device. It can be the serial number, ICCID/IMSI from the celullar network, MAC Address or another way to identify your device. This is an important step, every IoT device need a way to be unique identified. More docs will be added later to help with that proccess.
:::

Then list your projects devices with the command:

```
$ goliothctl device list
id:"<uuid>" name:"My first device" hardwareIds: "DE:AD:BE:EF"
```

Now for the device to connect to our platform, we need to setup some credentials for it which we will see in the next step. You can check for more commands to manage devices [here](/reference/command-line-tools/goliothctl/goliothctl_device).
