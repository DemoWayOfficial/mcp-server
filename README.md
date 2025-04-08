# @demoway/mcp-server

[![npm package][npm-img]][npm-url] [![Build Status][build-img]][build-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url] [![Semantic Release][semantic-release-img]][semantic-release-url]

## Local Development

### Use AI MCP Client

1. install `tsx` globally

```bash
pnpm --global install tsx
```

2. copy `.roo/mcp.json` content to your AI client mcp configuration file, change absolute path to your's

### Use MCP Inspector

```bash
pnpm inspect
```

set command `pnpm`, set arguments `tsx /Users/zsk/code/github.com/DemoWayOfficial/mcp-server/src/index.ts --url=http://localhost:3333 --appId=<APP_ID> --token=<ACCESS_TOKEN>`, click `Connect`

## Install

```bash
npm install @demoway/mcp-server
```

## Configuration

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
