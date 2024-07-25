---
title: kafka
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| Any |

:::usage
Sending data to Kafka incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

The `kafka` destination sends data to a [Kafka](https://kafka.apache.org/)
cluster.

### Parameters

|Parameter|Type|Description|Required|
|---|---|---|:---:|
|`brokers`|`[]string`| List of broker addresses. |✅|
|`topic`|`string`| The name of the Kafka topic. |✅|
|`username`|`string`| The username for authentication. |✅|
|`password`|`string`| The password for authentication. |✅|
|`sasl_mechanism`|`string`| The [SASL](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer) authentication mechanism. Valid options include `PLAIN`, `SCRAM-SHA-256`, or `SCRAM-SHA-512`. |✅|

:::info
[`SASL_SSL`](https://kafka.apache.org/documentation/#security_sasl_config) is
always enabled, regardless of `sasl_mechanism` selected.
:::


### Example Usage

```yaml
    destination:
      type: kafka
      version: v1
      parameters:
        brokers:
          - my.kafka.broker.com:9092
        topic: my-topic
        username: pipelines-user
        password: $KAKFA_PASSWORD
        sasl_mechanism: PLAIN
```

### Example Input

```json
{
  "temp": 32
}
```

### Example Output

Output data will match input data exactly, regardless of content type. Message
metadata will be encoded in [event metadata
headers](https://kafka.apache.org/documentation/#intro_concepts_and_terms).

```json
{
  "temp": 32
}
```
