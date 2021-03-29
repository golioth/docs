---
id: install-device-sdk
title: Install/Upgrade Device SDK
---

Our main device SDK is based on the Zephyr RTOS. So a lot of the initial steps required are close to the same requirements to use Zephyr.

import SetupZephyr from '../../partials/setup-zephyr.md'

<SetupZephyr/>

### Upgrading Golioth Device SDK

If you already installed our SDK before and want to upgrade it, you can go to the folder that you made the set up before and run the commands bellow:

```
cd modules/lib/golioth
git pull
west update
cd ../../../
west patch
```
