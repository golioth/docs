---
title: Supabase
---

import Pipeline from '@site/src/components/usethispipeline'

[Supabase](https://supabase.com/) is an open-source backend-as-a-service
platform designed to simplify the development of web and mobile applications. It
provides developers with a suite of tools including a Postgres database,
real-time subscriptions, authentication, storage, and serverless functions, all
managed through a single interface. Supabase provides multiple ways to consume
data from Golioth.

The first example is the simplest and uses the REST API. Assuming a database
named `golioth_pipeline_basic` with the following columns:

| id | created_at | temp | lat | long |
| -- | ---------- | ---- | --- | ---- |

Create the following Pipeline:

<Pipeline link='https://console.golioth.dev/pipeline?name=Supabase%20Edge%20Function%20Example&pipeline=c3RlcHM6CiAgLSBuYW1lOiBzdGVwMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vcmdnY3Fvc2x0cW9wY3d0d3doa2Muc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL2dvbGlvdGgtcGlwZWxpbmUKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJFNVUEFCQVNFX0FVVEhfSEVBREVSCiAgICAgICAgICBhcGlrZXk6ICRTVVBBQkFTRV9BUElfS0VZCg=='/>

Create two [secrets](/data-routing/secrets) based on the
[Service Role Key](https://supabase.com/docs/guides/api/api-keys#the-servicerole-key).
`$SUPABASE_KEY` should be the the Server Role Key while `$SUPABASE_SERVICE_KEY`
should take the form of 'Bearer
$Service_Role_Key'. For example, if the `Service Role Key` is `12345` than the `$SUPABASE_SERVICE_KEY`should be set to`Bearer
12345`.

The second example uses Edge Functions. While
[Transformers](/data-routing/transformers) can be used to modify data, Edge
Functions can be utilized further in the context of Supabase.

Assuming a database named `golioth_pipeline_advanced` with the following
columns:

| id | created_at | ce-time | ce-subject | ce-type | ce-source | temp | lat | long |
| -- | ---------- | ------- | ---------- | ------- | --------- | ---- | --- | ---- |

Create the following Pipeline:

<Pipeline link='https://console.golioth.dev/pipeline?name=Supabase%20Edge%20Function%20Example&pipeline=c3RlcHM6CiAgLSBuYW1lOiBzdGVwMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vcmdnY3Fvc2x0cW9wY3d0d3doa2Muc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL2dvbGlvdGgtcGlwZWxpbmUKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJFNVUEFCQVNFX0FVVEhfSEVBREVSCiAgICAgICAgICBhcGlrZXk6ICRTVVBBQkFTRV9BUElfS0VZCg=='/>

Reuse or create two [secrets](/data-routing/secrets) based on the
[Service Role Key](https://supabase.com/docs/guides/api/api-keys#the-servicerole-key).
`$SUPABASE_KEY` should be the the Server Role Key while `$SUPABASE_SERVICE_KEY`
should take the form of 'Bearer
$Service_Role_Key'. For example, if the `Service Role Key` is `12345` than the `$SUPABASE_SERVICE_KEY`should be set to`Bearer
12345`.
