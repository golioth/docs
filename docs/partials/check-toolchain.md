
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you've been using some of the other tutorials on this site, you may have been changing the toolchain, specifically if you used the ESP32. Type the following:

```
export -p | grep "ZEPHYR"
```

This should list the following variable
* `ZEPHYR_TOOLCHAIN_VARIANT`

If these are set to Espressif, change them to use the default zephyr toolchain (part of the SDK you installed above)

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Mac OS', value: 'mac'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

On Linux we compile (non-Espressif) Zephyr using the Zephyr SDK. Do you have that installed? If not, [go check out this page on the Zephyr getting started docs](https://docs.zephyrproject.org/latest/getting_started/index.html#install-a-toolchain). 

```
export ZEPHYR_TOOLCHAIN_VARIANT=zephyr
export ZEPHYR_SDK_INSTALL_DIR=~/zephyr-sdk-x.y.z
```
:::caution
Be sure to fill in the sdk name that matches your Zephyr SDK install!
:::

</TabItem>


<TabItem value="mac">

As stated in the [Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/getting_started/index.html), the toolchains are more manual for Mac and Windows

For ARM based components, you will need to [install the GNU ARM Embedded toolchain somewhere on your machine](https://docs.zephyrproject.org/latest/getting_started/toolchain_3rd_party_x_compilers.html#gnu-arm-embedded) and then point to it. It will likely look something like this:

```
export ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb
export GNUARMEMB_TOOLCHAIN_PATH=/home/you/Downloads/gnu_arm_embedded
```

</TabItem>

<TabItem value="windows">

As stated in the [Zephyr Getting Started Guide](https://docs.zephyrproject.org/latest/getting_started/index.html), the toolchains are more manual for Mac and Windows

For ARM based components, you will need to [install the GNU ARM Embedded toolchain somewhere on your machine](https://docs.zephyrproject.org/latest/getting_started/toolchain_3rd_party_x_compilers.html#gnu-arm-embedded) (the recommendation is at c:\ for windows, hello 1995) and then point to it. It will likely look something like this:

```
export ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb
export GNUARMEMB_TOOLCHAIN_PATH=C:\gnu_arm_embedded
```

</TabItem>

</Tabs>