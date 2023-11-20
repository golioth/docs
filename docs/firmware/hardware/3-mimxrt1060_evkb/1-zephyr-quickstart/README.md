---
id: overview
title: NXP i.MX RT1060 Zephyr Quickstart
slug: /hardware/mimxrt1060_evkb/zephyr-quickstart
---

This walk-through will demonstrate how to quickly connect an NXP [MIMXRT1060_EVKB Evaluation Kit](https://www.nxp.com/design/development-boards/i-mx-evaluation-and-development-boards/i-mx-rt1060-evaluation-kit:MIMXRT1060-EVKB) with [Zephyr](https://www.zephyrproject.org) & [`west`](https://docs.zephyrproject.org/latest/guides/west/index.html).

:::tip
You must first follow the [Golioth Platform Quickstart](/getting-started/) to set up Golioth device credentials before attempting this guide.
:::

:::note
The MIMXRT1060_EVKB is very similar to the MIMXRT1060_EVK. We will be using the newer "B" version in this quickstart. Other boards based around NXP processors will work with Golioth's Zephyr SDK, but require additional setup (like creating board-specific configuration files). We've chosen the MIMXRT1060_EVKB to provide a consistent getting started experience.
:::
