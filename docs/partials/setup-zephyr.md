### Install `west` and the Zephyr SDK

Start by installing dependencies with `brew`:

```
brew install cmake ninja gperf python3 ccache qemu dtc
```

Use `pip3` to install `west`:

```
pip3 install west
```

With `west` installed, grab the Device SDK:

```
cd ~
west init -m git@github.com:golioth/zephyr.git --mr main ~/zephyrproject
cd zephyrproject/
west update
west patch
```

:::note
The patch step is temporary until the Github repo is made public
:::

Tell `west` to automatically configure CMake:

```
west zephyr-export
```

Lastly, install the remaining dependencies:

```
pip3 install -r ~/zephyrproject/zephyr/scripts/requirements.txt
```
