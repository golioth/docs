---
id: lightdb-stream
title: LightDB Stream
---

[LightDB Stream Device Service](/device-management/services/lightdb-stream) definitions.

Real-time endpoint to listen to a device's data stream as it arrives at the Golioth Cloud.

## Interface

| Method    | Description                           | Complete Endpoint                                                                                         | Content Format |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| WebSocket | Listening to LightDB Stream           | `wss://api.golioth.io/v1/ws/projects/{projectId}/stream?{x-api-key\|jwt}={API_KEY\|JWT}`                    | JSON           |
| WebSocket | Listening to LightDB Stream by Device | `wss://api.golioth.io/v1/ws/projects/{projectId}/devices/{deviceId}/stream?{x-api-key\|jwt}={API_KEY\|JWT}` | JSON           |

To open the WebSocket connection, you will make an HTTP Request for a websocket endpoint, passing the following `path` and `query` parameters:

| Parameter          | Type  | Optional                           | Description                                                                  |
| ------------------ | ----- | ---------------------------------- | ---------------------------------------------------------------------------- |
| `projectId`        | path  | **false**                          | ID of the project                                                            |
| `deviceId`         | path  | **false**, if required by endpoint | ID of the device                                                             |
| `API_KEY` or `JWT` | query | **false**                          | API Key or JWT valid for the ProjectID passed to authenticate to the Golioth |

## Use Cases and Examples

While the GET method only allows you to receive one data packet at a time, WebSocket makes it possible to keep a persistent flow of data coming from the LightDB at the moment that new stream data is received. In other words, with WebSocket you are able to listen new messages in real-time. You'll see data arriving at your WebSocket client as soon as the data sent by the device arrives on the Golioth Cloud. The WebSocket will continue listening until the connection is closed.

### Listening to all devices

To listen to all data streams **from all devices** of a project called `local-test`, we can connect a WebSocket client to the following endpoint:

```
wss://api.golioth.io/v1/ws/projects/local-test/stream?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

The response:

```json
{"result":{"data":{"timestamp":"2021-12-01T19:12:53.350079884Z","deviceId":"61a4cfdfb2b45578105aeca5","data":{"temp":29}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:12:58.365990318Z","deviceId":"61a4cfc9b2b45578105aeca3","data":{"led_on":true}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:13:03.384024361Z","deviceId":"61a4cfdfb2b45578105aeca5","data":{"temp":29.5}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:13:08.399730505Z","deviceId":"61a4cfc9b2b45578105aeca3","data":{"led_on":false}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:13:13.417176929Z","deviceId":"61a4cfdfb2b45578105aeca5","data":{"temp":20}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:13:18.331914908Z","deviceId":"61a4cfdfb2b45578105aeca5","data":{"temp":20.5}}}}
```

### Listening to a specific device

To listening to all data streams **from a specific device** of a project called `local-test`, we can connect a WebSocket client to the following endpoint:

```
wss://api.golioth.io/v1/ws/projects/local-test/devices/61a4cfc9b2b45578105aeca3/stream?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

The response:

```json
{"result":{"data":{"timestamp":"2021-12-01T19:12:58.365990318Z","deviceId":"61a4cfc9b2b45578105aeca3","data":{"led_on":true}}}}
{"result":{"data":{"timestamp":"2021-12-01T19:13:08.399730505Z","deviceId":"61a4cfc9b2b45578105aeca3","data":{"led_on":false}}}}
```
