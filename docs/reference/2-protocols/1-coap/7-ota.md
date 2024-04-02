---
id: ota
title: Over The Air (OTA) Updates
---

[Over The Air (OTA) Updates Service](/device-management/ota) definitions over CoAP.

How to use guides:

- [OTA Overview](/device-management/ota)

## Interface

| Method      | Description                                                                                                       | Path                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- |
| GET/Observe | Get desired release version in Manifest Format                                                                    | `/.u/desired`               |
| GET/Observe | Get desired release version in [SUIT Manifest](https://datatracker.ietf.org/doc/draft-ietf-suit-manifest/) Format | `/.u/desired/suit`          |
| GET         | Download binary of a given component and version                                                                  | `/.u/c/{package}@{version}` |
| POST/PUT    | Report firmware state for a given package                                                                         | `/.u/c/{package}`           |

:::note
The desired release version returned in the manifest will be the most recently created release that is enabled.
:::

## Release Manifest Format

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

When data is CBOR encoded, the keys are sent as numbers to reduce the size of the message.

| JSON Key               | CBOR Number Key | Description                                              |
| ---------------------- | --------------- | -------------------------------------------------------- |
| `sequenceNumber`       | 1               | Release Sequence Number                                  |
| `hash`                 | 2               | Release SUIT Manifest SHA256 Hash                        |
| `components`           | 3               | List of packages/components that are part of the release |
| `components.$.package` | 1               | Artifact Package name                                    |
| `components.$.version` | 2               | Artifact Version                                         |
| `components.$.hash`    | 3               | SHA256 of Artifact Binary                                |
| `components.$.size`    | 4               | Artifact Binary Size in Bytes                            |
| `components.$.uri`     | 5               | Relative URI to download binary                          |
| `components.$.type`    | 6               | Binary Detected Type - "mcuboot" or "default"            |

## Firmware/Artifact State Reporting parameters and attributes

A number of parameters are available when the device reports its firmware state
to the Golioth server. Here is an example payload that indicates the device is
currently downloading an update of the `main` package; going from the current
`version` to the `target` version:

```json
{
  "state": 3,
  "reason": 0,
  "package": "main",
  "version": "1.2.3",
  "target": "1.2.4"
}
```

| Attribute          | Description                                                                     | Default         |
| ------------------ | ------------------------------------------------------------------------------- | --------------- |
| `state` or `s`     | Firmware/Artifact State [See Valid Firmware States](#firmware-states)           | 0 - Idle        |
| `reason` or `r`    | Reason for Firmware/Artifact Report [See Valid Reason](#firmware-report-reason) | 0 - ready state |
| `package` or `pkg` | Firmware/Artifact package name                                                  | main            |
| `version` or `v`   | Running firmware/artifact version                                               |                 |
| `target` or `t`    | Target firmware/artifact version                                                |                 |

### Firmware States

| Code | Description |
| ---- | ----------- |
| 0    | Idle        |
| 1    | Downloading |
| 2    | Downloaded  |
| 3    | Updated     |

- The list of `state` codes, can be viewed in the
  [golioth_ota_state](https://firmware-sdk-docs.golioth.io/group__golioth__ota.html)
  enum on the Golioth Firmware SDK doxygen reference.

### Firmware Report Reason

- For a full list of `state` codes, please see the
  [golioth_ota_reason](https://firmware-sdk-docs.golioth.io/group__golioth__ota.html)
  enum on the Golioth Firmware SDK doxygen reference.
