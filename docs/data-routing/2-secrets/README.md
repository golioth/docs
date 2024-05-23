---
title: Secrets
---

Frequently, sensitive information, such as credentials, is required in order to
deliver data to an external destination. This information needs to be accessed
by a pipeline, but storing them in the YAML document would be insecure and
reduce reusability. To address this issue, Golioth offers a Pipeline Secrets,
which are defined in a project and can be referenced by any pipeline in that
project.

Secrets are stored using project specific encryption keys and their values
cannot be accessed outside of a running pipeline after they are created.

## Adding Secrets

Secrets can be added to a project in the console under `Credentials > Secrets`.
A secret can contain any text and must have a name that adheres to the following
restrictions:

- Names can only contain alphanumeric characters (`[a-z]`, `[A-Z]`, `[0-9]`) or underscores (`_`).
- Names must not start with a number.
- Names are case insensitive.
- Names must be unique in a project.

## Using Secrets

Secrets can currently only be used in [destination](/data-routing/destinations)
parameters. They are referenced by prefixing providing a secret name prefixed by
`$` as a value. For example, the secret `INFLUXDB_TOKEN` is referenced as the
value for the `token` parameter below.

```yaml
    destination:
      type: influxdb
      version: v1
      parameters:
        url: https://us-east-1-1.aws.cloud2.influxdata.com
        token: $INFLUXDB_TOKEN
        bucket: device-data
        measurement: temp
```
