Native Simulator builds Zephyr as a Linux executable with your host's `gcc`.
See [the POSIX architecture host
requirements](https://docs.zephyrproject.org/4.3.0/boards/native/doc/arch_soc.html#host-system-dependencies).

If you have been following other tutorials, make sure no toolchain override
is left in your environment:

```
export -p | grep "ZEPHYR"
```

If `ZEPHYR_TOOLCHAIN_VARIANT` is set to anything other than `zephyr`, set it
to `zephyr` before building:

```
export ZEPHYR_TOOLCHAIN_VARIANT=zephyr
```

Zephyr then builds Native Simulator targets with the host toolchain.
