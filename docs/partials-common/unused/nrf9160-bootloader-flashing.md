---
id: bootloader
title: Flash via USB Bootloader
---

## Installing Tools

Flashing via USB bootloader requires the `newtmgr` tool.

### Prerequisite: add yourself to the `dialout` user group

Linux users need to be part of the `dialout` user group for permission to work
with the USB ports. For this to take effect you need to log out and log back in,
so do this first!

```bash
# Check to see if your user is in the dialout user group
$ groups
mike adm tty uucp cdrom sudo dip plugdev lpadmin sambashare
# If groups list didn't include dialout, add yourself now
$ sudo adduser $USER dialout
# IMPORTANT: log out and back into Linux for this change to take effect.
# (restarting the terminal is not enough)
```

### Installing Newt Manager (for bootloading)

We recommend you use [Jared Wolff's fork of newtmgr](https://github.com/circuitdojo/mynewt-newtmgr) which includes customization for higher-speed transfers on MCUboot implementations that support it. This tool depends on the Go language so we will also install that.

1. Install the Go Language

    :::note
    We recommend you do not use a package manager (like `apt`) to install the Go language. They often have older versions and can present some permission problems as well.
    :::

    Visit [the Go language download page](https://go.dev/dl/) and download the latest version. Install the package:

    ```bash
    cd ~
    tar -xvf go1.17.6.linux-amd64.tar.gz --directory ~/.
    nano ~/.profile
    ```

    Add the following lines to the end of this file:

    ```bash
    export GOPATH=$HOME/go
    export PATH=$PATH:$GOPATH/bin
    ```

    Save the file and load the changes:

    ```bash
    source ~/.profile
    ```

2. Install Newt Manager (newtmgr)

    ```bash
    mkdir -p $GOPATH/src/mynewt.apache.org/newtmgr
    git clone https://github.com/circuitdojo/mynewt-newtmgr.git $GOPATH/src/mynewt.apache.org/newtmgr
    cd $GOPATH/src/mynewt.apache.org/newtmgr/newtmgr
    GO111MODULE=on go build
    go install
    ```

## Flashing Firmware

The nRF9160 can be programmed via USB using the MCUboot bootloader. The process depends on three steps: compiling your application for MCUboot, placing the target board in Device Firmware Upgrade (DFU) mode, and using a device management tool to write the firmware binary to the target.

### Compile your code with MCUboot in mind

We'll use Zephyr's default blinky project as an example:

1. Change to the Zephyr directory:

    ```bash
    cd ~/golioth-ncs-workspace/zephyr
    ```

2. Add the `CONFIG_BOOTLOADER_MCUBOOT` flag to the project's `prj.conf` file.

    ```bash
    echo 'CONFIG_BOOTLOADER_MCUBOOT=y' >> samples/basic/blinky/prj.conf
    ```

3. Build the project:

    ```bash
    #Flashing example for Circuit Dojo nRF9160 Feather
    west build -b circuitdojo_feather_nrf9160_ns samples/basic/blinky -p
    #Flashing example for Thingy:91
    west build -b thingy91_nrf9160_ns samples/basic/blinky -p
    ```

4. When configured for MCUboot, the build process will compile an additional file for use with DFU. This file is located at:

    ```bash
    {project_dir}/build/zephyr/app-update.bin
    ```

### Flash with MCUboot

1. Put the board into DFU mode by holding the bootloader button and power cycling the device.

    * **Circuit Dojo nRF9160 Feather:** Hold down the user button and click the RST button. Keep holding the user button until the blue light comes on
    * **Thingy:91:** Remove the orange case. Hold down the button in the middle of the device and cycle the on/off switch located next to the USB (this hardware lacks a reset button and there is an onboard battery)

2. Use `newtmgr` to flash the firmware.

    ```bash
    #Flashing example for Circuit Dojo nRF9160 Feather
    newtmgr --conntype=serial --connstring='dev=/dev/ttyUSB0,baud=1000000' image upload build/zephyr/app_update.bin
    #Flashing example for Thingy:91
    newtmgr --conntype=serial --connstring='dev=/dev/ttyACM0,baud=115200' image upload build/zephyr/app_update.bin
    ```

3. Reset the device to run the newly flashed binary

    If the device has a reset button it can be used to exit DFU mode and run the new binary. You may also use the flashing tool to reset the device:

    ```bash
    newtmgr --conntype=serial --connstring='dev=/dev/ttyACM0,baud=115200' reset
    ```

### Easier MCUboot flashing

Complexity can be reduced when using `newtmgr` by adding profiles that store the connection settings.

1. Add a `newtmgr` profile for your target

    ```bash
    #Profile for the Circuit Dojo nrF9160 Feather
    newtmgr conn add feather type=serial connstring='dev=/dev/ttyUSB0,baud=1000000'
    #Profile for the Thingy:91
    newtmgr conn add thingy91 type=serial connstring='dev=/dev/ttyACM0,baud=115200'
    ```

2. In the future, just use the profile name when flashing:

    ```bash
    #Profile for the Circuit Dojo nrF9160 Feather
    newtmgr -c feather image upload build/zephyr/app_update.bin
    #Profile for the Thingy:91
    newtmgr -c thingy91 image upload build/zephyr/app_update.bin
    ```
