---
id: logging
title: Logging
---

[Logging Device Service](/cloud/services/logging) definitions.

Real-Time Endpoint to listen to device's logs stream incoming to the platform.

### Interface


| Method    | Description                       | Complete Endpoint                                               | Content Format |
| --------- | --------------------------------- | --------------------------------------------------------------- | -------------- |
| WebSocket | Listening to Device Logs          | wss://api.golioth.io/v1/ws/projects/{projectId}/logs?{x-api-key\|jwt}={API_KEY\|JWT} | JSON |

To open the WebSocket connection you will make an HTTP Request for a websocket endpoint, passing the following parameteres:

|Parameter             | Optional | Description                                                                                            |
|--------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
|`projectId`           | **false** | ID of the project                                                                                      |
|`API_KEY` or `JWT`    | **false** | Api Key or JWT valid for the ProjectID passed to authenticate to the Golioth |

### Filtering Logs

At the moment it is possible only to listen to all the logs of a project, but in the future it will be provided resources to filter specifics kinds of logs streams.

import ComingSoon from '/docs/partials/coming-soon.md'

<ComingSoon/>

### Use Cases

#### Listening to real-time device logs stream via WebSocket

While the GET method only allows you to receive one data packet at a time, WebSocket makes it possible keeping a persistent flow of data coming from the LightDB at the moment the state is changed. In other words, with WebSocket you are able to listen to changes in real-time.

For example, for listening to the logs stream from the devices, connect a WebSocket client to the following endpoint:
```
wss://api.golioth.net/v1/ws/projects/local-test/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

You'll see data arriving to your WebSocket client as soon as the data sent by the device arrive to the platform, indefinitely or until the connection is closed:
```
```
