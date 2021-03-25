---
id: installing
title: Installing
---

### Download Pre-built CLIs

You can download the latest tools here. Binaries are available for Linux, macOS and Windows.

| Operating System | Download link                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| macOS            | [Download for macOS](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_macos_64bit.tar.gz)           |
| Linux 32bit      | [Download for Linux 32bit](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_linux_32bit.tar.gz)     |
| Linux 64bit      | [Download for Linux 64bit](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_linux_64bit.tar.gz)     |
| ARM Linux 64bit  | [Download for ARM Linux 64bit](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_linux_arm64.tar.gz) |
| Windows 32bit    | [Download for Windows 32bit](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_windows_64bit.tar.gz) |
| Windows 64bit    | [Download for Windows 64bit](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/golioth_latest_windows_64bit.tar.gz) |
| Checksums        | [checksums.txt](https://storage.googleapis.com/golioth-cli-releases/golioth/latest/checksums.txt)                                    |

Each zip file contains [goliothctl](/docs/reference/goliothctl/goliothctl) and [gurl](/docs/reference/gurl/gurl) command line tools.

### Building from source (Maintainers Only)

You need [Go](https://golang.org) installed on your system. We recommend using Go 1.15 to build from source.

Clone the [golioth](https://github.com/golioth/golioth) repository from Github.

Them run the command `make install` on the root folder to install the `goliothd`, [goliothctl](/docs/reference/goliothctl/goliothctl) and [gurl](/docs/reference/gurl/gurl) command line tools.
