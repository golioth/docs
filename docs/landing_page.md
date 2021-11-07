---
id: home
title: What is Golioth?
slug: /
hide_title: true
---

import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: '/img/logo_gradient_black.svg',
    dark: '/img/logo_gradient_white.svg',
  }}
/>

---

Golioth is an IoT platform that provides cloud services for embedded devices. Colloquially, we hope to solve the “impedance mismatch between hardware and cloud engineering teams" (a phrase we learned from an early user). Golioth is purpose-built for you and the hardware you develop. Enable everything that your devices need from the cloud, including device messaging, security, updates, analytics, and more.

We chose the [the Zephyr Project™](https://www.zephyrproject.org), as the basis of our first embedded offering. Zephyr is an open-source, safe, secure, and flexible RTOS under the Linux Foundation. We offer the Golioth SDK--built on top of the Zephyr SDK--which you can use to quickly bootstrap an IoT application.

## Get started today

To get started, check out the [Quickstart Guide](/getting-started/). That will get you set up with a Golioth account and help you to provision your first devices. Then you can choose which platform to try out using our [supported hardware](/hardware).

## Navigation

There are 5 major sections on the Golioth Docs page:

* [Getting Started](/getting-started) - Start here! If you are confused at all, please [join our Discord](https://golioth.io/discord) or [let us know directly](mailto:devrel@golioth.io)
* [Hardware](/hardware) - This section details which device platforms are explicitly supported and how you can get started with them quickly. There is also a catalog of all hardware that works with Golioth and whether or not it has been verified by the Golioth team, the community, the Zephyr community, etc.
* [Firmware](/firmware) - This is the "device side" features of our offerings, including device Software Development Kets (SDKs). This section shows how to run the sample firmware that connects to the offerings in the Services section. 
* [Cloud](/cloud) - This is the "server side" features of our offerings. Your embedded hardware will communicate with Golioth Services to push and pull information to the broader internet. This section details how to control and interact with each service, and also test the service without any hardware involved. This section also details how to interact with that data via webapps, mobile apps, and from anywhere else on the web. Make calls to the Golioth web API and display your users' data!
* [Reference](/reference) - All generated API documentation lives here, including for the web side API and the Zephyr API