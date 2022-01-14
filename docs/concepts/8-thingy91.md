---
id: thingy91
title: Nordic Thingy91 Guide
---

# Flash the Thingy91 using the USB bootloader

You must add the mcuboot directive to the `prj.conf` file you are compiling:

```
CONFIG_BOOTLOADER_MCUBOOT=y
```

After building the project, be sure to use the correct bootloader-ready binary found in `{project_dir}\build\zephyr\app_update.bin`

### Compiling Blinky

```
cd ~/zephyr-nrf/modules/lib/golioth
west build -b thingy91_nrf9160_ns samples/basic/blinky -p
```

### Flashing Blinky

Put the board into bootloader mode by holding the button and power cycling (there is an on/off switch next to the USB port to use since this hardware lacks a reset button).

```
newtmgr --conntype=serial --connstring='dev=/dev/ttyACM0,baud=115200' image upload ~/zephyr-nrf/modules/lib/golioth/build/zephyr/app_update.bin
newtmgr --conntype=serial --connstring='dev=/dev/ttyACM0,baud=115200' reset
```

The device will reboot and red light will begin flashing.

### Easier flashing

Add a profile to `newtmgr` to make flashing easier:

```
newtmgr conn add thingy91 type=serial connstring='dev=/dev/ttyACM0,baud=115200'
```

Now you can use the profile name when flashing:

```
newtmgr -c thingy91 image upload build/zephyr/app_update.bin
```
