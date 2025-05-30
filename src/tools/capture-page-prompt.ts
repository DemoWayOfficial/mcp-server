import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { createToolExecuter } from './base';
import { guessRegionFromEnv } from '../utils/region';
import { getTByRegion } from '../utils/i18n';

const Name = 'capture_page_prompt';

const Description = `
When a user requests to download or modify a page from a specific URL, and the URL's domain is not app.demoway.cn or app.demoway.com, use this tool to prompt the user to first use the DemoWay browser extension to capture the page.
`;

const Schema = z.object({});

const executer = createToolExecuter<typeof Schema.shape>(async () => {
  const region = guessRegionFromEnv();
  const t = getTByRegion(region);
  return {
    content: [
      {
        type: 'text',
        text: t('capture-page-prompt-content'),
      },
    ],
  };
});

export function registerCapturePagePrompt(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
