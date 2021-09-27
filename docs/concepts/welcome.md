---
id: welcome
title: Introduction to Golioth Concepts
slug: /concepts
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

Golioth is an IoT platform that provides turnkey IoT cloud services. You may be familiar with other IoT platforms but Golioth is different - it is purpose-built for you and the hardware you develop. Golioth allows you to
use the hardware and software you're comfortable with and add Golioth to easily enable everything that your devices need from the cloud, from device messaging to security, updates, analytics and more.

Over time, Golioth will support many RTOSes but to start with, we picked [the Zephyr Project™](https://www.zephyrproject.org), an open-source, safe, secure, and flexible RTOS under the Linux Foundation.


To get started, either go to the [Quickstart Guide](docs/guides/golioth-platform-getting-started/platform-overview) if you're completely new to Zephyr or skip to the [Speedrun](guides/speedrun) if you already have some experience with the RTOS and toolchain.

### What's the idea behind Golioth?

It gets out of the way to let you build your IoT application with whatever
hardware and software you want, without needing armies of DevOps engineers to navigate the complexity that is conventional cloud platforms.

### Why are we making Golioth?

We noticed that current IoT platforms were not built for hardware people, the key stakeholders in creating physical products. If a platform were to exist that was purpose-built for hardware teams it could gain significant adoption as it is better serving the needs of the user. One of the devs we spoke to called it the, “impedance mismatch between hardware and cloud engineering teams,” and we think that’s the best, geekiest way to describe it.

### Golioth Vocabulary

While we work hard to make Golioth as straightforward as possible, there are a few things you'll need to know before getting started.

- A device is... just that, a physical or simulated device with a pre-shared-key (PSK) and one or more hardware IDs (e.g. MAC addresses).
- A project contains one or more devices, as well as databases, streams, and logs that the devices can write to and read from.
- A LightDB database is a document-based key-value store. Devices can read, store, and efficiently wait on changes.
- A LightDB Stream, on the other hand, is an append-only stream of time-series data. Devices can write and efficiently wait for new values.
- A device service is the many built-in services Golioth offers to be integrated into your device. For example, collecting device-level logs is one of the basic device services.
- A device SDK is software package that natively integrates with an embedded operating system. There will be multiple device SDKs in the future but at this time only the Zephyr RTOS is supported via the Zephyr device SDK.
