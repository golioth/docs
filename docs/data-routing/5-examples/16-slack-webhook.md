---
title: Slack Webhook
---
import Pipeline from '@site/src/components/usethispipeline'

[Slack](https://slack.com/) is a messaging app for business that connects people
to the information they need. The capabilities of a Slack workspace can be
expanded by installing applications that connect data and functionality from
external platforms. An application can post messages to a workspace channel
using [incoming webhooks](https://api.slack.com/messaging/webhooks).

This example demonstrates posting messages to a Slack channel directly from a
pipeline. Users can create and install their own Slack application, then utilize
an incoming webhook URL with the [Webhook](/data-routing/destinations/webhook)
data destination to allow messages to flow from devices to a channel in their
workspace.

:::note
Data must be JSON and must include a `text` field with the content of the
message. See the Slack documentation for more [advanced message formatting
options](https://api.slack.com/messaging/webhooks#advanced_message_formatting)
and consider using a [transformer](/data-routing/transformers) to augment your
message payload prior to delivery.
:::

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `SLACK_WEBHOOK` with
a valid incoming webhook URL for your Slack application.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Slack%20Webhook&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAwCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogJFNMQUNLX1dFQkhPT0s=' />
