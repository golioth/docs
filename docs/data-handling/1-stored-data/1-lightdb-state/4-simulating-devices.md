---
id: simulating-devices
title: Testing LightDB using coap CLI and goliothctl
---

import Prerequisites from '/docs/partials-common/prerequisites-platform-setup.md'
import { ProtocolPublishSample, ProtocolReadSample, ProtocolDeleteSample } from '/docs/partials-common/protocol.mdx'

<Prerequisites />

With the a properly provisioned device, you can test LightDB to save, query and observe data changes on it. Make sure that the connection with the platform is working.

Let's simulated a light bulb that can report it's brightness and state and also control these values from the Cloud.

### Saving and Querying data on LightDB

To access LightDB over CoAP, you have to use the prefix `/.d/` and anything past that represents a path that you want to save data. On the example bellow, we are saving a `state` attribute with value `true` and `brightness` with value `50` on path `/light`.

<ProtocolPublishSample path="/.d/light" method="POST" body={{"state": true, "brightness" : 50 }}/>

Now you can query that data over CoAP or using `goliothctl`. And you can query any path, so if you query `/light` you get the full `{ state : true, brightness : 50 }` or you can query a specific value like at `/light/state` and get only `true`.

- Top level path:

<ProtocolReadSample path="/.d/light" method="GET" response={{"brightness":50,"state":true}}/>

- Specific path:

<ProtocolReadSample path="/.d/light/state" method="GET" response={true}/>

You can also do the same with `goliothctl`:

- Top level path:

```
$ goliothctl lightdb get [device name] /light
{"brightness":10,"state":0}
```

- Specific path:

```
$ goliothctl lightdb get [device name] /light/brightness
50
```

### Listening to changes on LightDB

We can simulated a device listening to LightDB by using `coap observe` command. Here are some examples to listen to the top level `/light` path or we can also listen to the specific `/light/state` or `/light/brightness` path.

Open this on another terminal tab to simulate the device listening to data changes:

<ProtocolReadSample path="/.d/light/state" listen />

or

<ProtocolReadSample path="/.d/light" listen />

Now you can set new values on LightDB using `goliothctl`. You can set a specific value or pass a nested value in `json` format.

```
$ goliothctl lightdb set [device name] /light/state -b "true"
true
$ goliothctl lightdb set [device name] /light/state -b "false"
false
$ goliothctl lightdb set [device name] /light -b "{\"state\": true, \"brightness\": 30 }"
{"state":true,"brightness":30}
```

On the other terminal , you should see the device receiving the new data when it changes:

<ProtocolReadSample path="/.d/light/state" listen response={true} />

<ProtocolReadSample path="/.d/light" listen response={{"brightness":10,"state":0}} />

:::note
You can check more ways to use [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb) and [coap observe](/reference/command-line-tools/coap/coap_observe) on their reference docs.
:::
