import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { createToolExecuter } from './base';
import { guessRegionFromEnv } from '../utils/region';
import { getTByRegion } from '../utils/i18n';

const Name = 'record_page_prompt';

const Description = `
Use this tool to prompt the user to first use the DemoWay browser extension to record the page when they request to download or modify a page from a specific URL.
`;

const Schema = z.object({});

const executer = createToolExecuter<typeof Schema.shape>(async () => {
  const region = guessRegionFromEnv();
  const t = getTByRegion(region);
  return {
    content: [
      {
        type: 'text',
        text: t('record-page-prompt-content'),
      },
    ],
  };
});

export function registerRecordPagePrompt(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
