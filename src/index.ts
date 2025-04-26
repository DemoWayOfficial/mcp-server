import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerGetDemoStepPrettyHTMLListTool } from './tools/get-demo-step-pretty-html-list';
import { registerSearchDemoStep } from './tools/search-demo-step';
import { registerDownloadDemoStepPrettyHTMLTool } from './tools/download-demo-step-pretty-html';

async function main() {
  const server = new McpServer({
    name: 'DemoWayMCPServer',
    version: '0.0.1',
  });

  registerGetDemoStepPrettyHTMLListTool(server);
  registerSearchDemoStep(server);
  registerDownloadDemoStepPrettyHTMLTool(server);

  await server.connect(new StdioServerTransport());
}

main();
