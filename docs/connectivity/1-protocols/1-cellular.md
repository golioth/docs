---
title: Cellular
---

Cellular communication typically refers to a set of wireless protocols that
support long range connectivity via a large network of base stations, each of
which services a geographic "cell". In the context of the Internet of Things
(IoT), the most common cellular protocols include low-power wide-area network
(LPWAN) options, such as [LTE-M](https://en.wikipedia.org/wiki/LTE-M) and
[NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), or higher throughput
options, such as LTE Cat 1bis or 5G Reduced Capability (RedCap).

Cellular connectivity is ideal for devices that are not stationary, as devices
can move seamlessly from one base station to another while in motion,
maintaining a consistent connection to the Golioth platform. IoT devices that
leverage cellular connectivity typically rely on an onboard cellular chipset, or
a more complete cellular module. In order to authenticate to cellular carriers,
a [subscriber identity module (SIM)](https://en.wikipedia.org/wiki/SIM_card) is
also required. Historically, the SIM form factor has been a plastic [smart
card](https://en.wikipedia.org/wiki/Smart_card), but many devices now leverage
an [embedded SIM (eSIM)](https://en.wikipedia.org/wiki/ESIM), which takes the
form of eUICC software running on a surface-mount integrated circuit with an
MFF2 footprint. eSIMs offer a number of advantages over traditional SIM cards,
including the ability to manage profiles remotely via [Remote SIM Provisioning
(RSP)](https://en.wikipedia.org/wiki/Remote_SIM_provisioning).

## Managed Connectivity

While customers are able to connect to Golioth over cellular using any carrier
of their choice, Golioth Connectivity offers managed cellular connectivity,
allowing customers to offload the complexity of negotiating data rates with
carriers and obtaining SIMs or eSIMs for their devices. Managed cellular
connectivity with Golioth Connectivity provides a single billing interface,
advanced network insights and management, and global coverage via carrier
roaming.

Managed cellular connectivity is currently available for select Golioth
customers. Please reach out to [sales@golioth.io](mailto:sales@golioth.io) for
more information.

## Certifications

Mobile network operators frequently require certifications for devices in order
ensure reliable and efficient communication for all parties on a network.
Devices that leverage Golioth Connectivity's managed cellular connectivity
**must have the following certifications**. Additionally, it is recommended that
customers ensure that their devices comply with [GSMA IoT Device Connection
Efficiency
Guidelines](https://www.gsma.com/get-involved/working-groups/gsma_resources/ts-34-v12-0/).

## PTCRB

[PTCRB certification](https://www.ptcrb.com/certification-program/) is a common
requirement for cellular devices. Golioth Connectivity customers can
dramatically simplify the PTCRB certification process by incorporating a
PTCRB-certified module in their hardware design. Devices that include a
PTCRB-certified module are referred to as “Integrated Devices”, and the only
additional testing required is typically limited to interfaces such as the SIM,
power, and antenna.

A database a PTCRB-certified modules can be found
[here](https://www.ptcrb.com/certified-devices/).

## Regional RF / EMI Certifications

While not specifically tied to cellular connectivity, most regions in which
cellular devices operate require some form of radio frequency (RF) and
electromagnetic interference (EMI) testing and certification. For example,
electronic devices in the United States are required to obtain [FCC
certification](https://www.fcc.gov/engineering-technology/laboratory-division/general/equipment-authorization).
Customers leveraging Golioth Connectivity's managed cellular connectivity must
be compliant with all local laws and regulations.
