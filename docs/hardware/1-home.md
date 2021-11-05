---
id: overview
title: Overview
hide_title: true
slug: /hardware
---

## Overview

This section includes supported hardware for the Golioth platform. Includes hardware description, how to get started using that hardware on the Golioth platform, and how to apply other Golioth examples to that hardware.

*See Also*: Device SDK

## Terminology

* **Hardware** - A broad classification of electronic components, often mounted on PCBs. May also refer to an assembly of many components.
* **Processor** - The computing element that runs code. This could be a microcontroller or microprocessor, generally the former.
* **Printed CircuitBoard (PCB)** - A piece of fiberglass with copper traces on it. 
* **Board** - A PCB with a Processor on it. To be useful on the Golioth network, it requires a Network Interface in order to communicate back to Golioth APIs over the internet.
* **MPN** - Manufacturer Part Number (ie. nRF9160 from Nordic Semiconductor) of the Processor.
* **Core** -  The intellectual property used to design the silicon inside a Processor (ie. ARM Cortex M0 or RISC V)
* **Development Board** - Off the shelf *Boards* that contain a Processor and a Network Interface that can communicate back to Golioth out of the box. Golioth users can purchase these boards and confidently use them
* **Custom Hardware** - These are non-standardized pieces of *Hardware* that contain a Processor and Network Interface. Often these are designs that derived from circuits on a *Development Board*.
* **Golioth Reference Boards** - Custom Hardware designed by the Golioth team for specific demonstration purposes. These boards may integrate Development Boards via connectors, or they may contain a Processor directly on the PCB. 
* **Golioth Verified Boards** - Development Boards that are both supported by the Zephyr Project and have been tested/verified by the Golioth team to work well with Golioth. 
* **Zephyr Supported Boards** - Development Boards or Custom Hardware that has been verified to work with Zephyr, but has not yet been tested with Golioth.
* **Community Boards** - Development Boards or Custom Hardware that works with Golioth and is being used by community members, but is not yet officially supported by Golioth.

## Golioth Platform Boards

These are pieces of example hardware that Golioth has created to showcase certain features or to target a specific application. A custom made *PCB* that targets a vertically integrated target application, such as our AgTech Demo board, is a good example. This Platform board can integrate many of the *[Golioth Verified (dev) Boards](/hardware#golioth-supported-boards)*, such as the nRF91 Feather. Other *Golioth Reference Boards* may contain *Processors* that are also supported but are integrated directly onto that *PCB*.

## Golioth Verified Boards

These are boards or devices that members of the Golioth team have used and confirm work well using the Golioth platform. There will be additional support, such as overlay files in the various firmware samples, and regular testing that goes along with the "verified status".

## Community Verified Boards

These are boards or devices that community members have used and confirm work well using the Golioth platform.

## Zephyr Supported Boards

These are boards that are listed by Zephyr and are candidates to be either Community Verified Boards or Golioth Verified boards, but have not yet been tested by members of the Golioth team, nor the community. 

