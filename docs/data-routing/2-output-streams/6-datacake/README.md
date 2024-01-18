---
title: Datacake Overview
---

[Datacake](https://datacake.co/) is a multi-purpose, low-code IoT platform that requires no programming skills and minimal time to create custom IoT applications that can be brought into a white label IoT solution at the push of a button.

## Datacake Specific Attributes

For each Output Stream type, there is a set of specified attributes. Here are the ones for Datacake:

| Attribute        | Type   | Required | Description                                                                                                                                                                                    |
| ---------------- | ------ |:--------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uri | string | ✅       | URI where events are sent via POST request |

## Overview

To use this integration, you need to:
- Have a Datacake account
- Create an integration between Datacake and Golioth

## Setup the Datacake Output Stream

### 1. Create a Datacake account

[Create your account](https://app.datacake.de/signup) if you don't have one yet.

### 2. Create an integration between Datacake and Golioth

[Follow this tutorial](https://docs.datacake.de/integrations/golioth) to create a complete integration between Golioth and Datacake through a Datacake output stream.

In this tutorial you will see how to:
- Create devices on Datacake
- Create the datacake integration in Golioth
- Test the integration
- See the integration logs on Datacake, and more.

## Example Data

Golioth Output Streams use the [Cloud Events](https://cloudevents.io) format. For Datacake, this means some metadata of the event are sent as HTTP headers.

Here is an example of an event arriving on Datcake. Headers prefixed with `Ce-` are related to Cloud Events and the message body is the event payload.


```
POST {your-uri-path} HTTP/1.1
Host: {your-uri-host}
Content-Length: 137
Accept-Encoding: gzip
Ce-Id: baa51655-c067-444c-a91c-6dcea73abc70
Ce-Source: golioth/app/gateway/coap
Ce-Specversion: 1.0
Ce-Subject: stream
Ce-Time: 2022-03-18T17:25:08.795194496Z
Ce-Type: DEVICE_STREAM_TYPE
Content-Type: application/json
```

```json
{
  "data": { "msg":"testing datacake output stream"},
  "device_id":"61a4cfdfb2b45578105aeca5",
  "project_id":"my-first-project",
  "timestamp":{"nanos":346519550,"seconds":1647624308}
}
```
