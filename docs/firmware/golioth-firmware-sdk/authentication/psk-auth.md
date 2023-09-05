---
title: PSK Authentication
sidebar_position: 2
---

If you have already worked through the [Getting Started
Guide](/getting-started/1-overview.md), you are familiar with creating
Pre-Shared Key (PSK) device credentials using the Golioth Console (or the
`goliothctl` command line tool). PSK credentials are passed as members of the
Golioth Client configuration.

```c
uint8_t* client_psk_id = pointer_to_your_psk_id_array;
uint8_t* client_psk = pointer_to_your_psk_array;
size_t client_psk_id_len = strlen_of_your_psk_id_array;
size_t client_psk_len = strlen_of_your_psk_array;

golioth_client_config_t client_config = {
        .credentials = {
                .auth_type = GOLIOTH_TLS_AUTH_TYPE_PSK,
                .psk = {
                        .psk_id = client_psk_id,
                        .psk_id_len = client_psk_id_len,
                        .psk = client_psk,
                        .psk_len = client_psk_len,
                }}};

golioth_client_t client = golioth_client_create(&client_config);
```

Golioth does not specify the means of provisioning PSK device credentials onto a
device; you are free to use whichever method bests fits your device architecture
and manufacturing process.
