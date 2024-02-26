---
title:  Google Cloud Platform (GCP) PubSub Overview
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

1. Select your project.
2. In the Service account name field, enter a name. The Cloud Console fills in the Service account ID field based on this name.
3. In the Service account description field, enter a description. (e.g. Service account for quickstart)
4. Click Create and continue.

To provide access to your project, grant the following role(s) to your service account: Pub/Sub > Pub/Sub Admin

1. Click the Select a role field, then select the first (or only) role.
2. For additional roles, click Add another role and add each additional role.
3. Click Done and check your new service account in the list.

### 3. Create a Key to the service account

Open the details of the service account you just created by clicking the Email field.

1. Click the Keys tab.
2. Click Add key, then click Create new key.
3. Select JSON option and click Create. A JSON key file is downloaded to your computer.
4. Click Close.

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

In the Cloud Console, go to the PubSub entry in the left sidebar and select
Topics. Copy the full topic name which will be used in the Golioth
configuration.

### 5. In the Golioth Console, create a GCP PubSub output stream

Go the [Golioth Platform](https://console.golioth.io), log in and select your Project.

1. Go to the Output Streams Page and click Create an Output Stream.
2. Select the GCP PubSub option.
3. Enter a name for the output stream.
4. Copy all the JSON content from the service account key created and paste into the Service Account Field.
5. Finally, copy the full topic name and paste into Topic Name field.
6. Click Save.

## Example Data

Golioth Output Streams use the [Cloud Events](https://cloudevents.io) format. For GCP PubSub, this means some metadata of the event are sent together with the message body.

Here is an example of an event arriving on PubSub. The payload will be inside a `data` attribute. The other attributes are metadata related to Cloud Events.

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
