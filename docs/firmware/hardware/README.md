---
id: overview
title: Hardware
hide_title: false
slug: /firmware/hardware
---

The Hardware section includes a catalog of supported boards for the Golioth
platform. Additionally, there are quickstart guides and recommended boards for
common MCUs, such as the ESP32 and nRF91.

## Board Support Tiers

Golioth has three levels of board support: Continuously Verified, Verified,
and Unverified.

### Continuously Verified Boards

A continuously verified board:

* is highly recommended for new users that want to try out Golioth.
* is tested on every release of the [Golioth Zephyr SDK](https://github.com/golioth/golioth-zephyr-sdk).
* is regularly tested and used by the Golioth development team.
* has first class support and maintenance from Golioth. If you encounter a problem
    with one of these boards, you can reach out to us on [the Golioth Forum](https://forum.golioth.io) or
    [file a bug report](https://github.com/golioth/golioth-zephyr-sdk/issues),
    and we will address it quickly.

The set of boards in this category covers commonly used
connectivity options including WiFi, cellular, and Thread.
Additionally, these boards cover common MCUs, such as the ESP32 and nRF91.

### Verified Boards

A verified board:

* is tested and confirmed to work with Golioth.
* is tested less frequently than continuously verified boards. This means it
    was tested on an older version of the Golioth Zephyr SDK, but may not
    have been tested on the most recent commits.
* is supported and maintained by the Golioth development team. You can reach
    out to us on [the Golioth Forum](https://forum.golioth.io) for help and troubleshooting.

Boards in this category cover a wider range of MCUs and peripherals.

### Unverified Boards

An unverified board:

* has not yet been verified to work with Golioth.

It's very possible that the board may work well with Golioth, but it has not
yet been tested by the Golioth team.

Check if the board is in [Zephyr's list of supported boards](https://docs.zephyrproject.org/latest/boards/index.html).
If it's in the list, there's a good chance it will work with Golioth with
low development effort.

If you're interested in using a board from this category, you can reach out to us on
[the Golioth Forum](https://forum.golioth.io), and we can help you with next steps to
get the board connected to Golioth.
