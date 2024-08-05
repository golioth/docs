---
title: Replicate
---
import Pipeline from '@site/src/components/usethispipeline'

[Replicate](https://replicate.com/) is an AI platform that makes machine
learning accessible to every software developer by allowing for running and
fine-tuning open source and custom models at scale. Existing models on Replicate
suppport use cases that range from video generation to optical character
recognition (OCR).

The following example demonstrates captioning images streamed to Golioth using
the [Salesforce BLIP model](https://replicate.com/salesforce/blip). The PNG
image is submitted in the [`webhook`
destination](/data-routing/destinations/webhook) request by encoding as a [Data
URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs),
then embedding in a JSON object.

Predictions on Replicate are asynchronous, meaning that the result is not
accessible directly in Pipelines. Results can be viewed in the Replicate
console, or a [webhook
URL](https://replicate.com/docs/reference/http#predictions.create--webhook) can
be included in the destination body to instruct webhook to deliver the result to
the specified URL after the prediction has completed.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named
`REPLICATE_TOKEN` in the format `Bearer <token>`.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Replicate%20Caption&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvaW1hZ2VzIgpzdGVwczoKICAtIG5hbWU6IHBuZwogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IGNoYW5nZS1jb250ZW50LXR5cGUKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBjb250ZW50X3R5cGU6IGltYWdlL3BuZwogIC0gbmFtZTogdXJsCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogZGF0YS11cmwKICAgICAgdmVyc2lvbjogdjEKICAtIG5hbWU6IGVtYmVkCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZTogZW1iZWQtaW4tanNvbgogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIGtleTogaW1hZ2UKICAtIG5hbWU6IGNyZWF0ZS1wYXlsb2FkCiAgICB0cmFuc2Zvcm1lcjoKICAgICAgdHlwZToganNvbi1wYXRjaAogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHBhdGNoOiB8CiAgICAgICAgICBbCiAgICAgICAgICAgIHsib3AiOiAiYWRkIiwgInBhdGgiOiAiL3ZlcnNpb24iLCAidmFsdWUiOiAiMmUxZGRkYzg2MjFmNzIxNTVmMjRjZjJlMGFkYmRlNTQ4NDU4ZDNjYWI5ZjAwYzAxMzllZWE4NDBkMGFjNDc0NiJ9LAogICAgICAgICAgICB7Im9wIjogImFkZCIsICJwYXRoIjogIi9pbnB1dCIsICJ2YWx1ZSI6IHsiaW1hZ2UiOiAiIn19LAogICAgICAgICAgICB7Im9wIjogIm1vdmUiLCAiZnJvbSI6ICIvaW1hZ2UiLCAicGF0aCI6ICIvaW5wdXQvaW1hZ2UifQogICAgICAgICAgXQogIC0gbmFtZTogcHJlZGljdAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vYXBpLnJlcGxpY2F0ZS5jb20vdjEvcHJlZGljdGlvbnMKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJFJFUExJQ0FURV9UT0tFTg==' />
