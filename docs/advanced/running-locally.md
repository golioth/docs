---
id: running-locally
title: Running goliothd locally
---

### Prerequisites

You need to install [MongoDB](https://docs.mongodb.com/manual/installation/) to run the backend services locally.

We are gonna add support for running it with other databases in the future (even with just local files).

## Step 1: Environment Configuration

There is an `.env.example` file on the project repository that you can base of to create a `.env` on the same folder that you run the `goliothd` daemon. This should be enough as your .env :

```bash
# Logs
LOG_CONFIG=stdout
LOG_LEVEL=debug
# Storage
MONGO_DB_HOST=localhost
MONGO_DB_PORT=27017
MONGO_DB_DATABASE=golioth-local
# COAP Server
COAP_PORT=
# COAP_INSECURE_PORT=5683 # For insecure CoAP
```

## Step 2: Run the golioth daemon

Run the command:

```
goliothd
```

You should see some logs on the terminal like this:

```
2021/02/05 11:44:39  info starting CoAP gateway at port 5684... module=coap-gateway
2021/02/05 11:44:39  info goliothd started
2021/02/05 11:44:39  info starting API server at port 9090... module=api-server
```

## Step 3: Point `goliothctl` to your local instance

By default `goliothctl` points to the hosted version. To be able to interact with the local instance, you need to change the `apiUrl` configuration param.

```
goliothctl config set apiUrl http://localhost:9090
```

:::note
By default, the local instance have Authentication and Authorization disabled, so you don't need to worry about authenticating the CLI.
:::
