import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Each time you begin a new terminal session, environment variables must be set to locate the ESP-IDF tools. This is an automated process using the single-line command shown below. Note that if the `idf.py` command is not found it usually indicates that these variable have not yet been set.

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

```console
source ~/esp/esp-idf/export.sh
```

</TabItem>

<TabItem value="macos">

```console
source ~/esp/esp-idf/export.sh
```

</TabItem>

<TabItem value="windows">

```console
%HOMEPATH%\esp\esp-idf\export.bat
```

</TabItem>
</Tabs>
