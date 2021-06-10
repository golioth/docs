---
title: include/net/golioth.h

---

# include/net/golioth.h

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[golioth_unsecure](Classes/structgolioth__unsecure.md)** <br>UDP (unsecure) credentials (identity only) of Golioth client.  |
| struct | **[golioth_tls](Classes/structgolioth__tls.md)** <br>(D)TLS credentials of Golioth client.  |
| struct | **[golioth_client](Classes/structgolioth__client.md)** <br>Represents a Golioth client instance.  |
| struct | **[golioth_blockwise_observe_ctx](Classes/structgolioth__blockwise__observe__ctx.md)** <br>Represents a Golioth blockwise observe context.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef int(*)(struct golioth_blockwise_observe_ctx *ctx, const uint8_t *data, size_t offset, size_t len, bool last) | **[golioth_blockwise_observe_received_t](Modules/group__net.md#typedef-golioth_blockwise_observe_received_t)** <br>Type of the callback being called when a single block of data is received as part of CoAP observe notification.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[golioth_lock](Modules/group__net.md#function-golioth_lock)**(struct [golioth_client](Classes/structgolioth__client.md) * client) |
| void | **[golioth_unlock](Modules/group__net.md#function-golioth_unlock)**(struct [golioth_client](Classes/structgolioth__client.md) * client) |
| void | **[golioth_init](Modules/group__net.md#function-golioth_init)**(struct [golioth_client](Classes/structgolioth__client.md) * client)<br>Initialize golioth client instance.  |
| int | **[golioth_connect](Modules/group__net.md#function-golioth_connect)**(struct [golioth_client](Classes/structgolioth__client.md) * client)<br>Connect to Golioth.  |
| int | **[golioth_disconnect](Modules/group__net.md#function-golioth_disconnect)**(struct [golioth_client](Classes/structgolioth__client.md) * client)<br>Disconnect from Golioth.  |
| int | **[golioth_set_proto_coap_udp](Modules/group__net.md#function-golioth_set_proto_coap_udp)**(struct [golioth_client](Classes/structgolioth__client.md) * client, uint8_t * identity, size_t identity_len)<br>Set UDP as transport protocol.  |
| int | **[golioth_set_proto_coap_dtls](Modules/group__net.md#function-golioth_set_proto_coap_dtls)**(struct [golioth_client](Classes/structgolioth__client.md) * client, sec_tag_t * sec_tag_list, size_t sec_tag_count)<br>Set DTLS as transport protocol.  |
| int | **[golioth_send_coap](Modules/group__net.md#function-golioth_send_coap)**(struct [golioth_client](Classes/structgolioth__client.md) * client, struct coap_packet * packet)<br>Send CoAP packet to Golioth.  |
| int | **[golioth_send_coap_payload](Modules/group__net.md#function-golioth_send_coap_payload)**(struct [golioth_client](Classes/structgolioth__client.md) * client, struct coap_packet * packet, uint8_t * data, uint16_t data_len)<br>Send CoAP packet with separate payload to Golioth.  |
| int | **[golioth_send_hello](Modules/group__net.md#function-golioth_send_hello)**(struct [golioth_client](Classes/structgolioth__client.md) * client)<br>Send Hello message to Golioth.  |
| int | **[golioth_lightdb_get](Modules/group__net.md#function-golioth_lightdb_get)**(struct [golioth_client](Classes/structgolioth__client.md) * client, const uint8_t * path, enum coap_content_format format, struct coap_reply * reply, coap_reply_t reply_cb)<br>Get value from Golioth's Light DB.  |
| int | **[golioth_lightdb_set](Modules/group__net.md#function-golioth_lightdb_set)**(struct [golioth_client](Classes/structgolioth__client.md) * client, const uint8_t * path, enum coap_content_format format, uint8_t * data, uint16_t data_len)<br>Set value to Golioth's Light DB.  |
| int | **[golioth_lightdb_observe](Modules/group__net.md#function-golioth_lightdb_observe)**(struct [golioth_client](Classes/structgolioth__client.md) * client, const uint8_t * path, enum coap_content_format format, struct coap_reply * reply, coap_reply_t reply_cb)<br>Observe value in Golioth's Light DB.  |
| int | **[golioth_observe_blockwise](Modules/group__net.md#function-golioth_observe_blockwise)**(struct [golioth_client](Classes/structgolioth__client.md) * client, struct [golioth_blockwise_observe_ctx](Classes/structgolioth__blockwise__observe__ctx.md) * ctx, const char * path, struct coap_reply * reply, [golioth_blockwise_observe_received_t](Modules/group__net.md#typedef-golioth_blockwise_observe_received_t) received_cb)<br>Observe resource with blockwise updates.  |
| int | **[golioth_process_rx](Modules/group__net.md#function-golioth_process_rx)**(struct [golioth_client](Classes/structgolioth__client.md) * client)<br>Process incoming data from Golioth.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[GOLIOTH_COAP_MAX_NON_PAYLOAD_LEN](Modules/group__net.md#define-golioth_coap_max_non_payload_len)**  |
|  | **[GOLIOTH_MAX_IDENTITY_LEN](Modules/group__net.md#define-golioth_max_identity_len)**  |
|  | **[GOLIOTH_EMPTY_PACKET_LEN](Modules/group__net.md#define-golioth_empty_packet_len)**  |
|  | **[GOLIOTH_LIGHTDB_PATH](Modules/group__net.md#define-golioth_lightdb_path)**(x)  |
|  | **[GOLIOTH_LIGHTDB_STREAM_PATH](Modules/group__net.md#define-golioth_lightdb_stream_path)**(x)  |

## Types Documentation

### typedef golioth_blockwise_observe_received_t

```cpp
golioth_blockwise_observe_received_t;
```

Type of the callback being called when a single block of data is received as part of CoAP observe notification. 


## Functions Documentation

### function golioth_lock

```cpp
static inline void golioth_lock(
    struct golioth_client * client
)
```


### function golioth_unlock

```cpp
static inline void golioth_unlock(
    struct golioth_client * client
)
```


### function golioth_init

```cpp
void golioth_init(
    struct golioth_client * client
)
```

Initialize golioth client instance. 

**Parameters**: 

  * **client** Client instance 


Initializes internal data of client instance. Must be called before using any other APIs on client instance.


### function golioth_connect

```cpp
int golioth_connect(
    struct golioth_client * client
)
```

Connect to Golioth. 

**Parameters**: 

  * **client** Client instance


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Attempt to connect to Golioth.


### function golioth_disconnect

```cpp
int golioth_disconnect(
    struct golioth_client * client
)
```

Disconnect from Golioth. 

**Parameters**: 

  * **client** Client instance


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Attempt to disconnect from Golioth.


### function golioth_set_proto_coap_udp

```cpp
int golioth_set_proto_coap_udp(
    struct golioth_client * client,
    uint8_t * identity,
    size_t identity_len
)
```

Set UDP as transport protocol. 

**Parameters**: 

  * **client** Client instance 
  * **identity** Client identity


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Set UDP as transport protocol for CoAP packets to Golioth and assignes credentials (identity) to be used.


### function golioth_set_proto_coap_dtls

```cpp
int golioth_set_proto_coap_dtls(
    struct golioth_client * client,
    sec_tag_t * sec_tag_list,
    size_t sec_tag_count
)
```

Set DTLS as transport protocol. 

**Parameters**: 

  * **client** Client instance 
  * **sec_tag_list** Secure tag array (see sec_tag_t and TLS_SEC_TAG_LIST) 
  * **sec_tag_count** Secure tag count (see sec_tag_t and TLS_SEC_TAG_LIST)


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Set DTLS as transport protocol for CoAP packets to Golioth and assignes credentials to be used.


### function golioth_send_coap

```cpp
int golioth_send_coap(
    struct golioth_client * client,
    struct coap_packet * packet
)
```

Send CoAP packet to Golioth. 

**Parameters**: 

  * **client** Client instance 
  * **packet** CoAP packet


**Returns**: 

  * **0** On success 
  * **<0** On failure 


This is low-level API for sending arbitrary CoAP packet to Golioth.


### function golioth_send_coap_payload

```cpp
int golioth_send_coap_payload(
    struct golioth_client * client,
    struct coap_packet * packet,
    uint8_t * data,
    uint16_t data_len
)
```

Send CoAP packet with separate payload to Golioth. 

**Parameters**: 

  * **client** Client instance 
  * **packet** CoAP packet (without payload) 
  * **data** Payload data 
  * **data** Payload length


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Similar to [golioth_send_coap](Modules/group__net.md#function-golioth_send_coap), but appends payload (internally) before sending.


### function golioth_send_hello

```cpp
int golioth_send_hello(
    struct golioth_client * client
)
```

Send Hello message to Golioth. 

**Parameters**: 

  * **client** Client instance


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Sends Hello message to Golioth, which is mostly useful verifying Golioth connection.


### function golioth_lightdb_get

```cpp
int golioth_lightdb_get(
    struct golioth_client * client,
    const uint8_t * path,
    enum coap_content_format format,
    struct coap_reply * reply,
    coap_reply_t reply_cb
)
```

Get value from Golioth's Light DB. 

**Parameters**: 

  * **client** Client instance 
  * **path** Light DB resource path 
  * **format** Requested format of payload 
  * **reply** CoAP reply handler object used for notifying about received value 
  * **reply_cb** Reply handler callback


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Get value from Light DB and initialize passed CoAP reply handler.


### function golioth_lightdb_set

```cpp
int golioth_lightdb_set(
    struct golioth_client * client,
    const uint8_t * path,
    enum coap_content_format format,
    uint8_t * data,
    uint16_t data_len
)
```

Set value to Golioth's Light DB. 

**Parameters**: 

  * **client** Client instance 
  * **path** Light DB resource path 
  * **format** Format of payload 
  * **data** Payload data 
  * **data_len** Payload length


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Set new value to Light DB.


### function golioth_lightdb_observe

```cpp
int golioth_lightdb_observe(
    struct golioth_client * client,
    const uint8_t * path,
    enum coap_content_format format,
    struct coap_reply * reply,
    coap_reply_t reply_cb
)
```

Observe value in Golioth's Light DB. 

**Parameters**: 

  * **client** Client instance 
  * **path** Light DB resource path to be monitored 
  * **format** Requested format of payload 
  * **reply** CoAP reply handler object used for notifying about updated value 
  * **reply_cb** Reply handler callback


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Observe value in Light DB and initialize passed CoAP reply handler.


### function golioth_observe_blockwise

```cpp
int golioth_observe_blockwise(
    struct golioth_client * client,
    struct golioth_blockwise_observe_ctx * ctx,
    const char * path,
    struct coap_reply * reply,
    golioth_blockwise_observe_received_t received_cb
)
```

Observe resource with blockwise updates. 

**Parameters**: 

  * **client** Client instance 
  * **ctx** Blockwise observe context that will be used for handling resouce updates 
  * **path** Resource path to be monitored 
  * **reply** CoAP reply handler object used for notifying about updated value 
  * **received_cb** Received block handler callback


**Returns**: 

  * **0** On success 
  * **<0** On failure 


### function golioth_process_rx

```cpp
int golioth_process_rx(
    struct golioth_client * client
)
```

Process incoming data from Golioth. 

**Parameters**: 

  * **client** Client instance


**Returns**: 

  * **0** On success 
  * **<0** On failure 


Process incoming data on network socket. It does not block when there is no more data, so it is best to use it with zsock_poll.




## Macro Documentation

### define GOLIOTH_COAP_MAX_NON_PAYLOAD_LEN

```cpp
#define GOLIOTH_COAP_MAX_NON_PAYLOAD_LEN 128
```


### define GOLIOTH_MAX_IDENTITY_LEN

```cpp
#define GOLIOTH_MAX_IDENTITY_LEN 32
```


### define GOLIOTH_EMPTY_PACKET_LEN

```cpp
#define GOLIOTH_EMPTY_PACKET_LEN (16 + [GOLIOTH_MAX_IDENTITY_LEN](Modules/group__net.md#define-golioth_max_identity_len))
```


### define GOLIOTH_LIGHTDB_PATH

```cpp
#define GOLIOTH_LIGHTDB_PATH(
    x
)
".d/" x
```


### define GOLIOTH_LIGHTDB_STREAM_PATH

```cpp
#define GOLIOTH_LIGHTDB_STREAM_PATH(
    x
)
".s/" x
```


## Source code

```cpp
/*
 * Copyright (c) 2021 Golioth, Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#ifndef GOLIOTH_INCLUDE_NET_GOLIOTH_H_
#define GOLIOTH_INCLUDE_NET_GOLIOTH_H_

#include <kernel.h>
#include <net/coap.h>
#include <net/tls_credentials.h>
#include <stdint.h>

#define GOLIOTH_COAP_MAX_NON_PAYLOAD_LEN    128

#define GOLIOTH_MAX_IDENTITY_LEN    32
#define GOLIOTH_EMPTY_PACKET_LEN    (16 + GOLIOTH_MAX_IDENTITY_LEN)

#define GOLIOTH_LIGHTDB_PATH(x)     ".d/" x
#define GOLIOTH_LIGHTDB_STREAM_PATH(x)  ".s/" x

struct golioth_unsecure {
    const uint8_t *identity;
    size_t identity_len;
};

struct golioth_tls {
    sec_tag_t *sec_tag_list;
    size_t sec_tag_count;
};

struct golioth_client {
    int proto;
    const struct sockaddr *server;

    union {
        struct golioth_unsecure unsecure;
        struct golioth_tls tls;
    };

    uint8_t *rx_buffer;
    size_t rx_buffer_len;
    size_t rx_received;

    struct coap_packet rx_packet;
    struct coap_option rx_options[CONFIG_GOLIOTH_COAP_MAX_OPTIONS];

    struct k_mutex lock;
    int sock;

    void (*on_connect)(struct golioth_client *client);
    void (*on_message)(struct golioth_client *client,
               struct coap_packet *rx);
};

struct golioth_blockwise_observe_ctx;

typedef int (*golioth_blockwise_observe_received_t)(struct golioth_blockwise_observe_ctx *ctx,
                            const uint8_t *data,
                            size_t offset, size_t len,
                            bool last);

struct golioth_blockwise_observe_ctx {
    struct coap_block_context block_ctx;
    struct golioth_client *client;
    const char *path;
    golioth_blockwise_observe_received_t received_cb;
};

static inline void golioth_lock(struct golioth_client *client)
{
    k_mutex_lock(&client->lock, K_FOREVER);
}

static inline void golioth_unlock(struct golioth_client *client)
{
    k_mutex_unlock(&client->lock);
}

void golioth_init(struct golioth_client *client);

int golioth_connect(struct golioth_client *client);

int golioth_disconnect(struct golioth_client *client);

int golioth_set_proto_coap_udp(struct golioth_client *client,
                   uint8_t *identity, size_t identity_len);

int golioth_set_proto_coap_dtls(struct golioth_client *client,
                sec_tag_t *sec_tag_list,
                size_t sec_tag_count);

int golioth_send_coap(struct golioth_client *client,
              struct coap_packet *packet);

int golioth_send_coap_payload(struct golioth_client *client,
                  struct coap_packet *packet,
                  uint8_t *data, uint16_t data_len);

int golioth_send_hello(struct golioth_client *client);

int golioth_lightdb_get(struct golioth_client *client, const uint8_t *path,
            enum coap_content_format format,
            struct coap_reply *reply, coap_reply_t reply_cb);

int golioth_lightdb_set(struct golioth_client *client, const uint8_t *path,
            enum coap_content_format format,
            uint8_t *data, uint16_t data_len);

int golioth_lightdb_observe(struct golioth_client *client, const uint8_t *path,
                enum coap_content_format format,
                struct coap_reply *reply, coap_reply_t reply_cb);

int golioth_observe_blockwise(struct golioth_client *client,
                  struct golioth_blockwise_observe_ctx *ctx,
                  const char *path, struct coap_reply *reply,
                  golioth_blockwise_observe_received_t received_cb);

int golioth_process_rx(struct golioth_client *client);

#endif /* GOLIOTH_INCLUDE_NET_GOLIOTH_H_ */
```


-------------------------------

Updated on 10 June 2021 at 18:50:53 UTC
