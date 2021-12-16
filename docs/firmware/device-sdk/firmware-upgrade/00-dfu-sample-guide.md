---
title: DFU Sample Guide
sidebar_position: 2
---

The Device Firmware Update service includes several helper functions and data structures.  

### Header File fw.h

The first discussed are found within fw.h. The enum ```golioth_fw_state{}``` is used to register and indicate the current state of the DFU service process.  The struct ```golioth_dfu_result{}``` indicates whether the process was successful or that an error has occurred. The ```golioth_fw_download_ctx``` struct contains the context of the firmware download. The inner struct ```golioth_blockwise_download_ctx``` contains CoAP-specific blockwise transfer elements. The URI defines the artifact and version of artifact being downloaded. In the example case of downloading multiple artifacts for perhaps updating both a cellular modem as well as the host MCU firmware, there would be an instance of ```golioth_fw_download_ctx``` for each firmware download artifact.

After requesting a specific version of firmware from the Golioth server, a CBOR-encoded payload is received and parsed with the ```golioth_fw_desired_parse()``` function. The ```golioth_fw_observe_desired()``` function works similarly to the observe functions found in the LightDB observe samples.  This function creates a subscription to the state of the firmware in the cloud in order to trigger an update if the active firmware is changed.  The ```golioth_fw_download()``` is a helper function that makes use of the ```golioth_client``` object to request a firmware download from Golioth.  The last function in fw.h is ```golioth_fw_report_state```.  It is used to commmunicate the application state to Golioth server.  The reported state is used to govern firmware transfers and report to Golioth server when transfers are complete.

### Logging

The ```log_ctrl.h``` header is included to make use of the log functions which connect the Golioth logging backend to the Zephyr logging system. ```LOG_PANIC()``` is used to synchronize the log messages and ensure that all logs are received by Golioth server prior to exiting the function containing logging calls.  The ```LOG_PANIC()``` call will ensure that log calls in all threads are processed.  In the case of the sample code this is performed prior to calling a system reboot.

### Writing to Flash

The ```flash.h``` is a helper included specifically for the dfu application. The flash helper functions govern things like writing to flash and confirming contents of flash. 

Most of the flash helper functions provide an abstraction for testing with the QEMU platform. If the project is configured to use a platform utilizing MCUboot, then most of the functions present in this file will not be used as indicated by the ```#ifdef CONFIG_BOOTLOADER_MCUBOOT``` section of code.

### Sample main.c Walkthrough

In the ```main.c``` file the first thing to be instantiated is the ```golioth_client``` struct to enable the Golioth system client.  Next the ```coap_reply``` struct is instantiated with memory allocated for more than one reply.  This larger storage reservation is unique to this sample as the other samples reserve space for only one coap reply.  There are currently two replies in use.  One is for receiving the blockwise transfer, and the other is used for receiving the desired artifact version message.

The ```dfu_ctx{}``` struct contains the both the firmware download context :```golioth_fw_download_ctx``` as well as the ```flash_img_context```. The ```flash_img_context``` is zephyr-specific and allows the application to track how many bytes have been written to flash.

The ```data_received()``` function receives each block of the firmware update. For each block of data a pointer is passed into this function for the blockwise transfer context struct, a pointer to the data itself, a sizetype of offset of the data, a sizetype of the length of the data, and a boolean to indicate if the current block of data is the last.  This structure is determined by the CoAP protocol and transfer structure.  This handler function structure can be used in context of custom application development.

The ```uri_strip_leading_slash()``` function strips the leading slash from the URI to prepare it for consumption by the CoAP library.

The ```golioth_desired_update()``` function is called when a new update request is received.  This function will receive the CBOR-formatted payload over CoAP and parse the payload.  The CBOR encoding is specified in ```fw.c``` This function will then proceed to strip the leading slash from the URI, report the current state of the download process to Golioth server, and finally execute the next firmware block download using the updated URI formatted for CoAP.

The ```golioth_on_connect``` is common to many of the Golioth samples.  The portion of the function that is unique to this sample is the ```golioth_fw_observe_desired()``` which uses the LightDB observe functionality to monitor the state of the firmware artifact currently in Golioth server.

The ```golioth_on_message()``` function is a helper function to handle CoAP replies.

### Application instantiation in ```main()```

The ```main()``` function contains the setup for the DFU process.  The first if evaluation checks to see if the current boot image is confirmed.  This means that after the latest reboot, the firwmare has been downloaded and verified successfully or this is the first bootup.  Next is the Wi-Fi helper that will be called if Wi-Fi connectivity is being used. Finally the ```client->on_connect``` and ```client->on_message``` objects are populated with the function pointers that will launch and manage the continuous DFU update and monitoring process.
