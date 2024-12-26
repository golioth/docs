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

The following examples will need credentials from Supabase. Create two
[secrets](/data-routing/secrets) based on the
[Service Role Key](https://supabase.com/docs/guides/api/api-keys#the-servicerole-key).
`$SUPABASE_KEY` should be the the Server Role Key while `$SUPABASE_SERVICE_KEY`
should take the form of 'Bearer
$Service_Role_Key'. For example, if the `Service Role Key` is `12345` than the `$SUPABASE_SERVICE_KEY`should be set to`Bearer
12345`.

The first example is the simplest and uses the
[REST API](https://supabase.com/docs/guides/api). Assuming a database named
`golioth_pipeline_basic` with the following columns:

| id | created_at | temp | lat | long |
| -- | ---------- | ---- | --- | ---- |

Create the following Pipeline:

<Pipeline link='https://console.golioth.io/pipeline?name=Supabase%20REST%20API%20Example&pipeline=c3RlcHM6CiAgLSBuYW1lOiBzdGVwMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vcmdnY3Fvc2x0cW9wY3d0d3doa2Muc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL2dvbGlvdGgtcGlwZWxpbmUKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJFNVUEFCQVNFX0FVVEhfSEVBREVSCiAgICAgICAgICBhcGlrZXk6ICRTVVBBQkFTRV9BUElfS0VZCg=='/>

The second example uses
[Edge Functions](https://supabase.com/docs/guides/functions). While
[Transformers](/data-routing/transformers) can be used to modify data, Edge
Functions can be utilized further in the context of Supabase.

Assuming a database named `golioth_pipeline_advanced` with the following
columns:

| id | created_at | ce-time | ce-subject | ce-type | ce-source | temp | lat | long |
| -- | ---------- | ------- | ---------- | ------- | --------- | ---- | --- | ---- |

Create the following Pipeline:

<Pipeline link='https://console.golioth.io/pipeline?name=Supabase%20Edge%20Function%20Example&pipeline=c3RlcHM6CiAgLSBuYW1lOiBzdGVwMAogICAgZGVzdGluYXRpb246CiAgICAgIHR5cGU6IHdlYmhvb2sKICAgICAgdmVyc2lvbjogdjEKICAgICAgcGFyYW1ldGVyczoKICAgICAgICB1cmw6IGh0dHBzOi8vcmdnY3Fvc2x0cW9wY3d0d3doa2Muc3VwYWJhc2UuY28vZnVuY3Rpb25zL3YxL2dvbGlvdGgtcGlwZWxpbmUKICAgICAgICBoZWFkZXJzOgogICAgICAgICAgQXV0aG9yaXphdGlvbjogJFNVUEFCQVNFX0FVVEhfSEVBREVSCiAgICAgICAgICBhcGlrZXk6ICRTVVBBQkFTRV9BUElfS0VZCg=='/>

Create a new Edge Function called `golioth-pipelines` with the following code:

```ts
import { createClient } from "jsr:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      },
    );

    const body = await req.json();

    const { error } = await supabase
      .from("golioth_pipeline_advanced")
      .insert({
        "ce-subject": req.headers.get("ce-subject"),
        "ce-time": req.headers.get("ce-time"),
        "ce-source": req.headers.get("ce-source"),
        "ce-type": req.headers.get("ce-type"),
        temp: body.temp,
        lat: body.lat,
        long: body.long,
      });

    if (error) {
      throw error;
    }

    return new Response(body, {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(String(err?.message ?? err), { status: 500 });
  }
});
```
