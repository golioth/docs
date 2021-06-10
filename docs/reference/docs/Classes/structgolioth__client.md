---
title: golioth_client
summary: Represents a Golioth client instance. 

---

# golioth_client

**Module:** **[Golioth Networking](Modules/group__net.md)**



Represents a Golioth client instance. 
`#include <golioth.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[proto](Classes/structgolioth__client.md#variable-proto)**  |
| const struct sockaddr * | **[server](Classes/structgolioth__client.md#variable-server)**  |
| struct [golioth_unsecure](Classes/structgolioth__unsecure.md) | **[unsecure](Classes/structgolioth__client.md#variable-unsecure)**  |
| struct [golioth_tls](Classes/structgolioth__tls.md) | **[tls](Classes/structgolioth__client.md#variable-tls)**  |
| union golioth_client::@0 | **[@1](Classes/structgolioth__client.md#variable-@1)**  |
| uint8_t * | **[rx_buffer](Classes/structgolioth__client.md#variable-rx_buffer)**  |
| size_t | **[rx_buffer_len](Classes/structgolioth__client.md#variable-rx_buffer_len)**  |
| size_t | **[rx_received](Classes/structgolioth__client.md#variable-rx_received)**  |
| struct coap_packet | **[rx_packet](Classes/structgolioth__client.md#variable-rx_packet)**  |
| struct coap_option | **[rx_options](Classes/structgolioth__client.md#variable-rx_options)**  |
| struct k_mutex | **[lock](Classes/structgolioth__client.md#variable-lock)**  |
| int | **[sock](Classes/structgolioth__client.md#variable-sock)**  |
| void(* | **[on_connect](Classes/structgolioth__client.md#variable-on_connect)**  |
| void(* | **[on_message](Classes/structgolioth__client.md#variable-on_message)**  |

## Public Attributes Documentation

### variable proto

```cpp
int proto;
```


### variable server

```cpp
const struct sockaddr * server;
```


### variable unsecure

```cpp
struct golioth_unsecure unsecure;
```


### variable tls

```cpp
struct golioth_tls tls;
```


### variable @1

```cpp
union golioth_client::@0 @1;
```


### variable rx_buffer

```cpp
uint8_t * rx_buffer;
```


### variable rx_buffer_len

```cpp
size_t rx_buffer_len;
```


### variable rx_received

```cpp
size_t rx_received;
```


### variable rx_packet

```cpp
struct coap_packet rx_packet;
```


### variable rx_options

```cpp
struct coap_option rx_options;
```


### variable lock

```cpp
struct k_mutex lock;
```


### variable sock

```cpp
int sock;
```


### variable on_connect

```cpp
void(* on_connect;
```


### variable on_message

```cpp
void(* on_message;
```


-------------------------------

Updated on 10 June 2021 at 18:50:53 UTC