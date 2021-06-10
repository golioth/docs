---
title: include/net/golioth/system_client.h

---

# include/net/golioth/system_client.h

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[golioth_system_client_start](Modules/group__system__client.md#function-golioth_system_client_start)**(void )<br>Start Golioth system client.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| struct [golioth_client](Classes/structgolioth__client.md) | **[_golioth_system_client](Files/system__client_8h.md#variable-_golioth_system_client)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[GOLIOTH_SYSTEM_CLIENT_GET](Modules/group__system__client.md#define-golioth_system_client_get)**() <br>Get pointer to Golioth system client instance.  |


## Functions Documentation

### function golioth_system_client_start

```cpp
void golioth_system_client_start(
    void 
)
```

Start Golioth system client. 


## Attributes Documentation

### variable _golioth_system_client

```cpp
struct golioth_client _golioth_system_client;
```



## Macro Documentation

### define GOLIOTH_SYSTEM_CLIENT_GET

```cpp
#define GOLIOTH_SYSTEM_CLIENT_GET(
    
)
(&[_golioth_system_client](Files/system__client_8h.md#variable-_golioth_system_client))
```

Get pointer to Golioth system client instance. 

## Source code

```cpp
/*
 * Copyright (c) 2021 Golioth, Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#ifndef GOLIOTH_INCLUDE_NET_GOLIOTH_SYSTEM_CLIENT_H_
#define GOLIOTH_INCLUDE_NET_GOLIOTH_SYSTEM_CLIENT_H_

#include <net/golioth.h>

extern struct golioth_client _golioth_system_client;

void golioth_system_client_start(void);

#define GOLIOTH_SYSTEM_CLIENT_GET() (&_golioth_system_client)

#endif /* GOLIOTH_INCLUDE_NET_GOLIOTH_SYSTEM_CLIENT_H_ */
```


-------------------------------

Updated on 10 June 2021 at 18:50:53 UTC
