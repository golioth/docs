# Remote Procedure Call (RPC)

## What is a Remote Procedure Call?

A Remote procedure call (RPC) allows you to run a command on an IoT device in
the field, optionally supplying your own input data. The device will execute the
command, returning state information and output data (if any).

RPCs are synchronous and run on the device as soon as they are called/received.
Devices only respond to the RPC methods to which they have registered with the
Golioth server. An RPC may be initiated from the Golioth web console, REST API,
or using command line tools.

### Use Cases

Here are some ideas on what can be accomplished with Golioth's RPC feature.

- Device reboot
  - It sounds simple, but the ability to remotely reboot your device is a
    surprisingly handy.
- Fetch network information
  - Use an RPC to retrieve network connection information. This could be band
    and signal strength for a cellular network, or a site survey to help a WiFi
    device find an AP with a more stable signal.
