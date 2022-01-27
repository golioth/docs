---
id: overview
title: Overview
slug: /cloud/output-streams/webhooks
---

Webhooks are a simple and flexible way to receive events from the Golioth platform using HTTP. It is really easy to build a web server to receive these events and you can write you own logic to process them.

### Webhook Specific Attributes

For each Output Stream type, there is a set of specify attributes. Here are the ones for Webhooks:

| Attribute | Type   | Required | Description                                         |
| --------- | ------ | -------- | --------------------------------------------------- |
| uri       | string | ✅       | URI where events are sent via POST request          |
| headers   | object |          | Extra HTTP headers to send                          |

### Example

As mentioned on [Output Streams Overview](/cloud/output-streams), events are sent using the [Cloud Events](https://cloudevents.io) format. For Webhooks specifically, some metadata of the event are sent as HTTP headers.

Here is an example of an event arriving on a webhook. Headers prefixed with `Ce-` are related to Cloud Events and the message body is the event payload (see event payloads on [Output Streams Event Types](/cloud/output-streams/event-types/events)).

```
POST {your-uri-path} HTTP/1.1
Host: {your-uri-host}
Content-Length: 137
Accept-Encoding: gzip
Ce-Id: baa51655-c067-444c-a91c-6dcea73abc70
Ce-Source: golioth/app/gateway/coap
Ce-Specversion: 1.0
Ce-Subject: stream
Ce-Time: 2022-01-27T20:40:44.367693Z
Ce-Type: DEVICE_STREAM_TYPE
Content-Type: application/json
```

```json
{
  "data": { "temp": 32 },
  "device_id": "612d3cecf3ee17d321adbec6",
  "project_id": "my-first-project",
  "timestamp": { "nanos": 37421000, "seconds": 1643316044 }
}
```
