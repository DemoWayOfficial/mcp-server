import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerSearchDemoStep } from './tools/search-demo-step';
import { registerDownloadDemoStepPrettyHTMLTool } from './tools/download-demo-step-pretty-html';
import { VERSION } from './constants';
import { registerCapturePagePrompt } from './tools/capture-page-prompt';
import { registerImportPagePrompt } from './tools/import-page-prompt';

async function main() {
  const server = new McpServer({
    name: 'DemoWayMCPServer',
    version: VERSION,
  });

  registerSearchDemoStep(server);
  registerDownloadDemoStepPrettyHTMLTool(server);
  registerCapturePagePrompt(server);
  registerImportPagePrompt(server);

  await server.connect(new StdioServerTransport());
}

main();
