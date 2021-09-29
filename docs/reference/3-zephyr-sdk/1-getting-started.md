---
title: Getting Started
hide_title: true
---
# Getting Started

## Using with Zephyr RTOS

Most platforms are already supported with mainline [Zephyr
RTOS](https://www.zephyrproject.org/). This repository can be added to
any Zephyr based project as new
[west](https://docs.zephyrproject.org/latest/guides/west/index.html)
module. However, for making things simple, this repository can also
serve as
[west](https://docs.zephyrproject.org/latest/guides/west/index.html)
manifest repo.

### Using Golioth SDK as manifest repository

Execute this command to download this repository together with all
dependencies:

``` {.console}
west init -m git@github.com:golioth/zephyr.git --mr main
west update
west patch
```

### Adding Golioth SDK to existing west project

Alternatively add following entry to `west.yml` file in
`manifest/projects` subtree of existing
[west](https://docs.zephyrproject.org/latest/guides/west/index.html)
based project (e.g. Zephyr RTOS):

``` {.yaml}
# Golioth repository.
- name: golioth
  path: modules/lib/golioth
  revision: main
  url: git@github.com:golioth/zephyr.git
```

and clone all repositories including that one by running:

``` {.console}
west update
```

Follow [Zephyr Getting
Started](https://docs.zephyrproject.org/latest/getting_started/index.html)
for details on how to setup Zephyr based projects.

## Using with nRF Connect SDK

Platforms like [nRF9160
Feather](https://www.jaredwolff.com/store/nrf9160-feather/) require [nRF
Connect
SDK](https://www.nordicsemi.com/Software-and-tools/Software/nRF-Connect-SDK)
to make use of their distinct features, which is cellular network
connectivity. Initialize nRF Connect SDK with following command:

``` {.console}
west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.6.0
```

Add following entry to `west.yml` file in `manifest/projects` subtree:

``` {.yaml}
# Golioth repository.
- name: golioth
  path: modules/lib/golioth
  revision: main
  url: git@github.com:golioth/zephyr.git
```

Now clone all repositories with:

``` {.console}
west update
```

Follow [nRF Connect SDK Getting
Started](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/gs_installing.html)
for details on how to setup nRF Connect SDK based projects.

# Sample applications

-   [Golioth DFU sample](/docs/reference/zephyr/samples/dfu)
-   [Golioth Hello sample](/docs/reference/zephyr/samples/hello)
-   [Golioth Light DB get sample](/docs/reference/zephyr/samples/lightdb/get)
-   [Golioth Light DB observe
    sample](/docs/reference/zephyr/samples/lightdb/observe)
-   [Golioth Light DB set sample](/docs/reference/zephyr/samples/lightdb/set)
-   [Golioth Light DB LED sample](/docs/reference/zephyr/samples/lightdb_led)
-   [Golioth Light DB stream sample](/docs/reference/zephyr/samples/lightdb_stream)
-   [Golioth Logging sample](/docs/reference/zephyr/samples/logging)
-   [Golioth Settings sample](/docs/reference/zephyr/samples/settings)
