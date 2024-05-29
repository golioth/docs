---
title: Zapier Webhook
---
import Pipeline from '@site/src/components/usethispipeline'

[Zapier](https://zapier.com/) is a no-code automation tool that connects over
5,000 apps, enabling users to create automated workflows called "Zaps." This
allows for seamless integration and task automation between different applications,
streamlining processes and improving productivity without needing to write code.
It can be used in various scenarios, including IoT, to automate data transfer,
trigger notifications, and control devices across different platforms. This example
demonstrates accepting a JSON data payload, then delivering it to Zapier via the
[Webhook](/data-routing/destinations/webhook) data destination. It relies on
Zapier's native [Webhooks by Zapier app](https://zapier.com/features/webhooks).

:::info Reminder
Make sure to replace the `url` with the correct Zapier Webhook URL for your
integration.
:::

<Pipeline link='https://console.golioth.io/pipeline?name=Zapier%20Webhook&pipeline=ZmlsdGVyOgogIHBhdGg6ICIqIgogIGNvbnRlbnRfdHlwZTogYXBwbGljYXRpb24vanNvbgpzdGVwczoKICAtIG5hbWU6IHN0ZXAwCiAgICBkZXN0aW5hdGlvbjoKICAgICAgdHlwZTogd2ViaG9vawogICAgICB2ZXJzaW9uOiB2MQogICAgICBwYXJhbWV0ZXJzOgogICAgICAgIHVybDogaHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoLzk4MTA3NzAvM3ZqamkwbC8=' />
