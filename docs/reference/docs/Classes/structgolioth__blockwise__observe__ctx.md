---
title: golioth_blockwise_observe_ctx
summary: Represents a Golioth blockwise observe context. 

---

# golioth_blockwise_observe_ctx

**Module:** **[Golioth Networking](Modules/group__net.md)**



Represents a Golioth blockwise observe context. 
`#include <golioth.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct coap_block_context | **[block_ctx](Classes/structgolioth__blockwise__observe__ctx.md#variable-block_ctx)**  |
| struct [golioth_client](Classes/structgolioth__client.md) * | **[client](Classes/structgolioth__blockwise__observe__ctx.md#variable-client)**  |
| const char * | **[path](Classes/structgolioth__blockwise__observe__ctx.md#variable-path)**  |
| [golioth_blockwise_observe_received_t](Modules/group__net.md#typedef-golioth_blockwise_observe_received_t) | **[received_cb](Classes/structgolioth__blockwise__observe__ctx.md#variable-received_cb)**  |

## Public Attributes Documentation

### variable block_ctx

```cpp
struct coap_block_context block_ctx;
```


### variable client

```cpp
struct golioth_client * client;
```


### variable path

```cpp
const char * path;
```


### variable received_cb

```cpp
golioth_blockwise_observe_received_t received_cb;
```


-------------------------------

Updated on 10 June 2021 at 18:50:53 UTC