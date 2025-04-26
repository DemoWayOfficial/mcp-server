import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { $apiFetch } from '../request';
import { createToolExecuter } from './base';

const Name = 'search_demo_step';

const Description = `
Use this tool to get one step from a specific demo which is matched by keyword, match means step content contains or has similar semantic.
This tool returns the matched step info in JSON format.
`;

const Schema = z.object({
  demoId: z.string().describe('DemoWay demo ID'),
  keyword: z.string().describe('Search keyword'),
});

const executer = createToolExecuter<typeof Schema.shape>(async ({ demoId, keyword }, extra) => {
  const result = await $apiFetch(`/api/demo/${demoId}/step/search`, {
    query: {
      keyword,
    },
    signal: extra.signal,
  });

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result),
      },
    ],
  };
});

export function registerSearchDemoStep(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
