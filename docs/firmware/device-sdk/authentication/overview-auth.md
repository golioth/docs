---
title: Overview
sidebar_position: 1
---

import ComingSoon from '/docs/partials/coming-soon-centered.md'

<ComingSoon/>
Preview from our Blog: https://blog.golioth.io/yes-even-your-iot-prototype-should-be-secure/


TLS & DTLS are the basis for our device authentication service as well as how the device authenticates a Golioth instance. The diagram below shows how device identy and authentication data that Golioth manages maps to TLS.



At runtime, the Golioth Auth client retrieves the device credentials and provided them to the DTLS client. Currently the client and service support PSK based authentication and implementation of certificate base assymetric authentication is underway.


