import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerGetDemoStepPrettyHTMLTool } from './tools/get-demo-step-pretty-html-list';

async function main() {
  const server = new McpServer({
    name: 'DemoWayMCPServer',
    version: '0.0.1',
  });

  registerGetDemoStepPrettyHTMLTool(server);

  await server.connect(new StdioServerTransport());
}

main();
