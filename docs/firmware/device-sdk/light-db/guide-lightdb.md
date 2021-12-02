---
title: LightDB 'Get' Application Walkthrough
sidebar_position: 2
---
This application demonstrates the retrieval of objects from LightDB with the use of Golioth SDK. The first thing that the example application does is check for the KConfig settings related to using Wi-Fi.  If a different connectivity option is used such as cellular, this connection will be made outside of main.c.  The Wi-Fi connection method is verified in ```main()``` in all of the samples as zephyr handles this connecivity method differently. Namely, Wi-Fi credentials must be in place in the Kconfig to ensure the success of the ```wifi_connect()``` method.

The next thing that the LightDB application does is prepare the reply handler for CoAP replies.  This is completed with the ```coap_replies_clear()``` function.  An array of replies is declared near the top of the sample and initialized with the ```coap_replies_clear()``` function. An array size of 1 is sufficient for the sample.

The next two lines are required to initialize and launch the golioth system client.  These steps are registering the ```on_message``` handler and starting the golioth system client thread.  The golioth system client is described in more detail in a separate doc.

The function ```golioth_on_message()``` is registered in main and is the handler called when the device receives a message.  The first thing that the function does is lock the mutex to ensure that concurrent access to coap replies is prevented.

Next the function ```coap_response_received()``` is called. This is a zephyr function. It is passed the CoAP reply as well as a pointer to the reply handler array.  It will iterate through the reply array comparing the received message ID and token.  If the incoming message ID matches one of the reply handlers, a the reply_callback function will be executed to handle the payload. The sample implements a polling while loop in ```main()``` to monitor for a valid CoAP reply. If there is a reply, the reply handler is called.  The reply is then cleared afterward before the check for a new reply is repeated.

The reply handler will utilize the zephyr coap function ```coap_packet_get_payload()``` to parse the incoming coap packet. The received message is printed to the console before the reply handler returns.


