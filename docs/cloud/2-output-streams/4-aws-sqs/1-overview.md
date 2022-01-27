---
id: overview
title: Overview
slug: /cloud/output-streams/aws-sqs
hide_title: true
---

## AWS SQS Overview

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you receive events generated on the Golioth platform that can be processed in a decoupled and scalable way. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware systems. Data can be ingested using multiple solutions inside of AWS, including Serverless offerings like AWS Lambda.

### AWS SQS Specific Attributes

For each Output Stream type, there is a set of specify attributes. Here are the ones for AWS SQS:

| Attribute    | Type   | Required | Description                                |
| ------------ | ------ | -------- | ------------------------------------------ |
| queueURL     | string | ✅       | SQS Queue URL                              |
| region       | string | ✅       | AWS Region that your SQS Queue is deployed |
| accessKey    | string | ✅       | AWS Access Key ID for you IAM user         |
| accessSecret | string | ✅       | AWS Access Key Secret for you IAM user     |

### Setup

To use this integration, you need to create an SQS Queue and and a user with permissions to write to that Queue.

1. Create User and Policy

- Open the IAM console at https://console.aws.amazon.com/iam/
- On the navigation menu, choose Policies
- Click on "Create Policy"
- Create a policy with access for SQS and the following actions:
  - sqs:Write:SendMessage
- Restrict the policy to the following resources:
  - arn:aws:sqs:{your-region}:{your-account-id}:{your-queue-name}
- Go back to the IAM console home
- On the navigation menu, choose Users
- Click on "Add users"
- Give it a name and on the AWS Access Type section, select "Access key - Programmatic access"
- After creating the user, choose your user name and save the User ARN to be used on a later step

2. Create an SQS Queue

- Open the SQS console at https://console.aws.amazon.com/sqs
- Click on "Create Queue"
- Give the queue a name
- On the Access policy section, add your user ARN to allow it to send messages to the queue

3. Get your access key ID and secret access key

- Open the IAM console at https://console.aws.amazon.com/iam/
- On the navigation menu, choose Users
- Choose your IAM user name (not the check box)
- Open the Security credentials tab, and then choose Create access key
- To see the new access key, choose Show. Your credentials resemble the following:
  - Access Key ID: `AKIAIOSFODNN7EXAMPLE`
  - Secret Access Key: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`

### Example

As mentioned on the [Output Streams Overview](/cloud/output-streams), events are sent using the [Cloud Events](https://cloudevents.io) format. For AWS SQS, some metadata of the event are sent together with the message body.

Here is an example of an event arriving on SQS. The payload is going to be inside of a `data` attribute (see event payloads on [Output Streams Event Types](/cloud/output-streams/event-types/events)). The other attributes are metadata related to Cloud Events.

```json
{
  "specversion": "1.0",
  "id": "aa12dc4c-c5ed-4b46-92e5-5a726f4daa81",
  "source": "golioth/app/gateway/coap",
  "type": "DEVICE_STREAM_TYPE",
  "subject": "stream",
  "datacontenttype": "application/json",
  "time": "2022-01-27T16:17:06.458868Z",
  "data": {
    "data": { "temp": 32 },
    "device_id": "612d3cecf3ee17d321adbec6",
    "project_id": "my-first-project",
    "timestamp": { "nanos": 174295000, "seconds": 1643300226 }
  }
}
```

![Message on AWS SQS](./assets/msg-header.png)
![Message on AWS SQS](./assets/msg-body.png)
