---
id: ota
title: Over The Air (OTA) Updates
---

[Over The Air (OTA) Updates Service](/cloud/services/ota) definitions over MQTT.

How to use guides:

- [OTA Overview](/cloud/services/ota)

### Interface

| Method    | Description                                      | Path                     |
| --------- | ------------------------------------------------ | ------------------------ |
| Subscribe | Get desired release version in Manifest Format   | .u/desired               |
| Subscribe | Download binary of a given component and version | .u/c/{package}@{version} |
| Publish   | Report firmware state for a given package        | .u/c/{package}           |

### Release Manifest Format

Here is an example of a release manifest in JSON format:

```
{
  "sequenceNumber":1631741642,
  "hash":"25e73431ac4a1a09392d51c8af14b611defdd877e8021803af4414ad470ad6fb",
  "components":[
    {
      "package":"main",
      "version":"1.0.0",
      "hash":"feb982c3fbec352441caddaa85bd5c69ef5feadb5dfc1f57171e88e070771241",
      "size":538208,
      "uri":"/.u/c/main@1.0.0",
      "type": "mcuboot"
    }
  ]
}
```

### Firmware/Artifact State Reporting parameters and attributes

These are the query/body parameters that can be sent when reporting a given firmware/artifact state. When the device reports states for it's components, we will use these parameters to determine the current state of the device in regards to DFU and also save the historical information on our Device Logs feature, so you can query information for your fleet of device. Data is saved on the `golioth_dfu` module.

| Attribute          | Description                                                                     | Default         |
| ------------------ | ------------------------------------------------------------------------------- | --------------- |
| `state` or `s`     | Firmware/Artifact State [See Valid Firmware States](#firmware-states)           | 0 - Idle        |
| `reason` or `r`    | Reason for Firmware/Artifact Report [See Valid Reason](#firmware-report-reason) | 0 - ready state |
| `package` or `pkg` | Firmware/Artifact package name                                                  | main            |
| `version` or `v`   | Running firmware/artifact version                                               |                 |
| `target` or `t`    | Target firmware/artifact version                                                |                 |

#### Firmware States

| Code | Description |
| ---- | ----------- |
| 0    | Idle        |
| 1    | Downloading |
| 2    | Downloaded  |
| 3    | Updated     |

#### Firmware Report Reason

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 0    | ready state                                          |
| 1    | firmware updated successfully                        |
| 2    | not enough flash memory for the new firmware package |
| 3    | out of RAM during downloading process                |
| 4    | connection lost during downloading process           |
| 5    | integrity check failure for new downloaded package   |
| 6    | unsupported package type                             |
| 7    | invalid URI                                          |
| 8    | firmware update failed                               |
| 9    | unsupported protocol                                 |
