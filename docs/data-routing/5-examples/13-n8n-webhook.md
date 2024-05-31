---
title: n8n Webhook
---
import Pipeline from '@site/src/components/usethispipeline'


[n8n](https://n8n.io/) is an open-source workflow automation tool that lets you
connect various apps and services to automate tasks and data flows. It offers a
visual interface for creating complex workflows with ease, without needing
extensive coding knowledge. For IoT use cases, n8n can be used to integrate
device data with cloud services, automate real-time monitoring, and trigger
actions based on sensor data. This example demonstrates accepting a JSON data
payload, then delivering it to n8n via the
[Webhook](/data-routing/destinations/webhook) data destination. It relies on
n8n's native
[Webhook node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/).
This example should work with both the hosted service as well as the
[self-hosted version](https://github.com/n8n-io/n8n).

:::info Reminder
Make sure to replace the `url` with the correct test or production n8n Webhook URL for your
workflow.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=n8n%20Webhook&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAwCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogaHR0cHM6Ly9nb2xpb3RoLmFwcC5uOG4uY2xvdWQvd2ViaG9vay10ZXN0LzgyMjQwZDg4LWRjMDItNDM0NS05N2E5LTQ5MWNjMTg2ZTE3Yg==' />
