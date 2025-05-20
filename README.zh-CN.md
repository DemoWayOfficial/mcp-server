[English](./README.md) | [日本語](./README.ja-JP.md) | [中文](./README.zh-CN.md)

# @demoway/mcp-server

[![npm package][npm-img]][npm-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Commitizen Friendly][commitizen-img]][commitizen-url]

DemoWay MCP Server 允许你将现有的单个页面或整个功能流程中的所有页面提供给 AI 进一步修改，以生成新的页面设计或前端代码。

你需要安装 [DemoWay 浏览器扩展](https://chromewebstore.google.com/detail/demoway/nagpcohhbjekmliolabhhnmgcjndbbdi) 才能与 DemoWay MCP Server 搭配使用。

## 如果您是中国区用户

🚀 建议直接参看中国区官网的用户手册，以获得更好的速度和体验，功能是一样的：

https://demoway.cn/docs/mcp

## 可用工具

- `download_demo_step_pretty_html`：以 AI 友好的 HTML 格式下载已捕获页面到本地电脑，以供 AI 进一步修改
- `search_demo_step`：通过关键词在指定的 Demo 中搜索特定页面

## 使用方法

### 配置

**Mac/Linux 用户**

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

**Windows 用户**

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

你可以在 [DemoWay 后台](https://app.demoway.com/dashboard/settings/feature) 获取 DEMOWAY_API_KEY

### 详细指南

https://demoway.com/docs/mcp

## 许可证

MIT ©[DemoWay](https://demoway.com)

[downloads-img]: https://img.shields.io/npm/dt/@demoway/mcp-server
[downloads-url]: https://www.npmtrends.com/@demoway/mcp-server
[npm-img]: https://img.shields.io/npm/v/@demoway/mcp-server
[npm-url]: https://www.npmjs.com/package/@demoway/mcp-server
[issues-img]: https://img.shields.io/github/issues/DemoWayOfficial/mcp-server
[issues-url]: https://github.com/DemoWayOfficial/mcp-server/issues
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
