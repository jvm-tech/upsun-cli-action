# Use the upsun-cli in you GitHub Action

This action sets up an environment with the Upsun.com cli.

## Inputs

### token

**Required** Your upsun.com api token, see https://docs.upsun.com/administration/cli/api-tokens.html

### version

**Options** The version of the cli to use, defaults to latest (main), see https://github.com/platformsh/cli/releases/ for available versions

## Usage

See [action.yml](action.yml)

Basic:

    - uses: jvm-tech/upsun-cli-action@v1.2
      with: 
        token: ${{secrets.UPSUN_CLI_TOKEN}} #required

Specify CLI version:

    - uses: jvm-tech/upsun-cli-action@v1.1
      with: 
        token: ${{secrets.UPSUN_CLI_TOKEN}} #required
        version: 5.0.20

You will need to generate an API token and add it as a Secret with the name UPSUN_CLI_TOKEN in your repository Settings.

## Acknowledgements

This package takes inspiration from https://github.com/adam7/platformsh-cli-action. It adapts the install process to install a different version of the cli tool.
