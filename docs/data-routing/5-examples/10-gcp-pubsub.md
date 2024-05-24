---
title: GCP PubSub
---
import Pipeline from '@site/src/components/usethispipeline'

[Google Cloud Plaform Cloud Pub/Sub](https://cloud.google.com/pubsub) is an
asynchronous and scalable messaging service that decouples services producing
messages from services processing those messages. The [GCP PubSub data
destination](/data-routing/destinations/gcp-pubsub) on Golioth accepts data in
any format and delivers it the specified `topic`. This example omits a
`content_type` filter and accepts any data payload on any path, then delivers it
to GCP PubSub.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named
`GCP_SERVICE_ACCOUNT` that includes a valid [GCP Service Account JSON
Key](https://cloud.google.com/iam/docs/keys-create-delete) with proper PubSub
permissions.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=GCP%20PubSub&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGdjcC1wdWJzdWIKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBzZXJ2aWNlX2FjY291bnQ6ICRHQ1BfU0VSVklDRV9BQ0NPVU5UCiAgICAgICAgdG9waWM6IHByb2plY3RzL215LXByb2plY3QvdG9waWNzL215LXRvcGlj' />
