import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { createToolExecuter } from './base';
import { getTByRegion } from '../utils/i18n';
import { Region } from '../enums';

const Name = 'import_page_prompt';

const Description = `
Use this tool when users request to import common front-end files (like html, astro, vue, react) to design tools like: Figma, MasterGo, or Pixso, If the user doesn't specify a design tool, ask he first.
`;

const Schema = z.object({
  platform: z.enum(['Figma', 'MasterGo', 'Pixso']).describe('The import target platform'),
});

const executer = createToolExecuter<typeof Schema.shape>(async ({ platform }) => {
  const region = platform === 'Figma' ? Region.WORLD : Region.CHINA;
  const t = getTByRegion(region);
  return {
    content: [
      {
        type: 'text',
        text: t('import-page-prompt-content', {
          platform,
        }),
      },
    ],
  };
});

export function registerImportPagePrompt(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
