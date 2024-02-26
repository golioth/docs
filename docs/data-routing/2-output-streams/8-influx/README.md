---
title: InfluxDB Overview
---

[InfluxDB Cloud](https://www.influxdata.com/products/influxdb-cloud/) is a
fully managed timeseries database that can be used to consume Golioth events in
a simple, trusted, and scalable way. Golioth's Output Stream for InfluxDB Cloud
allows you to transform Golioth events into InfluxDB's native line protocol and
ingest them in your InfluxDB Cloud instance.

## InfluxDB Specific Attributes

For each Output Stream type, there is a set of specified attributes. Here are
the ones for InfluxDB:

| Attribute          | Type   | Required | Description |
| ------------------ | ------ |:--------:| ----------- |
| Name | string | ✅        | Name to identify the Output Stream |
| InfluxDB URL| string | ✅        | URL for the InfluxDB Cloud API |
| InfluxDB token| string | ✅        | InfluxDB API token |
| InfluxDB bucket| string | ✅        | Name of the InfluxDB bucket |
| InfluxDB measurement| string | ✅        | Name to use for the InfluxDB measurement |

## Overview

To use this integration, you need to:

- Have an InfluxDB Cloud account
- Create an API token for the InfluxDB Cloud
- Use the "Serverless" version of InfluxDB Cloud
- Create an instance of the InfluxDB Output Stream in your Golioth account

The InfluxDB Output Stream is geared specifically to the
[InfluxDB Cloud Serverless](https://docs.influxdata.com/influxdb/cloud-serverless/)
version of the managed cloud offering.

## Setup the InfluxDB Output Stream

### 1. Create an InfluxDB Cloud account

Follow the InfluxDB [Setup Guide](https://docs.influxdata.com/influxdb/cloud-serverless/get-started/setup/)
to get started if you don't already have an InfluxDB Cloud account.

### 2. Get your API token from your InfluxDB Cloud account

From the navigation in the InfluxDB Cloud console:

1. Click the `API Token` link.
2. Click the `Generate GENERATE API TOKEN` button.
3. From the drop down menu after clicking the button, select `Custom API Token`.
4. Complete the form by giving the new token a description and giving it
   read/write permissions for the bucket where you're measurements are going.


### 3. Get your bucket name from your InfluxDB Cloud account

Go to your list of buckets by clicking the `Buckets` link in the navigation and
identify the bucket to use for your InfluxDB Output Stream.

### 4. Get the InfluxDB URL for your InfluxDB Cloud organization

From the InfluxDB Cloud console, click your organization and from the drop-down
menu select `Settings`. From the organization settings page, find the `Cluster
URL` field and click the `COPY TO CLIPBOARD` button.

### 5. Create an InfluxDB Output Stream in the Golioth console

From the `Select an Output Stream Type` page, select `InfluxDB`.

In the `Create a new Output Stream` form, enter the following:

* **Name**: The name you want to give to your Output Stream
* **InfluxDB URL**: Paste the `Cluster URL` you copied from your InfluxDB Cloud
  org settings
* **InfluxDB token**: Paste the InfluxDB Cloud API token
* **InfluxDB bucket**: the name of an existing InfluxDB Cloud bucket where you
  want to send your events
* **InfluxDB measurement name**: The name of the InfluxDB measurement

## Example Data

Golioth Output Streams use the [Cloud Events](https://cloudevents.io) format.
Because InfluxDB is a timeseries database, we transform events from the
CloudEvents format to the InfluxDB [line protocol](https://docs.influxdata.com/influxdb/cloud-serverless/reference/syntax/line-protocol/)
format.

Here is an example of a CloudEvent on the Golioth platform:
```json
Context Attributes,
  specversion: 1.0
  type: TEST_EVENT_TYPE
  source: golioth/app/api
  subject: integration
  id: 18914e4f-3620-48e2-9772-03fe12e757da
  datacontenttype: application/json
Data,
  {
    "timestamp": {
      "seconds": 1682614592,
      "nanos": 987338334
    },
    "project_id": "64230895aff1018f3aacabab",
    "integration_id": "644aa93df9021bf366e0a255",
    "data": {
      "hello": "world"
    }
  }
```

We transform the above CloudEvent to the following line protocol:

```
GoliothEvent,{"project_id"="64230895aff1018f3aacabab","integration_id"="644aa93df9021bf366e0a255"} "hello=world" 1682614592
```
