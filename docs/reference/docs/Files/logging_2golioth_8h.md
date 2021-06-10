---
title: include/logging/golioth.h

---

# include/logging/golioth.h

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[log_backend_golioth_init](Modules/group__logging.md#function-log_backend_golioth_init)**(struct [golioth_client](Classes/structgolioth__client.md) * client) |


## Functions Documentation

### function log_backend_golioth_init

```cpp
int log_backend_golioth_init(
    struct golioth_client * client
)
```




## Source code

```cpp
/*
 * Copyright (c) 2021 Golioth, Inc.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#ifndef GOLIOTH_INCLUDE_LOGGING_GOLIOTH_H_
#define GOLIOTH_INCLUDE_LOGGING_GOLIOTH_H_

struct golioth_client;

int log_backend_golioth_init(struct golioth_client *client);

#endif /* GOLIOTH_INCLUDE_LOGGING_GOLIOTH_H_ */
```


-------------------------------

Updated on 10 June 2021 at 18:50:53 UTC
