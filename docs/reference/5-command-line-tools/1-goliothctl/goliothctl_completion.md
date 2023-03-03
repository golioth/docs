---
id: goliothctl_completion
title: "goliothctl completion"
slug: goliothctl_completion
sidebar_label: goliothctl completion
url: /reference/command-line-tools/goliothctl/goliothctl_completion/
hide_title: true
---
## goliothctl completion

Generate completion script

### Synopsis

To load completions:

Bash:

  $ source <(goliothctl completion bash)

  # To load completions for each session, execute once:
  # Linux:
  $ goliothctl completion bash > /etc/bash_completion.d/goliothctl
  # macOS:
  $ goliothctl completion bash > /usr/local/etc/bash_completion.d/goliothctl

Zsh:

  # If shell completion is not already enabled in your environment,
  # you will need to enable it.  You can execute the following once:

  $ echo "autoload -U compinit; compinit" >> ~/.zshrc

  # To load completions for each session, execute once:
  $ goliothctl completion zsh > "${fpath[1]}/_goliothctl"

  # You will need to start a new shell for this setup to take effect.

fish:

  $ goliothctl completion fish | source

  # To load completions for each session, execute once:
  $ goliothctl completion fish > ~/.config/fish/completions/goliothctl.fish

PowerShell:

  PS> goliothctl completion powershell | Out-String | Invoke-Expression

  # To load completions for every new session, run:
  PS> goliothctl completion powershell > goliothctl.ps1
  # and source this file from your PowerShell profile.


```
goliothctl completion [bash|zsh|fish|powershell]
```

### Options

```
  -h, --help   help for completion
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.

