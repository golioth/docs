---
id: flash-sample
title: Flashing an nRF91 with samples
---

The sample code uses the network interface provided on the nRF91 (cellular) and passes packets back to the Golioth network in this. If you're familiar with Zephyr you may recognized the `LOG_*` functions. That's because Golioth tries to use Zephyr APIs whenever it can. In this instance, the Logging Device Service is a cloud-enabled backend for Zephyr's [logging](https://docs.zephyrproject.org/latest/reference/logging/index.html) library. In this way, Golioth can reuse well-tested libraries, reduce the size through shared code and feel idiomatic to developers who are comfortable with Zephyr.

The sample we'll be using is called `hello`, which logs a "hello" message using the _Logging Device Service_. Here's snippet of the `main()` function:

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

### Building `hello`

Samples can be found in the nRF Connect SDK ('zephyr-nrf') in the folder `modules/lib/golioth/samples`. We recommend running the commands below from the `modules/lib/golioth` folder.

```
cd ~/zephyr-nrf/modules/lib/golioth
```

Zephyr uses [Kconfig](https://docs.zephyrproject.org/latest/guides/kconfig/index.html) to manage build settings at scale. Kconfig values can be set a number of ways but for this example we'll take a simple route by modifying `prj.conf`.

Open `samples/hello/prj.conf` in your editor of choice and add these fields:

```
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="DEVICE_CRED_ID"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="DEVICE_PSK"

CONFIG_BOOTLOADER_MCUBOOT=y
```

Set the PSK & PSK ID to match what was used during the provisioning step. Networking validation is taken care of by your SIM card, which was tested in the [carrier setup section](/hardware/nrf91/quickstart/carrier-setup)

After saving, build the sample (for the [CircuitDojo nRF91 Feather](https://www.jaredwolff.com/store/nrf9160-feather/)) with the new settings applied.

```
west build -b circuitdojo_feather_nrf9160ns samples/hello -p
```

### Flashing the device





### Verify with serial output

You can verify that everything is working by connecting to the device over a serial console using a tool like `screen`:

```
screen /dev/cu.usbserial-1337 115200
```

This is an snippet from the serial console:

```
[00:00:00.000,000] <dbg> golioth_hello.main: Start CoAP-client sample
[00:00:00.000,000] <inf> golioth_hello: Initializing golioth client
[00:00:00.000,000] <inf> golioth_hello: Golioth client initialized
[00:00:00.000,000] <inf> golioth_hello: Sending hello! 0
[00:00:00.000,000] <dbg> golioth_hello.main: Debug info! 1
[00:00:00.000,000] <dbg> golioth_hello.func_1: Log 1: 1
[00:00:00.000,000] <dbg> golioth_hello.func_2: Log 2: 1
[00:00:00.000,000] <wrn> golioth_hello: Warn: 1
[00:00:00.000,000] <err> golioth_hello: Err: 1
[00:00:00.000,000] <inf> golioth_hello: Starting connect
[00:00:00.000,000] <inf> golioth_hello: Client connected!
```

These are just the logs the device has created but they're also being sent to Golioth for later use. The next step will show you how to view logs from the cloud.
