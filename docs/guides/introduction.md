---
id: introduction
title: Introduction to Golioth
slug: /guides
---

Golioth is the cloud built for hardware. Use the hardware and software you're comfortable with and add Golioth to easily enable everything
that is expected from an IoT platform, from device messaging to security, updates, and analytics.

Over time, Golioth will support many RTOSs but to start with, we picked Zephyr, an open-source, safe, secure, and flexible RTOS under the Linux Foundation.

To get started, either go to the [Speedrun](guides/speedrun) if you're already familiar with Zephyr or to the [Quickstart Guide](guides/quickstart/getting-started) if you're not.

### What's the idea behind Golioth?

It gets out of the way to let you build your IoT application with whatever
hardware and software you want, without needing armies of DevOps engineers to navigate the complexity that is conventional cloud platforms.

### Why are we making Golioth?

We noticed that current cloud solutions for IoT devices and application were built for cloud computing and the web. For the promise of IoT to
be delivered, a new cloud company would have to be created, that built a cloud for hardware developers by hardware developers: Golioth.

### Golioth Vocabulary

While we work hard to make Golioth as straightforward as possible, there are a few things you'll need to know before getting started.

- A device is... just that, a physical or simulated device with a pre-shared-key (PSK) and one or more hardware IDs (e.g. MAC addresses).
- A project contains one or more devices, as well as databases, streams, and logs that the devices can write to and read from.
- A LightDB database is a document-based key-value store. Devices can read, store, and efficiently wait on changes.
- A LightDB Stream, on the other hand, is an append-only stream of time-series data. Devices can write and efficiently wait for new values.
