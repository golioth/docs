---
id: speedrun
title: 'Speedrun: Zephyr + Golioth'
---

Already know what Zephyr is and how to use it? Good. This page is for you.

If not, continue on to the [Quickstart guide](golioth-platform-getting-started/platform-overview).

### 1... 2... 3... GO!

- [Install Goliothctl](/platform/getting-started/installing) — you'll use it to interact with Golioth.
- Log In/Sign Up by running [`goliothctl login`](/platform/getting-started/authentication).
- Create a project to hold your device with [`golioth project create`](/platform/getting-started/platform-create-project).
- Provision your embedded device with [`golioth provision`](/platform/getting-started/platform-manage-devices).
- Create a west workspace that contains the golioth module:
    - `west init -m git@github.com:golioth/zephyr.git --mr main zephyrproject/`
    - `cd zephyrproject/`
    - `west update`
    - `west patch`
    - `west zephyr-export`
    - `pip3 install -r zephyr/scripts/requirements.txt`
- Setup your toolchain of choice with `west`.
- Build the hello sample in `zephyrproject/modules/lib/golioth/samples/hello` and flash it to an internet-enabled device.
    See the [Flashing a device with Samples](/hardware/esp32/getting-started/) page for ESP32, for one example of flashing a device.
- Run `goliothctl logs --interval 10m` to see the pings made by your device!
