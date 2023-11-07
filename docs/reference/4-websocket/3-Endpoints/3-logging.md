---
id: logging
title: Logging
---

[Logging Device Service](/cloud/services/logging) definitions.

Real-time endpoint to listen to a device's data stream as it arrives at the Golioth Cloud.

## Interface

| Method    | Description                        | Complete Endpoint                                                                                                                     | Content Format |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| WebSocket | Listening to Device Logs           | `wss://api.golioth.io/v1/ws/projects/{projectId}/logs?{x-api-key\|jwt}={API_KEY\|JWT}&module={module}&level={level}`                    | JSON           |
| WebSocket | Listening to Device Logs by Device | `wss://api.golioth.io/v1/ws/projects/{projectId}/devices/{deviceId}/logs?{x-api-key\|jwt}={API_KEY\|JWT}&module={module}&level={level}` | JSON           |

To open the WebSocket connection, you will make an HTTP Request for a websocket endpoint, passing the following `path` and `query` parameters:

| Parameter          | Type  | Optional                           | Description                                                                                  |
| ------------------ | ----- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectId`        | path  | **false**                          | ID of the project                                                                            |
| `deviceId`         | path  | **false**, if required by endpoint | ID of the device                                                                             |
| `API_KEY` or `JWT` | query | **false**                          | API Key or JWT valid for the ProjectID passed to authenticate to the Golioth                 |
| `module`           | query | **true**                           | Unique module name registered as part of the [Zephyr logging specification](https://docs.zephyrproject.org/latest/reference/logging/index.html#logging-in-a-module)|
| `level`            | query | **true**                           | Log's Level contained within the log. It can be one of these: NONE, INFO, WARN, ERROR, DEBUG |

## Filtering Logs

It's possible to receive all logs from the entire project, indiscriminately, or a filter can be applied. Available filters include:

- **`deviceId`**: provide the device's id to receive only logs which match with this specific device
- **`module`**: provide a log module name to receive only logs which match with this specific module
- **`level`**: provide a log level name to receive only logs which match with this specific level

Filters are optional and you can combine them to receive only the logs that you really want.

## Use Cases and Examples

While the GET method only allows you to receive one data packet at a time, WebSocket makes it possible to keep a persistent flow of data coming from the LightDB at the moment the state is changed. In other words, with WebSocket you are able to listen to changes in real-time. You'll see data arriving at your WebSocket client as soon as the data sent by the device arrives on the Golioth Cloud. The WebSocket will continue listening until the connection is closed.

### Listening to all log messages

To listen to all logs **from all devices** of a project called `local-test`, connect a WebSocket client to the following endpoint:

```
wss://api.golioth.io/v1/ws/projects/local-test/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

The response:

```json
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376256912Z","type":"LOGGING","level":"DEBUG","module":"golioth_logging","moduleId":"","message":"Log 1: 33","metadata":{"func":"func_1","index":214,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376201852Z","type":"LOGGING","level":"INFO","module":"golioth_logging","moduleId":"","message":"Counter hexdump","metadata":{"hexdump":"IQAAAA==","index":218,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104957Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Log 2: 33","metadata":{"func":"func_2","index":215,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376117753Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Debug info! 33","metadata":{"func":"main","index":213,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104727Z","type":"LOGGING","level":"ERROR","module":"monitoring","moduleId":"","message":"Err: 33","metadata":{"index":217,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376103940Z","type":"LOGGING","level":"WARN","module":"monitoring","moduleId":"","message":"Warn: 33","metadata":{"index":216,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
```

### Listening to all logs from a specific device

For listening to all logs **from a specific device** of a project called `local-test`, connect a WebSocket client to the following endpoint:

```
wss://api.golioth.io/v1/ws/projects/local-test/devices/61a4cfdfb2b45578105aeca5/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==
```

The response:

```json
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104957Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Log 2: 33","metadata":{"func":"func_2","index":215,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
{"result":{"data":{"timestamp":"2021-12-01T19:14:07.376103940Z","type":"LOGGING","level":"WARN","module":"monitoring","moduleId":"","message":"Warn: 33","metadata":{"index":216,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
```

### Combining deviceId, module and level filters to filter the logs

It's possible combine the filters to receive more specifics logs according to your necessity.

- Filtering by `module=monitoring`

  ```
  wss://api.golioth.io/v1/ws/projects/local-test/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==&module=monitoring
  ```

  The response:

  ```json
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104727Z","type":"LOGGING","level":"ERROR","module":"monitoring","moduleId":"","message":"Err: 33","metadata":{"index":217,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376103940Z","type":"LOGGING","level":"WARN","module":"monitoring","moduleId":"","message":"Warn: 33","metadata":{"index":216,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
  ```

- Filtering by `level=DEBUG`

  ```
  wss://api.golioth.io/v1/ws/projects/local-test/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==&level=DEBUG
  ```

  The response:

  ```json
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376256912Z","type":"LOGGING","level":"DEBUG","module":"golioth_logging","moduleId":"","message":"Log 1: 33","metadata":{"func":"func_1","index":214,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104957Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Log 2: 33","metadata":{"func":"func_2","index":215,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376117753Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Debug info! 33","metadata":{"func":"main","index":213,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
  ```

- Filtering by `level=DEBUG` and `module=writing`

  ```
  wss://api.golioth.io/v1/ws/projects/local-test/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==&level=DEBUG&module=writing
  ```

  The response:

  ```json
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376104957Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Log 2: 33","metadata":{"func":"func_2","index":215,"uptime":172271000},"deviceId":"61a4cfdfb2b45578105aeca5"}}}
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376117753Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Debug info! 33","metadata":{"func":"main","index":213,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
  ```

- Filtering by deviceId `61a4cfc9b2b45578105aeca3` and `level=DEBUG` and `module=writing`

  ```
  wss://api.golioth.io/v1/ws/projects/local-test/devices/61a4cfc9b2b45578105aeca3/logs?x-api-key=AAABbBbBbCcCcCcDdDdDdEeEe1H2E3KJ==&level=DEBUG&module=writing
  ```

  The response:

  ```json
  {"result":{"data":{"timestamp":"2021-12-01T19:14:07.376117753Z","type":"LOGGING","level":"DEBUG","module":"writing","moduleId":"","message":"Debug info! 33","metadata":{"func":"main","index":213,"uptime":172271000},"deviceId":"61a4cfc9b2b45578105aeca3"}}}
  ```
