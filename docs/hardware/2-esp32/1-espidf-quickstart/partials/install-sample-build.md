import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Your system is all set up and ready to start building & flashing with the ESP-IDF. Verify by building a *Hello World* sample:

<Tabs
groupId="os"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'MacOS', value: 'macos'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="linux">

```shell
cd ~/esp
cp -r $IDF_PATH/examples/get-started/hello_world .
cd hello_world
idf.py set-target esp32
idf.py build
```

</TabItem>
<TabItem value="macos">

```shell
cd ~/esp
cp -r $IDF_PATH/examples/get-started/hello_world .
cd hello_world
idf.py set-target esp32
idf.py build
```

</TabItem>
<TabItem value="windows">

```shell
cd %HOMEPATH%\esp
xcopy /e /i %IDF_PATH%\examples\get-started\hello_world hello_world
cd hello_world
idf.py set-target esp32
idf.py build
```

</TabItem>
</Tabs>
