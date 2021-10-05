---
id: simulating-devices
title: Testing Light DB using coap CLI and goliothctl
---

import Prerequisites from '../../partials/prerequisites-platform-setup.md'

<Prerequisites />

With the a properly provisioned device, you can test Light DB to save, query and observe data changes on it. Make sure that the connection with the platform is working.

Let's simulated a light bulb that can report it's brightness and state and also control these values from the Cloud.

### Saving and Querying data on Light DB

To access Light DB over CoAP, you have to use the prefix `/.d/` and anything past that represents a path that you want to save data. On the example bellow, we are saving a `state` attribute with value `true` and `brightness` with value `50` on path `/light`.

```
$ coap --path /.d/light -m POST --psk-id deadbeef-id --psk supersecret --host coap.golioth.io -b "{\"state\": true, \"brightness\" : 50 }" --format json
```

Now you can query that data over CoAP or using `goliothctl`. And you can query any path, so if you query `/light` you get the full `{ state : true, brightness : 50 }` or you can query a specific value like at `/light/state` and get only `true`.

- Top level path:

```
$ coap --path /.d/light -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.io --accept json
Response
payload: Type: Acknowledgement, MID: 64363, Code: Content, Token: 56f991b6703947d7, ContentFormat: application/json
body: {"brightness":50,"state":true}
```

- Specific path:

```
$ coap --path /.d/light/state -m GET --psk-id deadbeef-id --psk supersecret --host coap.golioth.io --accept json
Response
payload: Type: Acknowledgement, MID: 64363, Code: Content, Token: 56f991b6703947d7, ContentFormat: application/json
body: true
```

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

### Listening to changes on Light DB

We can simulated a device listening to Light DB by using `coap observe` command. Here are some examples to listen to the top level `/light` path or we can also listen to the specific `/light/state` or `/light/brightness` path.

Open this on another terminal tab to simulate the device listening to data changes:

```
$ coap observe /.d/light/state --psk-id deadbeef-id --psk supersecret --host coap.golioth.io --accept json
waiting for more msgs. Type ctrl+c to close
```

or

```
$ coap observe /.d/light --psk-id deadbeef-id --psk supersecret --host coap.golioth.io --accept json
waiting for more msgs. Type ctrl+c to close
```

Now you can set new values on Light DB using `goliothctl`. You can set a specific value or pass a nested value in `json` format.

```
$ goliothctl lightdb set [device name] /light/state -b "true"
true
$ goliothctl lightdb set [device name] /light/state -b "false"
false
$ goliothctl lightdb set [device name] /light -b "{\"state\": true, \"brightness\": 30 }"
{"state":true,"brightness":30}
```

On the other terminal , you should see the device receiving the new data when it changes:

```
New msg on path /.d/light/state Code: Content, Token: 19ba64b2baa06af9, ContentFormat: application/json
body size:  4
true

New msg on path /.d/light Code: Content, Token: 19ba64b2baa06af9, ContentFormat: application/json
body size:  27
{"brightness":10,"state":0}
```

:::note
You can check more ways to use [goliothctl lightdb](/reference/command-line-tools/goliothctl/goliothctl_lightdb) and [coap observe](/reference/command-line-tools/coap/coap_observe) on their reference docs.
:::
