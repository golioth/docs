---
title: Pipedream Webhook
---
import Pipeline from '@site/src/components/usethispipeline'

[Pipedream](https://pipedream.com/) is a serverless integration and compute platform that allows you to connect APIs, databases, and cloud services with ease. It enables developers to build and run workflows without managing infrastructure, making automation and data processing seamless. For IoT use cases, Pipedream can be utilized to automate device data collection, process sensor data, and trigger actions across various cloud services. This example demonstrates accepting a JSON data payload, then delivering it to Pipedream via the [Webhook](/data-routing/destinations/webhook) data destination. It relies on Pipedream's native [HTTP / Webhook app](https://pipedream.com/apps/http). This example should work with both the hosted service as well as the [self-hosted version](https://github.com/PipedreamHQ/pipedream).

:::info Reminder
Make sure to replace the `url` with the correct Pipeline trigger URL for your
workflow.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Pipedream%20Webhook&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAwCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogaHR0cHM6Ly9lbzJma2JoN3JqaHh0cnMubS5waXBlZHJlYW0ubmV0' />
