---
title: Guide
sidebar_position: 2
---
The Logging example demonstrates the integration of the Golioth SDK with the zephyr logging subsystem.  With the proper configuration log statements can be printed to serial as well passed along to Golioth's logging service.

The sample contains elements common to most Golioth samples.  These are the Wi-Fi configuration verification and connection, and the ```golioth_system_client_start()```. These are described in more detail in the [LightDB Get Request](https://3000-azure-hoverfly-zxovpapf.ws-us21.gitpod.io/firmware/device-sdk/light-db/guide-lightdb-get) document.  After that there is a while loop that contains examples of various log level logging methods as well as demonstrating calling functions with logging methods contained therein.  The two keys to understanding this sample are the [zephyr logging subsystem](https://docs.zephyrproject.org/latest/reference/logging/index.html) and the configurations found in the project which enable the logging subsystem messages to be duplicated to Golioth cloud.

The configurations found in the prj.conf file of the logging sample that should be included in the user's application as a starting point. The configurations ```CONFIG_LOG_BACKEND_GOLIOTH=y``` and ```CONFIG_LOG_PROCESS_THREAD_STACK_SIZE=2048``` specifically enable backend logging support.
