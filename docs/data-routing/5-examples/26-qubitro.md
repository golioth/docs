---
title: Qubitro
---

import Pipeline from '@site/src/components/usethispipeline'

[Qubitro](https://www.qubitro.com/) is a cloud-based platform for managing IoT (Internet of Things) data. It provides infrastructure and tools for developers to collect, process, and visualize telemetry data from connected devices. This example demonstrates accepting a JSON data payload, then delivering it to Qubitro via the [Webhook](/data-routing/destinations/webhook) data destination. It relies on Qubitro's [No-Code integration](https://docs.qubitro.com/data-sources/no-code-integrations/golioth) with Golioth.

:::info Reminder
Make sure to create [secrets](/data-routing/secrets) `$QUBITRO_PROJECT_ID` & `$QUBITRO_SIGNING_KEY` with the correct details from Qubitro.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Qubitro%20Pipeline%20Example&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogImFwcGxpY2F0aW9uL2pzb24iCnN0ZXBzOgogIC0gbmFtZTogInF1Yml0cm8iCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogaHR0cHM6Ly93ZWJob29rLnF1Yml0cm8uY29tL2ludGVncmF0aW9ucy9nb2xpb3RoCiAgICAgICAgaGVhZGVyczoKICAgICAgICAgIHByb2plY3RJZDogJFFVQklUUk9fUFJPSkVDVF9JRAogICAgICAgICAgd2ViaG9va1NpZ25pbmdLZXk6ICRRVUJJVFJPX1NJR05JTkdfS0VZ' />
