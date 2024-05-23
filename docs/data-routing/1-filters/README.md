---
title: Filters
---

A pipeline's filter is used to route all or a subset of data to a pipeline.
Currently, data may be filtered based on [`path`](/data-routing/filters/path),
and [`content_type`](/data-routing/filters/content-type). If either is not
supplied, data with any value for the attribute will be matched.

:::info
If a data message matches the filters of multiple pipelines, it will be sent to
each of them. If a pipeline delivers to the same destination multiple times, or
a data message matches to multiple pipelines that send to the same data
destination, those destinations will receive duplicate data.
:::
