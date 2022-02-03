---
id: lightdb
title: LightDB
---

[LightDB Device Service](/cloud/services/lightdb) definitions.

Real-time endpoint to listen to any changes in a device state path.

## Interface

| Method    | Description                       | Complete Endpoint                                               | Content Format |
| --------- | --------------------------------- | --------------------------------------------------------------- | -------------- |
| WebSocket | Listening to LightDB Device State | wss://api.golioth.io/v1/ws/projects/{projectId}/devices/{deviceId}/data{/path=\*\*}?{x-api-key\|jwt}={API_KEY\|JWT} | JSON |

To open the WebSocket connection, you will make an HTTP Request for a websocket endpoint, passing the following parameters:

|Parameter             | Optional  | Description                                                                  |
|--------------------- | --------- | -----------------------------------------------------------------------------|
|`projectId`           | **false** | ID of the project                                                            |
|`deviceId`            | **false** | ID of the device                                                             |
|`path`                | **true**  | Path to listen to<br /><br />- Omit the path parameter to listen to the root path<br />- Format as _`/some/path`_ to listen to that specific path. Ex: `/data`, `/data/temp`, `/data/temp/state`|
|`API_KEY` or `JWT`    | **false** | API Key or JWT valid for the ProjectID passed to authenticate to the Golioth |

## Use Cases

While the GET method only allows you to receive one data packet at a time, WebSocket makes it possible to keep a persistent flow of data coming from the LightDB at the moment the state is changed. In other words, with WebSocket you are able to listen to changes in real-time. You'll see data arriving at your WebSocket client as soon as the data sent by the device arrives on the Golioth Cloud. The WebSocket will continue listening until the connection is closed.

### Listening to real-time device state changes via WebSocket

For example, to listen to any changes in the `/env` path of a project called `local-test`, connect a WebSocket client to the following endpoint:
```
wss://api.golioth.io/v1/ws/projects/local-test/devices/6173155307bbb1c7c9bb158f/data/env?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

You'll see data arriving to your WebSocket client each time the `/env` path is either modified or deleted:

```json
{"result": {"data": {"temp": {"value" : 45.2, "unit" : "c"}}}}
{"result": {"data": {"temp": {"value" : 45.3, "unit" : "c"}}}}
{"result": {"data": {"temp": {"value" : 45.1, "unit" : "c"}}}}
{"result": {"data": {"temp": {"value" : 45.0, "unit" : "c"}}}}
{"result": {"data": {"temp": {"value" : 45.3, "unit" : "c"}}}}
{"result": {"data": {"temp": {"value" : 45.4, "unit" : "c"}}}}
```

If you want to listen to the entire device state without specifying any particular path, just omit the path:

```
wss://api.golioth.io/v1/ws/projects/local-test/devices/6173155307bbb1c7c9bb158f/data?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

In this case you will see data arriving for the entire device state:

```json
{"result": {"data": {"env": {"temp": {"value" : 45.2, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
{"result": {"data": {"env": {"temp": {"value" : 45.3, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
{"result": {"data": {"env": {"temp": {"value" : 45.1, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
{"result": {"data": {"env": {"temp": {"value" : 45.0, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
{"result": {"data": {"env": {"temp": {"value" : 45.3, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
{"result": {"data": {"env": {"temp": {"value" : 45.4, "unit" : "c"}}, "alert": {"temp": true}, "config": {"temp": {"min": 20.0,"max": 40.0}}}}}
```
