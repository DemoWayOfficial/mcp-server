import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { $apiFetch } from '../request';
import { baseToolExecuter } from './base';

const Name = 'get_demo_step_pretty_html_list';

const Description = `
Use this tool to get demo steps info list which is useful when you need to analyze the demo flow and step content.
This tool returns the steps list data in JSON format that you can then parse and analyze, each step item include "index" and "url" fields:
- "index" is the step index, you can use it to identify the step order in the demo flow.
- "url" is the step HTML file URL, you can use any other tool you have to fetch the HTML's content. It's important to note that HTML content is always particularly large, so it's best to handle it by downloading the file locally or reading it in segments.`;

const Schema = z.object({
  demoId: z.string().describe('DemoWay demo ID'),
});

const executer = baseToolExecuter<typeof Schema.shape>(async ({ demoId }, extra) => {
  const result = await $apiFetch(`/api/demo/${demoId}/step-pretty-html-list`, {
    query: {},
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

export function registerGetDemoStepPrettyHTMLTool(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
