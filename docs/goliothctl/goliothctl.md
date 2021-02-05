---
id: goliothctl
date: 2021-02-05T11:04:45-04:00
title: "goliothctl"
slug: goliothctl
sidebar_label: goliothctl
url: /docs/goliothctl/goliothctl/
hide_title: true
---
## goliothctl

goliothctl is a golioth API cli

### Synopsis

You can access golioth API through this cli.
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

```
goliothctl [flags]
```

### Options

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --config string      config file (default is $HOME/golioth/.goliothctl.yaml)
  -h, --help               help for goliothctl
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl config](/docs/goliothctl/goliothctl_config/)	 - Set global goliothctl config
* [goliothctl device](/docs/goliothctl/goliothctl_device/)	 - Access device information
* [goliothctl login](/docs/goliothctl/goliothctl_login/)	 - Authenticate with golioth system
* [goliothctl logout](/docs/goliothctl/goliothctl_logout/)	 - Remove credentials from local config
* [goliothctl project](/docs/goliothctl/goliothctl_project/)	 - Access project information
* [goliothctl provision](/docs/goliothctl/goliothctl_provision/)	 - Provision devices and credentials
* [goliothctl updates](/docs/goliothctl/goliothctl_updates/)	 - Send/Trigger device updates

