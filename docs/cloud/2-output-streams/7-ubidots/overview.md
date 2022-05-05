---
id: overview
title: Overview
slug: /cloud/output-streams/ubidots
---

## Ubidots

[Ubidots](https://ubidots.com/) makes it easy to white-label visualizations to produce a
branded version of your service for end customers; you can also create end-users, in order
to allow access to custom dashboards.

## Ubidots Specific Attributes

For each Output Stream type, there is a set of specified attributes. Here are the ones for Ubidots:

| Attribute        | Type   | Required | Description                                                                                                                                                                                    |
| ---------------- | ------ |:--------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTPS endpoint URL | string | ✅       | URL where events are sent via POST request |
| Ubidots auth token | string| ✅| Ubidots authentication token |

## Overview

To use this integration, you need to:
- Have an Ubidots account
- Create an instance of the Golioth plugin in your Ubidots account
- Create an instance of the Ubidots outpustream in your Golioth account

## Setup the Golioth plugin 

### 1. Create an Ubidots account

[Create your account](https://industrial.ubidots.com/accounts/signup_industrial/) if you don't have one yet.

## Setup the Ubidots Output Stream

### 2. Create an integration between Ubidots and Golioth

[Follow this
tutorial](https://help.ubidots.com/en/articles/6022705-plugins-integrate-golioth-output-streams-with-ubidots)
to create a complete integration between Golioth and Ubidots through an Ubidots output
stream.

In this tutorial you will see how to:
- Create a Golioth plugin on Ubidots
- Create the Ubidots integration in Golioth

## Example Data

Golioth Output Streams use the [Cloud Events](https://cloudevents.io) format. For Ubidots, this means some metadata of the event are sent as HTTP headers.

Here is an example of an event arriving on Ubidots. Headers prefixed with `Ce-` are related to Cloud Events and the message body is the event payload (see event payloads on [Output Streams Event Types](/cloud/output-streams/event-types/events)).

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
  "data": { "msg":"testing ubidots output stream"},
  "device_id":"61a4cfdfb2b45578105aeca5",
  "project_id":"my-first-project",
  "timestamp":{"nanos":346519550,"seconds":1647624308}
}
```
