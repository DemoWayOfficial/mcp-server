# @demoway/mcp-server

[![npm package][npm-img]][npm-url] [![Build Status][build-img]][build-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url] [![Semantic Release][semantic-release-img]][semantic-release-url]

## Configuration

```json
{
  "mcpServers": {
    "demoway": {
      "command": "npx",
      "args": ["@demoway/mcp-server", "--region={world,china}"],
      "env": {
        "DEMOWAY_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

## Local Development

1. install `tsx` globally

```bash
pnpm --global install tsx
```

2. configuration your MCP client

```json
{
  "mcpServers": {
    "demoway": {
      "command": "tsx",
      "args": ["<ABSOLUTE_PATH_TO_SRC_INDEX_FILE>", "--url=http://localhost:3333"],
      "env": {
        "DEMOWAY_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

[build-img]: https://github.com/DemoWayOfficial/mcp-server/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/DemoWayOfficial/mcp-server/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@demoway/mcp-server
[downloads-url]: https://www.npmtrends.com/@demoway/mcp-server
[npm-img]: https://img.shields.io/npm/v/@demoway/mcp-server
[npm-url]: https://www.npmjs.com/package/@demoway/mcp-server
[issues-img]: https://img.shields.io/github/issues/DemoWayOfficial/mcp-server
[issues-url]: https://github.com/DemoWayOfficial/mcp-server/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
