---
id: thingy91
title: Nordic Thingy91 Guide
---

# Flashing Binaries to nRF9160-Based Boards

There are two main options for flashing code to nRF9160 boards: by USB bootloader or by using a hardware programmer. This section will discuss how to set up and use both of these. Anyone working with boards like the [Circuit Dojo nRF9160 Feather](/hardware/catalog/boards/quickstart/arm_circuitdojo_feather_nrf9160), the [nRF9160 DK](/hardware/catalog/boards/quickstart/arm_nrf9160dk_nrf9160), or the Thingy:91 will find this information useful.

## Installing Tools

Flashing via USB bootloader requires the `newtmgr` tool. Flashing via hardware programmer requires the `nrfjprog` tool. Here is the installation process for these tools.

### Installing Newt Manager (for bootloading)

We recommend you use [Jared Wolff's fork of newtmgr](https://github.com/circuitdojo/mynewt-newtmgr) which includes customization for higher-speed transfers on MCUboot implementations that support it. This tool depends on the Go language so we will also install that.

1. Install the Go Language

    :::note
    You can install the Go language with `sudo apt install golang-go`, but some package managers have older versions. The following process will install the newest version.
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

### Installing the nRF Command Line Tools (for hardware programmers)

Zephyr uses `nrfjprog` to flash nRF9160 targets using a hardware programmer like the Segger J-Link, or the debugger that is built into the nRF9160 DK board. This tool is part of the nRF Command Line Tools.

1. Go to the [nRF Command Line Tools](https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download) page. Scroll down, select your operating system, and download the installer package.

2. Run the installer

    ```bash
    sudo dpkg -i nrf-command-line-tools_10.15.2_amd64.deb
    ```

## USB bootloader

The nRF9160 can be programmed via USB using the MCUboot bootloader. The process depends on three steps: compiling your application for MCUboot, placing the target board in Device Firmware Upgrade (DFU) mode, and using a device management tool to write the firmware binary to the target.

### Compiling with MCUboot in mind

1. Add the `CONFIG_BOOTLOADER_MCUBOOT` flag to the project's `prj.conf` file.

    ```bash
    CONFIG_BOOTLOADER_MCUBOOT=y
    ```

2. Build the project:

    ```bash
    cd ~/zephyr-nrf/modules/lib/golioth
    #Flashing example for Circuit Dojo nRF9160 Feather
    west build -b circuitdojo_feather_nrf9160_ns samples/basic/blinky -p
    #Flashing example for Thiny:91
    west build -b thingy91_nrf9160_ns samples/basic/blinky -p
    ```

3. When configured for MCUboot, the build process will compile an additional file for use with DFU. This file is located at:

    ```bash
    {project_dir}/build/zephyr/app-update.bin
    ```

### Flashing with MCUboot

1. Put the board into DFU mode by holding the bootloader button and power cycling the device.

    * **Circuit Dojo nRF9160 Feather:** Hold down the user button and click the RST button. Keep holding the user button until the blue light comes on
    * **Thingy:91:** Remove the orange case. Hold down the button in the middle of the device and cycle the on/off switch located next to the USB (this hardware lacks a reset button and there is an onboard battery)

2. Use `newtmgr` to flash the firmware.

    ```bash
    #Flashing example for Circuit Dojo nRF9160 Feather
    newtmgr --conntype=serial --connstring='dev=/dev/ttyUSB0,baud=1000000' image upload build/zephyr/app_update.bin
    #Flashing example for Thiny:91
    newtmgr --conntype=serial --connstring='dev=/dev/ttyACM0,baud=115200' image upload build/zephyr/app_update.bin
    ```

3. Reset the device to run the newly flashed binary

    If the device has a reset button it can be used to exit DFU mode and run the new binary. You may also use the flashing tool to reset the device:

    ```
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

## Hardware Programmer

During development we suggest using a hardware programmer like the Segger J-Link. This approach avoids the need to put a device into DFU mode, flashing takes far less time than when using the bootloader, and the J-Link can automatically reset the target. This method is built into Zephyr, and a hardware programmer can be used for on-chip debugging.

1. Build the project

    ```bash
    cd ~/zephyr-nrf/modules/lib/golioth
    #Flashing example for Circuit Dojo nRF9160 Feather
    west build -b circuitdojo_feather_nrf9160_ns samples/basic/blinky -p
    #Flashing example for Thiny:91
    west build -b thingy91_nrf9160_ns samples/basic/blinky -p
    ```

2. Connect the J-Link to USB and to the target board

    * The CircuitDojo nRF9160 Feather uses a 6-pin "No Legs" Tag-Connect cable
    * The Thingy:91 uses a 10-pin 1.27mm pitch Cortex-style cable
    * The nRF9160 DK has J-Link functionality built in and will identify as a hardware programmed when connected via USB

3. Flash the firmware

    ```bash
    west flash
    ```

    You can see the advantage here is that the flasher profiles built into Zephyr automatically handle the details.
