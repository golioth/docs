---
title: Troubleshooting
---
import Pipeline from '@site/src/components/usethispipeline'

If a pipeline is misconfigured, the data flowing through it might not be
delivered to the desired destination. When this happens, it is important to
validate that both the device is sending streaming data in the format that you
expect, and that pipeline destination is configured correctly.

## Data Destination Metrics

Other than accessing the external data destination directly, the quickest way to
validate that data is flowing through a pipeline is to check the real-time usage
metrics for the project's organization on Golioth. Usage can be viewed by
naviating to the organization's `Settings` page, then clicking on the `Usage`
tab. Metrics will be broken down by `Project` and `Service`. Data destinations
for Pipelines that incur usage are identified by `data_{destination-name}`.

## Validating Device Data

If sending `application/json` data, or data that can be transformed into
`application/json`, the simplest way to ensure that data is structured as
expected, is to create a minimal pipeline that sends data to [LightDB
Stream](/application-services/lightdb-stream).

<Pipeline link='https://console.golioth.io/pipeline?name=Validate%20Device%20Data&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGxpZ2h0ZGItc3RyZWFtCiAgICAgIHZlcnNpb246IHYx' />

If data does not arrive at LightDB Stream using this pipeline, it is likely that
the device is not communicating with Golioth, or it is sending data that is not
valid JSON.

## Validating Pipeline Configuration

The Golioth Simulator, which is visible as a widget in the bottom right corner
of the console when working with Pipelines, can be used to validate that a given
pipeline is configured correctly. The Simulator will send the provided JSON data
to the root path for streaming data (`/.s`).

For example, the following pipeline could be used with the Simulator to verify
that the [GCP PubSub](/data-routing/destinations/gcp-pubsub) destination is
configured with valid credentials.

<Pipeline link='https://console.golioth.io/pipeline?name=Validate%20Pipeline%20Configuration&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAtMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IGdjcC1wdWJzdWIKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICBzZXJ2aWNlX2FjY291bnQ6ICRHQ1BfU0VSVklDRV9BQ0NPVU5UCiAgICAgICAgdG9waWM6IG15LXRvcGlj' />
