---
id: speedrun
title: 'Speedrun: Zephyr + Golioth'
---

Already know what Zephyr is and how to use it? Good. This page is for you.

If not, continue on to the [Quickstart guide](quickstart/getting-started).

### 1... 2... 3... GO!

- [Install Goliothctl](quickstart/installing) — you'll use it to interact with Golioth.
- Log In/Sign Up by running [`goliothctl login`](quickstart/sign-up).
- Create a project to hold your device with [`golioth project create`](quickstart/register-device#create-a-project).
- Provision your embedded device with [`golioth provision`](quickstart/register-device#provision-the-device).
- Create a west workspace that contains the golioth module:
    - `west init -m git@github.com:golioth/zephyr.git --mr main zephyrproject/`
    - `cd zephyrproject/`
    - `west update`
    - `west patch`
    - `west zephyr-export`
    - `pip3 install -r zephyr/scripts/requirements.txt`
- Setup your toolchain of choice with `west`.
- Build the hello sample in `zephyrproject/modules/lib/golioth/samples/hello` and flash it to an internet-enabled device.
    See the [Flashing a device with Samples](quickstart/flash-sample#building-hello) page.
- Run `goliothctl logs --interval 10m` to see the pings made by your device!
