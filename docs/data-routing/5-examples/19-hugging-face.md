---
title: Hugging Face
---
import Pipeline from '@site/src/components/usethispipeline'

[Hugging Face](https://huggingface.co/) is a platform where the machine learning
community collaborates on models, datasets, and applications. Hugging Face's
[dedicated Inference
Endpoints](https://huggingface.co/inference-endpoints/dedicated) and [Serverless
Inference API](https://huggingface.co/docs/api-inference/index) allow for
running any model via an HTTP REST API, which can be accessed from Pipelines
using the [`webhook` transformer](/data-routing/transformers/webhook).

:::warning
The Serverless Inference API is free but rate-limited. It should only be used
for testing scenarios, and it is expected that some operations may be dropped if
the specified model is not already [loaded in
memory](https://huggingface.co/docs/api-inference/quicktour#model-loading-and-latency).
Inference Endpoints should be used in production scenarios.
:::

The following example demonstrates using the Hugging Face Serverless Inference
API to perform sentiment analysis of audio samples streamed to Golioth. The
[Hubert-Large for Emotion Recognition
model](https://huggingface.co/superb/hubert-large-superb-er) is targeted.
Sentiment analysis results are delivered to [LightDB
Stream](/application-services/lightdb-stream) as a JSON payload.

Example sentiment analysis result:
```json
[
  {
    "score": 0.6310836672782898,
    "label": "neu"
  },
  {
    "score": 0.2573806643486023,
    "label": "sad"
  },
  {
    "score": 0.09393830597400665,
    "label": "hap"
  },
  {
    "score": 0.017597444355487823,
    "label": "ang"
  }
]
```

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named `HUGGING_FACE_TOKEN`
in the format `Bearer <token>`.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Hugging%20Face%20Emotion%20Recognition&pipeline=ZmlsdGVyOgogIHBhdGg6ICIvYXVkaW8iCnN0ZXBzOgogIC0gbmFtZTogZW1vdGlvbi1yZWNvZ25pdGlvbgogICAgdHJhbnNmb3JtZXI6CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vYXBpLWluZmVyZW5jZS5odWdnaW5nZmFjZS5jby9tb2RlbHMvc3VwZXJiL2h1YmVydC1sYXJnZS1zdXBlcmItZXIKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJEhVR0dJTkdfRkFDRV9UT0tFTgogIC0gbmFtZTogZW1iZWQKICAgIHRyYW5zZm9ybWVyOgogICAgICB0eXBlOiBlbWJlZC1pbi1qc29uCiAgICAgIHZlcnNpb246IHYxCiAgICAgIHBhcmFtZXRlcnM6CiAgICAgICAga2V5OiB0ZXh0CiAgLSBuYW1lOiBzZW5kLWxpZ2h0ZGItc3RyZWFtCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogbGlnaHRkYi1zdHJlYW0KICAgICAgdmVyc2lvbjogdjE=' />
