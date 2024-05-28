---
title: Destinations
---

Destinations are used to deliver data to external locations. A single pipeline
may deliver data to multiple destinations.

:::usage
Sending data to a destination incurs usage costs after exceeding the free tier.
See [Golioth pricing](https://golioth.io/pricing) for more information.
:::

## Versioning

Every destination type is versioned. It is recommended to specify a version for
destinations in pipelines to ensure that new releases are not automatically
consumed as they may alter behavior. If no version is specified for a
destination in a pipeline step, the latest will be used.

Versions may be specified as exact or partial. For example, `v1` would refer to
the latest `v1.Y.Z` release, `v1.0` would refer to the latest `v1.0.Z` release,
and `v1.0.0` would refer to the exact `v1.0.0` release.

## Using Destinations

Destinations receive data after it has been potentially modified by transformers
in previous steps in a pipeline or a transformer that shares a step with the
destination. Some destinations require that data be provided in a specific
format. If invalid data or data of a different content type is provided, the
destination will refuse to send it.

Many destinations support providing parameters, some of which are required, when
used in a pipeline. View the documentation for your specific destination to see
what content type and parameters are supported.
