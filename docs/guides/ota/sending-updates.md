---
id: sending-updates
title: Sending Updates
---

#### Prerequisites

- `goliothctl` CLI installed
- Authenticated with Golioth - see [Authentication](../getting-started/authentication)
- Have a project - see [Create a Project](../getting-started/create-project)
- Have a provisioned device and credential for it - see [Authorizing Devices](../getting-started/authorize-devices)

Right now we have a really basic feature for doing Over the Air updates (OTA) on a device, where you can send a file directly to the device. A more complete feature is gonna be build in the near future, so stay tuned.

The device needs to Observe the path `/update` via CoAP and also need to support Block-Wise Transfer via CoAP. After observing that path, we can them send a file using `goliothctl`. Here is an example command:

```
goliothctl updates send <device-uuid> <file path>
```

You can simulate that using `gurl`. In one terminal, listen do the `/update` path using this command:

```
$ gurl coap ping --psk-id deadbeef-id --psk supersecret -w -o /update --host coap.golioth.dev
Params
url: coap.golioth.dev:5684
pre shared key: deadbeef-id:supersecret

Ping successfully
waiting for more msgs. Type ctrl+c to close
New msg on path   Code: Content, Token: 978f872da87c4ee0, ContentFormat: text/plain;charset=utf-8
body size:  2
OK
```

Now send any file using goliothctl command as presented before and you will be able to see the file on the `gurl` terminal output.
