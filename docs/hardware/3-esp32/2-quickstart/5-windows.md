---
id: windows-set-up-zephyr
title: "Windows Addendum: Set up Zephyr for ESP32"
pagination_next: hardware/esp32/quickstart/flash-sample
---

### Install Dependencies

#### Python3

1. Open the command line by hitting the Windows key, typing `cmd.exe` and pressing enter.
2. Type `python3`
3. If python3 is installed, the interpreter will open and display the version. Type `exit()` to exit.
4. If python3 is not installed, the Windows Store will automatically open and offer to install it.
    * Test it: Go back to to the command line, type `python3` to launch then interpreter, `exit()` to exit. 
    * Alternatively you can [download Python3 directly](https://www.python.org/downloads/windows/) and install it manually.

#### Package Manager: Chocolatey

The [chocolatey](https://chocolatey.org/) package manager needs to be installed to fetch software packages required by Zephyr.

1. Open the command line as an Administrator:
    1. Press the windows key and type `cmd.exe` (do not press enter)
    2. Use the mouse to click on "Run as administrator"
2. Run Powershell and [install Chocolately](https://chocolatey.org/install):

    ```console
    powershell.exe
    ```

    ```console
    > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    > exit
    ```

    This command may take a few minutes to complete.

3. Disable global confirmation and use `choco` to install remaining dependencies:

    ```console
    choco feature enable -n allowGlobalConfirmation
    choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
    choco install ninja gperf python git dtc-msys2 wget unzip
    ```

4. Type `exit` to close the console window, we no longer need administrator privileges.

### Install West

`west` is the Zephyr "meta tool" that will allow you to build firmware, install packages, and flash firmware. There are various dependencies required, depending upon your operating system (OS), because `west` is Python based.

import SetupZephyrWindows from '/docs/partials/setup-zephyr-windows.md'

<SetupZephyrWindows />

### Install Zephyr SDK

import InstallZephyrSDKWindows from '/docs/partials/install-zephyr-sdk-windows.md'

<InstallZephyrSDKWindows/>

### Install the Espressif (ESP32) toolchain

import InstallEspressifToolchainWindows from '/docs/partials/install-espressif-toolchain-windows.md'

<InstallEspressifToolchainWindows />

### Sample build

Your system is all set up and ready to start building & flashing with Zephyr.

1. Verify by building a minimal sample:

    ```shell
    cd C:\zephyrproject\zephyr
    west build -b esp32 samples\basic\minimal -p
    ```

### Install the USB Driver

Many ESP32 development modules use a CP2012 USB-to-Serial chip. Windows users need to install a driver for this chip.

1. [Download the driver package](https://www.silabs.com/developers/) for usb-to-uart-bridge-vcp-drivers
2. After unzipping the archive, right click on the `silabser.inf` file and choose "Install"
3. Unplug and replug your ESP32 device. It will now appear as a COM port in the Device Manager.

## Continue to *Flashing with Examples*

Continue the ESP32 Quickstart by going to the [*Flashing with Examples*](./3-flash-sample.md) section next.
