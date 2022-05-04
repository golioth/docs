---
title: LightDB Get Request
sidebar_position: 2
---
The [Get](https://github.com/golioth/golioth-zephyr-sdk/tree/main/samples/lightdb/get) application demonstrates the retrieval of resources from LightDB with the use of Golioth SDK. The first thing that the example application does is check for the KConfig settings related to using Wi-Fi. If a different connectivity option is used such as cellular, this connection will be made outside of main.c. The Wi-Fi connection method is verified in ```main()``` in all of the samples as zephyr handles this connecivity method differently. Namely, Wi-Fi credentials must be in place in the Kconfig to ensure the success of the ```wifi_connect()``` method.

The next thing that the LightDB application does is prepare the reply handler for CoAP replies. This is completed with the ```coap_replies_clear()``` function. An array of replies is declared near the top of the sample and initialized with the ```coap_replies_clear()``` function. An array size of 1 is sufficient for the sample.

The next two lines are required to initialize and launch the golioth system client. These steps are registering the ```on_message``` handler and starting the golioth system client thread. The golioth system client is described in more detail in a separate doc.

The function ```golioth_on_message()``` is registered in main and is the handler called when the device receives a message. The first thing that the function does is lock the mutex to ensure that concurrent access to coap replies is prevented.

Next the function ```coap_response_received()``` is called. This is a zephyr function. It is passed the CoAP reply as well as a pointer to the reply handler array. It will iterate through the reply array comparing the received message ID and token. If the incoming message ID matches one of the reply handlers, a the reply_callback function will be executed to handle the payload. The sample implements a polling while loop in ```main()``` to monitor for a valid CoAP reply. If there is a reply, the reply handler is called. The reply is then cleared afterward before the check for a new reply is repeated.

The function ```golioth_lightdb_get()``` is found within the first code block guarded by the ```reply``` flag. It is set to true if there are any unused reply slots available in the reply handler array. This is checked with the ```coap_reply_next_unused()``` function. The ```golioth_lightdb_get()``` function must not be executed if there is not a cleared reply slot available.

The reply handler will utilize the zephyr coap function ```coap_packet_get_payload()``` to parse the incoming coap packet. The received message is printed to the console before the reply handler returns.

Descriptions of the ```golioth_lightdb_x``` functions can be found [here](https://github.com/golioth/golioth-zephyr-sdk/blob/main/include/net/golioth.h)


