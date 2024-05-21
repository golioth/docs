---
title: Transformers
---

Transformers are used to modify the structure of a data message payload as it
passes through a pipeline. A single transformer performs a well defined
operation as part of a pipeline step, but multiple steps may be chained together
to perform a sequence of data transformations.

## Versioning

Every transformer type is versioned. It is recommended to specify a version
for transformers in pipelines to ensure that new releases are not
automatically consumed as they may alter behavior. If no version is specified
for a transformer in a pipeline step, the latest will be used.

Versions may be specified as exact or partial. For example, `v1` would refer to
the latest `v1.Y.Z` release, `v1.0` would refer to the latest `v1.0.Z` release,
and `v1.0.0` would refer to the exact `v1.0.0` release.

## Using Transformers

If a step has both a transformer and a destination, the transformed data is only
sent to the associated destination, and the data prior to transformation is
passed on to the subsequent steps. Otherwise, the transformed data is passed
along to the subseuqeunt steps.

For example, in the following sequence of steps, the data payload will be
transformed from CBOR to JSON in `step-0`, and the resulting JSON data will be
passed to `step-1`. In `step-1`, additional metadata will be injected into the
JSON payload, and the result will be sent to GCP PubSub. However, the data
passed to `step-2`, and ultimately sent to LightDB Stream, will not include the
additional metadata.

```yaml
steps:
  - name: step-0
    transformer:
      type: cbor-to-json
      version: v1
  - name: step-1
    transformer:
      type: inject-metadata
      version: v1
    destination:
      type: gcp-pubsub
      version: v1
      parameters:
        topic: cool-topic
        service_account: $GCP_SERVICE_ACCOUNT
  - name: step-2
    destination:
      type: lightdb-stream
      version: v1
```

If the additional metadata was desired in all steps following `step-1`, the
pipeline could be modified as follows.

```yaml
steps:
  - name: step-0
    transformer:
      type: cbor-to-json
      version: v1
  - name: step-1
    transformer:
      type: inject-metadata
      version: v1
  - name: step-2
    destination:
      type: gcp-pubsub
      version: v1
      parameters:
        topic: cool-topic
        service_account: $GCP_SERVICE_ACCOUNT
  - name: step-3
    destination:
      type: lightdb-stream
      version: v1
```
