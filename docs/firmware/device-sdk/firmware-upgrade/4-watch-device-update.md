---
title: Monitor A Device Update
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


If the procedure has been followed to create the release candidate and the 'old' firmware is currently running on the target board, then the DFU process should be started in Zephyr. This is what should be visible on serial console:
```
[00:00:06.483,764] <dbg> golioth_dfu: Desired
                                      a3 01 1a 61 7a be 80 02  78 40 61 66 62 66 38 34 |...az... x@afbf84
                                      33 31 33 61 36 66 65 30  66 37 63 30 35 35 39 37 |313a6fe0 f7c05597
                                      62 36 31 37 32 38 32 30  64 31 37 65 30 64 30 39 |b6172820 d17e0d09
                                      37 63 31 32 34 35 36 31  64 34 30 34 65 38 32 34 |7c124561 d404e824
                                      37 39 32 30 64 38 66 30  39 33 03 81 a6 01 64 6d |7920d8f0 93....dm
                                      61 69 6e 02 65 31 2e 32  2e 33 03 78 40 35 30 34 |ain.e1.2 .3.x@504
                                      39 36 32 37 30 38 31 39  33 32 39 37 66 36 38 66 |96270819 3297f68f
                                      62 61 34 61 33 31 39 64  65 65 66 61 34 39 61 37 |ba4a319d eefa49a7
                                      35 31 33 32 39 30 31 31  35 36 63 32 37 31 63 62 |51329011 56c271cb
                                      31 34 65 37 39 66 63 61  38 30 33 64 66 04 1a 00 |14e79fca 803df...
                                      09 b0 a0 05 70 2f 2e 75  2f 63 2f 6d 61 69 6e 40 |....p/.u /c/main@
                                      31 2e 32 2e 33 06 67 6d  63 75 62 6f 6f 74       |1.2.3.gm cuboot
[00:00:06.484,130] <inf> golioth: Manifest sequence-number: 1635434112
[00:00:06.637,725] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 0
[00:00:06.637,847] <inf> mcuboot_util: Swap type: none
[00:00:06.637,847] <inf> golioth_dfu: swap type: none
[00:00:06.863,555] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 1024
[00:00:07.000,457] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 2048
[00:00:07.137,786] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 3072
...
[00:03:44.913,208] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 218112
[00:03:44.956,146] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 219136
[00:03:44.995,086] <dbg> golioth_dfu.data_received: Received 1024 bytes at offset 220160
[00:03:45.030,334] <dbg> golioth_dfu.data_received: Received 768 bytes at offset 221184 (last)
[00:03:45.210,205] <inf> golioth_dfu: Requesting upgrade
[00:03:45.210,540] <inf> golioth_dfu: Rebooting in 1 second(s)

```
At this point mcuboot swaps the first application slot (containing old firmware) with the second application slot (containing new firmware). After few seconds (or a minute depending on firmware size) new firmware will be booted from first application slot and following messages should appear on serial console:

```

*** Booting Zephyr OS build zephyr-v2.5.0-2205-g3276779c5a88  ***
[00:00:00.008,850] <dbg> golioth_dfu.main: Start DFU sample
[00:00:00.009,155] <inf> golioth_dfu: Initializing golioth client
[00:00:00.009,246] <inf> golioth_dfu: Golioth client initialized
[00:00:00.009,307] <inf> golioth_dfu: Starting connect

```
The application creates a shell command accessible via the serial console.  Execute the command:
```mcuboot```
to confirm that new firmware is running from primary area (first application slot):

```
uart:~$ mcuboot
swap type: none
confirmed: 1

primary area (1):
  version: 1.2.3+0
  image size: 221104
  image hash: 40710f0bd8171d7614b13da4821da57066f4431e4f3ebb473de9e95f6467ae65
  magic: good
  swap type: test
  copy done: set
  image ok: set

secondary area (2):
  version: 0.0.0+0
  image size: 221104
  image hash: f48973eed40a9d30795df7121183e7a828e9b89aa5ee84f2db1318f7cf51be0b
  magic: unset
  swap type: none
  copy done: unset
  image ok: unset
``` 


