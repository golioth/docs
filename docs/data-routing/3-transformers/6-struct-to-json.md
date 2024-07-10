---
title: struct-to-json
---

|   |   |
|---|:---:|
|__Latest Version__| `v1.0.0` |
|__Input Content Type__| `application/octet-stream` |
|__Output Content Type__| `application/json` |

The `struct-to-json` transformer takes [packed C structures](https://www.gnu.org/software/c-intro-and-ref/manual/html_node/Packed-Structures.html)
and converts them to JSON according to a user provided schema.

The schema is an ordered list of objects in the Pipeline YAML. Each object
describes one member of the struct and must contain a `name` and `type`.
Additionally, `string` types must specify a length (more below). The
accepted types are:

| Schema Value | Description |
|---|---|
| `u8` | Unsigned 8-bit integer |
| `i8` | Signed 8-bit integer |
| `u16` | Unsigned 16-bit integer |
| `i16` | Signed 16-bit integer |
| `u32` | Unsigned 32-bit integer |
| `i32` | Signed 32-bit integer |
| `u64` | Unsigned 64-bit integer |
| `i64` | Signed 64-bit integer |
| `float` | Single precision (32-bit) IEEE 754 floating point number |
| `double` | Double precision (64-bit) IEEE 754 floating point number |
| `string` | Variable length string. __NOT__ NULL terminated |

For `string` type members, the YAML object must also contain exactly one of
`length` or `lengthField`.
- `length` contains a non-negative integer with the constant length of the
string.
- `lengthField` contains the name of a member of the same struct. The member
must hold a non-negative integer value, and the length member must come before
the string member in the payload.

### Example Usage

```yaml
    transformer:
      type: struct-to-json
      version: v1
      parameters:
        members:
          - name: temperature
            type: float
          - name: string1
            type: string
            length: 5
          - name: string2_len
            type: u8
          - name: string2
            type: string
            length: string2_len
```

### Example Input

```C
struct my_struct {
    float temperature;
    char string1[5];
    uint8_t string2_len;
    char string2[];
} __attribute__((packed));

struct my_struct *s = malloc(sizeof(struct my_struct) + strlen("Golioth!"));

s->temperature = 23.5f;
s->string2_len = strlen("Golioth!");
memcpy(s->string1, "hello", strlen("hello"));
memcpy(s->string2, "Golioth!", strlen("Golioth!"));
```

This is the hexdump of `s` as created by the above C snippet:

```
00000000  00 00 bc 41 68 65 6c 6c  6f 08 47 6f 6c 69 6f 74  |...Ahello.Goliot|
00000010  68 21                                             |h!|
00000012
```

### Example Output

```json
{
  "temperature": 23.5,
  "string1": "Hello",
  "string2_len": 8,
  "string2": "Golioth!"
}
```

:::info Tip
If you do not require the string length after the struct-to-json transform
step, you can remove it using the
[json-patch](/data-routing/transformers/json-patch) transformer before sending
the data to your destination.
:::
