---
title: AWS SQS
---

[Amazon Web Services Simple Queue Service](https://aws.amazon.com/sqs/) is a
fully managed message queuing for microservices, distributed systems, and
serverless applications. The [AWS SQS data
destination](/data-routing/destinations/aws-sqs) on Golioth accepts data in any
format and delivers it to SQS. This example omits a `content_type` filter and
accepts any data payload on any path, then delivers it to AWS SQS.

:::info Reminder
Make sure to create a [secret](/data-routing/secrets) named
`AWS_SQS_ACCESS_SECRET` that includes a valid [AWS access key
secret](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-setting-up.html#sqs-getting-access-key-id-secret-access-key).
:::

<a href="https://console.golioth.io/pipeline?name=AWS%20SQS&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGF3cy1zcXMKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vc3FzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tLzEyMzQ1Njc4OS9teS1xdWV1ZQogICAgICAgIGFjY2Vzc19rZXk6IE1ZX0tFWQogICAgICAgIGFjY2Vzc19zZWNyZXQ6ICRBV1NfU1FTX0FDQ0VTU19TRUNSRVQKICAgICAgICByZWdpb246IHVzLXdlc3QtMQ==" target='_blank'>Use this Pipeline</a>

```yaml
filter:
  path: "*"
steps:
  - name: step-0
    destination:
      type: aws-sqs
      version: v1
      parameters:
        url: https://sqs.us-west-1.amazonaws.com/123456789/my-queue
        access_key: MY_KEY
        access_secret: $AWS_SQS_ACCESS_SECRET
        region: us-west-1
```

