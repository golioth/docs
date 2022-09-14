---
id: flash-sample
title: Flashing with samples
---

Now we're getting to the good stuff - working with hardware! The sample project provided will demonstrate a device securely communicating with Golioth and will also introduce the first device service for _logging_.

The sample we'll be using is called `hello`, which logs a "hello" message using the _Logging Device Service_. Here's a snippet of the `main()` function:

```cpp
void main(void)
{
	int counter = 0;
	int err;

	LOG_DBG("Start Hello sample");

	if (IS_ENABLED(CONFIG_GOLIOTH_SAMPLES_COMMON)) {
		net_connect();
	}

	client->on_connect = golioth_on_connect;
	client->on_message = golioth_on_message;
	golioth_system_client_start();

	k_sem_take(&connected, K_FOREVER);

	while (true) {
		LOG_INF("Sending hello! %d", counter);

		err = golioth_send_hello(client);
		if (err) {
			LOG_WRN("Failed to send hello!");
		}
		++counter;
		k_sleep(K_SECONDS(5));
	}
}
```

If you're familiar with Zephyr you may recognized the `LOG_*` functions. That's because Golioth tries to use Zephyr APIs whenever it can. In this instance, the Logging Device Service is a cloud-enabled backend for Zephyr's [logging](https://docs.zephyrproject.org/latest/reference/logging/index.html) library. In this way, Golioth can reuse well-tested libraries, reduce code size through shared code, and feel idiomatic to developers who are comfortable with Zephyr.

### Building `hello`

Samples can be found in the Zephyr SDK in the folder `modules/lib/golioth/samples`. We recommend running the commands below from the `modules/lib/golioth` folder.

```
cd ~/golioth-zephyr-workspace/modules/lib/golioth
```

Zephyr uses [Kconfig](https://docs.zephyrproject.org/latest/guides/kconfig/index.html) to manage build settings at scale. Kconfig values can be set a number of ways but for this example we'll take a simple route by modifying `prj.conf`.

Open `samples/hello/prj.conf` in your editor of choice and add these fields:

```
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK_ID="DEVICE_CRED_ID"
CONFIG_GOLIOTH_SYSTEM_CLIENT_PSK="DEVICE_PSK"
```

Set the PSK & PSK ID to match what was used during the provisioning step.

After saving, build the sample with the new settings applied.

```
west build -b mimxrt1060_evkb samples/hello -p
```

### Flashing the device

Flashing is a simple `west` command away.

```
west flash
```

:::tip
Remember to connect your J-Link programmer and power the board via USB, or you can use the on-board debug circuit with J-Link firmware. Find details for both methods in [NXP's programming guide](https://community.nxp.com/t5/i-MX-RT-Knowledge-Base/Using-J-Link-with-MIMXRT1060-EVKB/ta-p/1452717).
:::

### Verify with serial output

You can verify that everything is working by connecting to the device over a serial console using a tool like `screen`:

```
screen /dev/ttyACM0 115200
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
