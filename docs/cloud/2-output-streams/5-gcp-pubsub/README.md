---
id: overview
title:  Google Cloud Platform (GCP) PubSub Overview
slug: /cloud/output-streams/gcp-pubsub
---

[Google Cloud PubSub](https://cloud.google.com/pubsub/) works as a messaging middleware for traditional service integration or a simple communication medium for modern microservices. Events can be ingested with serverless environments like Cloud Functions, Cloud Run or custom environments on Google Kubernetes Engine or Compute Engine.

## GCP PubSub Specific Attributes

For each Output Stream type, there is a set of specify attributes. Here are the ones for GCP PubSub:

| Attribute        | Type   | Required | Description                                                                                                                                                                                    |
| ---------------- | ------ |:--------:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| serviceAccount | json | ✅       | Full JSON object representing the GCP service account to reach GCP PubSub. |
| topic name | string | ✅       | GCP full topic name |

## Overview

To use this integration, you need to:

- Create a PubSub Topic
- Create a GCP Service Account
- Create a Key for the service account created and download it as a JSON file
- Get the full topic name.
- Create a GCP PubSub output stream in the Golioth Platform

## Setup the PubSub Output Stream

### 1. Create a PubSub Topic

Follow [GCP's PubSub using the console](https://cloud.google.com/pubsub/docs/create-topic-console) to get started and create a GCP PubSub Topic. Golioth uses the PubSub topic name to connect

### 2. Create a service account in GCP

In the Google Cloud Console, go to the Create service account page.

![Finding GCP service account page](./assets/gcp-iam-create-service-acc.png)

- Select your project.
- In the Service account name field, enter a name. The Cloud Console fills in the Service account ID field based on this name.
- In the Service account description field, enter a description. (e.g. Service account for quickstart)
- Click Create and continue.

To provide access to your project, grant the following role(s) to your service account: Pub/Sub > Pub/Sub Admin

- Click the Select a role field, then select the first (or only) role.
- For additional roles, click Add another role and add each additional role.
- Click Done and check your new service account in the list

  [![Created GCP service account](./assets/gcp-created-service-acc.png)](./assets/gcp-created-service-acc.png)

### 3. Create a Key to the service account

Open the details of the service account you just created by clicking the Email field.

![Detailing GCP service account](./assets/gcp-detailing-service-acc.png)

- Click the Keys tab.
- Click Add key, then click Create new key.
- Select JSON option and click Create. A JSON key file is downloaded to your computer.
- Click Close

An example of a Service Account Key content:

```json
{
  "type": "service_account",
  "project_id": "my-first-project-9999",
  "private_key_id": "a32e67aeXXXXXXXXXXXXXd945ef60d1fa31",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgXXXXXXXXXXXXXXXXXXxDpQQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "output-stream-pubsub@my-first-project-9999.iam.gserviceaccount.com",
  "client_id": "108761499999999999999",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/output-stream-pubsub%40my-first-project-9999.iam.gserviceaccount.com"
}
```

### 4. Get the full topic name

In the Cloud Console, go to the PubSub entry in the left sidebar and select Topics.

![Getting the pubsub topic name](./assets/gcp-pubsub-topic-name.png)

Copy the full topic name which will be used in the Golioth configuration.

### 5. In the Golioth Console, create a GCP PubSub output stream

Go the [Golioth Platform](https://console.golioth.io), log in and select your Project.

- Go to the Output Streams Page and click Create an Output Stream

  ![Selecting the pubsub output stream option](./assets/golioth-gcp-output-stream.png)

- Select the GCP PubSub option

  ![Creating the pubsub output stream option](./assets/golioth-creating-pubsub-output-stream.png)

- Enter a name for the output stream
- Select the Event Types you want to send to GCP PubSub
- Copy all the JSON content from the service account key created and paste into the Service Account Field (It's a secret field so you'll see as an encrypted data after pasting)
- Finally, copy the full topic name and paste into Topic Name field
- Click Save

## Example Data

Golioth Output Streams use the [Cloud Events](https://cloudevents.io) format. For GCP PubSub, this means some metadata of the event are sent together with the message body.

Here is an example of an event arriving on PubSub. The payload will be inside a `data` attribute (see event payloads on [Output Streams Event Types](/cloud/output-streams/event-types/events)). The other attributes are metadata related to Cloud Events.

```json
{
  "specversion": "1.0",
  "id": "69eb4038-bd7d-46c6-885a-cc05152591f4",
  "source": "golioth/app/gateway/coap",
  "type": "DEVICE_LOG_ENTRY_TYPE",
  "subject": "logs",
  "datacontenttype": "application/json",
  "time": "2022-03-04T21:59:15.474642199Z",
  "data": {
    "device_id": "61b0b02e95fd466888055ca4",
    "level": 1,
    "message": "Testing Output Stream - GCP PubSub",
    "metadata": { },
    "module": "wired",
    "project_id": "test",
    "timestamp": { "nanos": 832993323, "seconds": 1646431154 }
  }
}
```
