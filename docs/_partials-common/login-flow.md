### Start login flow

You can authenticate the CLI in two ways:
1. User credentials
2. Project API key

### Option 1: User credentials (default)

Run the command:

```
goliothctl login
```

This will redirect you to your default browser where you can login or create an account on our system.

#### Create account or login with an existing one

After successfully authenticating into our system, you should be redirected to a success page and the CLI will be authenticated properly.

### Option 2: Project API key

Run the command:

```
goliothctl login --apiKey <api_key>
```

This method skips the browser flow and authenticates the CLI directly.
