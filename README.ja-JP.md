[English](./README.md) | [日本語](./README.ja-JP.md) | [中文](./README.zh-CN.md)

# @demoway/mcp-server

[![npm package][npm-img]][npm-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url]

DemoWay MCP Serverは、既存の単一ページまたは機能フロー内のすべてのページをAIに提供し、さらなる修正、新しいページデザインやフロントエンドコードの生成を可能にします。

DemoWay MCP Serverを利用するには、[DemoWayブラウザ拡張機能](https://chromewebstore.google.com/detail/demoway/nagpcohhbjekmliolabhhnmgcjndbbdi)のインストールが必要です。

## 利用可能なツール

- `download_demo_step_pretty_html`: キャプチャしたページをAIが扱いやすいHTML形式でローカルコンピュータにダウンロードします
- `search_demo_step`: 指定したデモ内でキーワードによって特定のページを検索します

## 使い方

### 設定方法

**Mac/Linuxユーザー向け**

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

**Windowsユーザー向け**

```json
{
  "mcpServers": {
    "demoway": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@demoway/mcp-server"],
      "env": {
        "DEMOWAY_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

`DEMOWAY_API_KEY`は [DemoWayのダッシュボード](https://app.demoway.com/dashboard/settings/feature) から取得できます。

### 詳細ガイド

https://demoway.com/docs/mcp

## ライセンス

MIT ©[DemoWay](https://demoway.com)

[downloads-img]: https://img.shields.io/npm/dt/@demoway/mcp-server
[downloads-url]: https://www.npmtrends.com/@demoway/mcp-server
[npm-img]: https://img.shields.io/npm/v/@demoway/mcp-server
[npm-url]: https://www.npmjs.com/package/@demoway/mcp-server
[issues-img]: https://img.shields.io/github/issues/DemoWayOfficial/mcp-server
[issues-url]: https://github.com/DemoWayOfficial/mcp-server/issues
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
