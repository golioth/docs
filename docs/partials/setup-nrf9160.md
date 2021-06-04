
We recommend going to https://docs.jaredwolff.com/nrf9160-getting-started.html for information about getting started with the nRF9160 Feather.

However, the following instructions should work fine, if you don't need the full nRF SDK.

#### Install the gnuarmemb toolchain

If you don't already have a reasonably up-to-date copy of the gnuarmemb toolchain, download it from [the ARM website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm) and extract it to somewhere static.

#### Set up environment variables

For `west` to be able to find the toolchain, you'll need to set two environment variables.

```sh
export ZEPHYR_TOOLCHAIN_VARIANT="gnuarmemb"
export GNUARMEMB_TOOLCHAIN_PATH="<location of the extracted toolchain>"
```

#### Install mcumgr

To install mcumgr (or rather newtmgr), follow the Bootloader and Newtmgr instructions on jaredwolff's website: https://docs.jaredwolff.com/nrf9160-programming-and-debugging.html#binary-download.
