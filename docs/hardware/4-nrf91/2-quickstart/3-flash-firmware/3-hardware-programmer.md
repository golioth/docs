---
id: hardware-programmer
title: Hardware Programmer
---

## Installing Tools

Flashing via hardware programmer requires the `nrfjprog` tool.

### Installing the nRF Command Line Tools (for hardware programmers)

Zephyr uses `nrfjprog` to flash nRF9160 targets using a hardware programmer like the Segger J-Link, or the debugger that is built into the nRF9160 DK board. This tool is part of the nRF Command Line Tools which we will install along with the Segger tool.

1. Go to Segger and download the latest [J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink)

2. Run the J-Link installer

    ```bash
    sudo dpkg -i JLink_Linux_V760f_x86_64.deb
    ```

3. Go to the [nRF Command Line Tools](https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download) page. Scroll down, select your operating system, and download the installer package.

4. Run the nRF Command Line Tools installer

    ```bash
    sudo dpkg -i nrf-command-line-tools_10.15.2_amd64.deb
    ```

## Flashing Firmware

During development we suggest using a hardware programmer like the Segger J-Link. This approach avoids the need to put a device into DFU mode, flashing takes far less time than when using the bootloader, and the J-Link can automatically reset the target. This method is built into Zephyr, and a hardware programmer can be used for on-chip debugging.

1. Build the project

    ```bash
    cd ~/zephyr-nrf/zephyr
    #Flashing example for Circuit Dojo nRF9160 Feather
    west build -b circuitdojo_feather_nrf9160_ns samples/basic/blinky -p
    #Flashing example for Thingy:91
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
