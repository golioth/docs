---
id: device-services
title: Device Services
---

## Overview

This is the Device Services page. The details around individual device services Goioth offers are in the [Platform](/services/) section of the docs.

## Terminology

Here are some of the terms will we be using in Device Services section of the documentation:

* **Device Service** -
* **Cloud** -

## Introduction

Golioth Device Services are available over our [Device Interfaces](#), and are wrapped for easy integration into your device by Golioth libraries and the Golioth SDKs.

Device Services are a set of functionality commonly needed for building production-ready IoT devices, their management, and operations in the field.

You can pick and choose with Device Services you want to use - as many and as few as you want. Our SDKs, libraries, and the related services are all modular.

## Device Interfaces
All of our Device Interfaces are wrapped by easy to use SDK, so you don't need to implement them from scratch. If you want to know what is under the hood, we currently support two secure interfaces: CoAP and MQTT.

### CoAP
For environments with constrained bandwidth or metered traffic, we provide a data-efficient CoAP interface,

All connections require client authentication and use DTLS v1.2.

### MQTT
MQTT interface is intended for environments with reliable network layers, where TCP stack and its overhead can be accommodated. These are typically high bandwidth unmetered networks, such as WiFi, Bluetooth, or Ethernet.

All connections require client authentication and use TLS v1.3.

## Firmware Updates
Do you need a streamlined, scalable way to update firmware of a large fleet of embedded devices? Secure firmware updates are a core device service. We support updates over both IP and non-IP networks.

## Remote Procedure Call
Are you looking for a reliable, scalable way to tell devices to perform an action? Open or close a valve? Blink an LED? Look no further. Our Remote Procedure Call service has everything you need to perform remote actions at scale, and audit the results - successful or unsuccessful.

## LightDB State
The device state database serves as the “device twin” of your device. All the state of your device can be captured and synchronized with the cloud. You can query devices based on their current dynamic state, and apply actions based on the queries: Call remote procedure (RPC), change configuration (in bulk), turn features on or off, or perform (bulk) firmware updates.

## LightDB
Golioth features an inbuilt high-performance time-series database - LightDB. It can be used out-of-the-box with numerous tools such as Grafana. It can be queried directly from our web console, too.

## Remote Logging
Whenever you need to find a root cause of a problem in your IoT deployment, Golioth logs are going to simplify and accelerate the process. During implementation, the service will provide a framework to build a robust logging functionality, and in production it will collect information at scale with all the meta-data you will need when resolving issues.

## Remote Monitoring
Apart from telemetry, your IoT deployment can benefit from additional operations data about your devices in the field. These can range from resource usage (battery level, battery usage, battery recharge cycles, storage, read / write cycle count, component temperature) to application-specific operations, so you can decouple them from application-level telemetry.

## Security and Key Management
Have you been researching pre-shared keys, symmetric and asymmetric cryptography, certificates and private key infrastructure? Getting IoT security right is a challenge - especially at scale. We have collected decades of experience with cryptography in resource constrained environments, and will guide you towards an ideal solution for your use case and the constrains of your specific application and device.

## Learn More
