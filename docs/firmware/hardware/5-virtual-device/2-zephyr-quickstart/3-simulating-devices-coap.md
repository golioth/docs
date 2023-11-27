---
id: simulating-devices-coap
title: Simulating devices with coap command line interface
---

## Prerequisites

:::info
This guide uses `goliothctl` and `coap` which are part of the [Golioth Command Line tools](/commandline) install.

Checkout our reference section for comprehensive information on [the goliothctl tool](/reference/command-line-tools/goliothctl/goliothctl) and [the coap tool](/reference/command-line-tools/coap/coap).
:::

With a properly provisioned device, you can test the connection with the Golioth
Cloud. We will use `coap` tool, along with the device identity and
pre_shared_key (PSK). Here's a review on how to retrieve those values.

```bash
# List your projects on Golioth Cloud:
$ goliothctl project list
[*] id:"cloud-connected-demo" name:"Golioth Cloud Demo"

# List the devices that are part of the active project:
$ goliothctl device list
id:"61d34aceea77dbd14986344a" hardware_ids:"20220103191318-devboard-one" name:"devboard-one" status:"offline"
id:"61d876efea77dbd149863488" hardware_ids:"20220107172255-nrf91-feather" name:"nrf91-feather" status:"offline"
id:"61e0d462ea77dbd1498634cb" hardware_ids:"thingy9-id" name:"thingy91" status:"offline"

# List the credentials for your desired device:
$ goliothctl credentials list devboard-one
id:"61d34aceea77dbd14986344b" identity:"devboard-one-id@cloud-connected-demo" pre_shared_key:"supersecret"
```

The last line shows the __identity__ and **pre_shared_key** values of our
provisioned device. These are what we use to grant `coap` access to the Golioth
Cloud.

## Using coap as a virtual device

The `coap` tool looks just like any other hardware device to Golioth Cloud.
Using this tool to send a ping is an easy way to test your device provisioning.

### Send a PING request

```
$ coap ping --psk-id deadbeef-id@my-project-id --psk supersecret --host coap.golioth.io
```

If your device previously reported as offline, this ping will change that status
to online. You can check this using `goliothctl device list`.

### Send a GET request

The `/hello` endpoint identifies the device by its credentials and returns `Hello <device-name>`.

```bash
$ coap --path /hello -m GET --psk-id deadbeef-id@my-project-id --psk supersecret --host coap.golioth.io

Params
method: GET
path: /hello

url: coap.golioth.io:5684
pre shared key: deadbeef-id@my-project-id:supersecret

Response
payload: Type: Acknowledgement, MID: 19602, Code: Valid, Token: 913572292474c677, ContentFormat: text/plain;charset=utf-8
body: Hello My First Device%
```

### Send a POST request

The `/echo` endpoint returns the body sent by the device. Here we will
demonstrate two different `POST` directives. The first sends a string as the
body, the second sends a file as the body.

#### With body as string (-b)

```bash
$ coap --path /echo -m POST --psk-id deadbeef-id@my-project-id --psk supersecret --host coap.golioth.io -b "Hello"

Params
method: POST
path: /echo
body: Hello

url: coap.golioth.io:5684
pre shared key: deadbeef-id@my-project-id:supersecret

Response
payload: Type: Acknowledgement, MID: 47734, Code: Valid, Token: 31638c831239e704, ContentFormat: application/octet-stream
body: Hello
```

#### With body from file (-f)

Files (of any type) can be sent using the `-f` flag. In this example the file is located in the same directory from which the `coap` command is being executed.

```bash
$ coap --path /echo -m POST --psk-id deadbeef-id@my-project-id --psk supersecret --host coap.golioth.io -f ./test.txt

Params
method: POST
path: /echo
file read correctly: ./test.txt

url: coap.golioth.io:5684
pre shared key: deadbeef-id:supersecret

Response
payload: Type: Acknowledgement, MID: 47734, Code: Valid, Token: 31638c831239e704, ContentFormat: application/octet-stream
body: File Content
```

## Testing LightDB using coap

Now that you have the hang of `coap`, it can be used for much more powerful
testing. We recommend using `coap` when first working on LightDB data storage
and retrieval. The interactive nature makes it easy to test your schema before
moving to embedded devices.

Examples of using `coap` with LightDB are [found in the Cloud documentation](/data-handling/stored-data/lightdb-state/read-write-data).
