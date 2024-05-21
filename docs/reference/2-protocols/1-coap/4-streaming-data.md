---
id: streaming-data
title: Streaming Data
---

Streaming data definitions over CoAP. See [Data Routing](/data-routing) for more
information.

### Interface

| Method | Description     | Path              | Content Format |
| ------ | --------------- | ----------------- | -------------- |
| POST   | Send data       | `/.s/{path=\*\*}` | Any            |

> `path` can be any valid URI sub path. Ex:
>
> /.s/env/temperature
>
> /.s/location

