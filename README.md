# @demoway/mcp-server

[![npm package][npm-img]][npm-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url]

DemoWay MCP server implementation providing standardized Model Context Protocol (MCP) interface services.

## Available Tools

- `search_demo_step`: Search step by keyword in a demo
- `download_demo_step_pretty_html`: Download demo's step pretty html

## Usage

## Configuration

```json
{
  "mcpServers": {
    "demoway": {
      "command": "npx",
      "args": ["-y", "@demoway/mcp-server@latest"],
      "env": {
        "DEMOWAY_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

## Local Development

1. Install tsx globally

```bash
pnpm --global install tsx
```

2. Configure MCP client

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

## Contributing

Pull requests are welcome. Please ensure:

1. Code follows ESLint rules
2. Add appropriate test cases
3. Use Commitizen for commit messages

## License

MIT © [DemoWay](https://demoway.com)

[downloads-img]: https://img.shields.io/npm/dt/@demoway/mcp-server
[downloads-url]: https://www.npmtrends.com/@demoway/mcp-server
[npm-img]: https://img.shields.io/npm/v/@demoway/mcp-server
[npm-url]: https://www.npmjs.com/package/@demoway/mcp-server
[issues-img]: https://img.shields.io/github/issues/DemoWayOfficial/mcp-server
[issues-url]: https://github.com/DemoWayOfficial/mcp-server/issues
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
