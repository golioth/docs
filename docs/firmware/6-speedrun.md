---
id: speedrun
title: 'Speedrun: Zephyr + Golioth'
---

Already know what Zephyr is and how to use it? Good. This page is for you.

If not, continue on to the [Quickstart guide](/platform/getting-started).

### 1... 2... 3... GO!

<<<<<<< HEAD:docs/firmware/6-speedrun.md
- [Install Goliothctl](/platform/getting-started/installing) — you'll use it to interact with Golioth.
- Log In/Sign Up by running [`goliothctl login`](/platform/getting-started/authentication).
- Create a project to hold your device with [`golioth project create`](/platform/getting-started/create-project).
- Provision your embedded device with [`golioth provision`](/platform/getting-started/manage-devices).
=======
- Install Goliothctl from [Pre-built Binaries](/docs/guides/golioth-platform-getting-started/platform-install/platform-binaries) or [OS Packages](/docs/guides/golioth-platform-getting-started/platform-install/platform-packages) — you'll use it to interact with Golioth.
- Log In/Sign Up by running [`goliothctl login`](golioth-platform-getting-started/platform-authentication).
- Create a project to hold your device with [`golioth project create`](golioth-platform-getting-started/platform-create-project).
- Provision your embedded device with [`golioth provision`](golioth-platform-getting-started/platform-manage-devices).
>>>>>>> main:docs/guides/speedrun.md
- Create a west workspace that contains the golioth module:
    - `west init -m git@github.com:golioth/zephyr.git --mr main zephyrproject/`
    - `cd zephyrproject/`
    - `west update`
    - `west patch`
    - `west zephyr-export`
    - `pip3 install -r zephyr/scripts/requirements.txt`
- Setup your toolchain of choice with `west`.
- Build the hello sample in `zephyrproject/modules/lib/golioth/samples/hello` and flash it to an internet-enabled device.
    See the [Flashing a device with Samples](/hardware/esp32/quickstart/flash-sample) page for ESP32, for one example of flashing a device.
- Run `goliothctl logs --interval 10m` to see the pings made by your device!
