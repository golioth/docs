---
id: flash-sample
title: Flashing an nRF9160 with samples
---

Golioth sample code uses the (cellular) network interface provided by the nRF9160 and passes packets back to the Golioth network. The sample you should test first is called `hello`, which logs a "hello" message using the _Logging Device Service_. Here's snippet of the `main()` function:

```cpp
void main(void)
{
	int r;
	int counter = 0;

	LOG_DBG("Start Hello sample");

	k_sem_take(&golioth_client_ready, K_FOREVER);

	while (true) {
		LOG_INF("Sending hello! %d", counter++);

		r = golioth_send_hello(client);
		if (r < 0) {
			LOG_WRN("Failed to send hello!");
		}

		k_sleep(K_SECONDS(5));
	}

	LOG_DBG("Quit");
}
```

If you're familiar with Zephyr you may recognized the `LOG_*` functions. That's because Golioth uses Zephyr APIs whenever it can. In this instance, the Logging Device Service is a cloud-enabled backend for Zephyr's [logging](https://docs.zephyrproject.org/latest/reference/logging/index.html) library. Golioth is building upon well-tested libraries, reducing the size through shared code, and retaining the idiomatic feel for developers who are comfortable with Zephyr.

### Building `hello`

Samples can be found in Golioth's nRF Connect based SDK ('golioth-ncs-sdk') in the folder `modules/lib/golioth/samples`. We recommend running the commands below from the `modules/lib/golioth` folder.

```console
cd ~/golioth-ncs-sdk/modules/lib/golioth
```

Zephyr uses [Kconfig](https://docs.zephyrproject.org/latest/guides/kconfig/index.html) to manage build settings at scale. Kconfig values can be set a number of ways but for this example we'll take a simple route by modifying `prj.conf`.

Open `samples/hello/prj.conf` in your editor of choice and add these fields:

```console
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="DEVICE_CRED_ID"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="DEVICE_PSK"
```

Set the PSK & PSK ID to match what was used during the provisioning step. Networking validation is taken care of by your SIM card, which was tested in the [carrier setup section](/hardware/nrf91/quickstart/carrier-setup)

After saving, build the sample (for the [nRF9160 DK](https://www.nordicsemi.com/Products/Development-hardware/nRF9160-DK/GetStarted)) with the new settings applied.

```console
west build -b nrf9160dk_nrf9160_ns samples/hello -p
```

### Flashing the device

Flash the device by running the command:

```console
west flash
```

If this command fails ensure that the [nRF Command Line tools](https://www.nordicsemi.com/Products/Development-tools/nrf-command-line-tools/download) and [Jlink Software and Documentation Pack](https://www.segger.com/downloads/jlink) are downloaded and installed on the development system.

### Verify with serial output

You can verify that everything is working by connecting to the device over a serial console using a tool like `screen`:

```console
screen /dev/cu.usbserial-1337 115200
```

This is an snippet from the serial console:

```console
uart:~$ *** Booting Zephyr OS build v2.6.99-ncs1-1  ***
[00:00:00.208,984] <inf> golioth_system: Initializing
[00:01:08.349,792] <dbg> golioth_hello.main: Start Hello sample
[00:01:08.349,822] <inf> golioth_hello: Sending hello! 0
[00:01:08.350,341] <wrn> golioth_hello: Failed to send hello!
[00:01:08.350,433] <inf> golioth_system: Starting connect
[00:01:08.682,373] <inf> golioth_system: Client connected!
[00:01:13.350,402] <inf> golioth_hello: Sending hello! 1
[00:01:18.351,745] <inf> golioth_hello: Sending hello! 2
[00:01:23.361,450] <inf> golioth_hello: Sending hello! 3
```

These are just the logs the device has created but they're also being sent to Golioth for later use. The next step will show you how to view logs from the cloud.
