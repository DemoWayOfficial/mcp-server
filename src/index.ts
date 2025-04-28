import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerSearchDemoStep } from './tools/search-demo-step';
import { registerDownloadDemoStepPrettyHTMLTool } from './tools/download-demo-step-pretty-html';
import { VERSION } from './constants';

async function main() {
  const server = new McpServer({
    name: 'DemoWayMCPServer',
    version: VERSION,
  });

  registerSearchDemoStep(server);
  registerDownloadDemoStepPrettyHTMLTool(server);

  await server.connect(new StdioServerTransport());
}

main();
