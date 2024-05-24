# Logging

:::usage
Sending log messages incurs usage costs after exceeding the free tier. See
[Golioth pricing](https://golioth.io/pricing) for more information.
:::

## What is Logging

You should never need to physically access you IoT devices to begin
troubleshooting. To aid in this, Golioth has a robust logging system. Logs
received from devices in the field are stored along with all metadata.

Logs can be queried from the Golioth Web Console, which includes tools to filter
by timestamp, device, tag, module, and log level. Logs are also accessible using
Golioth command line tools to query stored logs, and to monitor incoming logs in
real-time.

:::note
See more in the reference docs section:

- [goliothctl logs](/reference/command-line-tools/goliothctl/goliothctl_logs)
- [goliothctl logs listen](/reference/command-line-tools/goliothctl/goliothctl_logs_listen)
:::

### Use Cases

Here are some ideas on what can be accomplished with Golioth's logging features.

- On-Demand logging
  - Include debug, warning, and error logs in your device code.
  - Use Golioth's LightDB state to set the device log level remotely.
  - This effectively turns logging on or off, saving bandwidth when not needed,
    and time when diagnosing issues with your fleet.
- Programmatically query logs during automated testing of your deployed devices.
  - Golioth's command line tools can be configured for different log output
    formatting
  - Use these tools to verify device performance when testing your growing
    deployments.
