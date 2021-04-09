---
id: register-device
title: Register a device
---

Golioth allows you to bring your own device and _securely_ use device services. When starting from scratch there are two things you need to do first so that Golioth knows about a device:

- Create a project
- Provision the device

### Create a Project

A _project_ is a core concept in Golioth and where related devices live and are managed. The definition of a project will be up to you but it might represent a product and all instances in the field, or a customer or something different entirely.

import CreateProject from '../../partials/create-project.md'

<CreateProject/>

### Provision the Device

You may add new devices through a process called _provisioning_. Provisioning securely associates a device and it's credentials with a Project in Golioth.

To provision a device, use `goliotctl provision` with the following parameters:

```
goliothctl provision --hwId "DE:AD:BE:EF" \
  --name "My first device" \
  --credId "deadbeef-id" \
  --psk "supersecret"
```

:::note
Hardware ID (hwID) & Credential ID (credId) must be globally unique.
:::

Now your device can securely communicate with Golioth and is associated with the your project. You can view more commands to provision devices [here](/docs/reference/goliothctl/goliothctl_provision).
