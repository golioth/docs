---
id: register-provision-device
title: Register/Provision device
---

Before we begin, we need to create/select a project on Golioth platform.

### Create a Project

import CreateProject from '../../partials/create-project.md'

<CreateProject/>

### Provision Device

To provision a device with a credential, we can use the command `goliotctl provision`. Here is the command to do that:

```
goliothctl provision --hwId "DE:AD:BE:EF" \
  --name "My first device" \
  --credId "deadbeef-id" \
  --psk "supersecret"
```

:::note
Credential Identifier also needs to be unique.
:::

Now your device can connect to our platform. You can check for more commands to provision devices [here](/docs/reference/goliothctl/goliothctl_provision).
