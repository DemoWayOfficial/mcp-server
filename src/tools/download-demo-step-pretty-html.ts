import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { parallel } from 'radashi';
import { $apiFetch } from '../request';
import fs from 'node:fs';
import { createToolExecuter } from './base';
import type { PrettyHTMLStepSchema } from '../schema/pretty-html-step';
import path from 'node:path';
import { ofetch } from 'ofetch';

const Name = 'download_demo_step_pretty_html';

const Description = `
Use this tool to download demo step's pretty html files to local.
This tool returns the downloaded steps list data in JSON format that you can then parse and analyze, each item include follow fields:
- "index": Identify the step order in the demo flow.
- "stepId": Step unique id in demo flow.
- "status": Status of server processing the current step, values includes "NOT_STARTED", "PENDING", "SUCCESS", "ERROR".
- "file": local file absolute path of the downloaded current step pretty html file.
If neither "stepIds" nor "indexes" are present in the parameters, it means downloading all steps.
`;

const Schema = z.object({
  demoId: z.string().describe('DemoWay demo ID'),
  stepIds: z.string().array().optional().describe('stepId list of the steps to download'),
  indexes: z.number().array().optional().describe('indexes of the steps to download'),
  dir: z.string().describe('Local file system directory absolute path to save the downloaded files'),
  filenameTemplate: z
    .string()
    .default('step-{i}')
    .describe(
      'The filename template for step pretty html containing "{i}", where "{i}" will be replaced with the actual step index',
    ),
});

const executer = createToolExecuter<typeof Schema.shape>(
  async ({ demoId, dir, indexes, stepIds, filenameTemplate }, extra) => {
    const steps = await $apiFetch<PrettyHTMLStepSchema[]>(`/api/demo/${demoId}/step-pretty-html-list`, {
      query: {},
      signal: extra.signal,
    });

    const needDownloadAll = !indexes?.length && !stepIds?.length;

    const needDownloadSteps = steps.filter((step) => {
      return needDownloadAll || indexes?.includes(step.index) || stepIds?.includes(step.stepId);
    });

    await fs.promises.mkdir(dir, { recursive: true });
    const result = await parallel({ limit: 5, signal: extra.signal }, needDownloadSteps, async (step) => {
      let file = '';
      if (step.url) {
        const saveFile = path.join(dir, `${filenameTemplate.replace('{i}', step.index.toString())}.html`);
        const html = await ofetch<string>(step.url);
        await fs.promises.writeFile(saveFile, html, 'utf-8');
        file = saveFile;
      }

      return {
        index: step.index,
        stepId: step.stepId,
        status: step.status,
        file,
      };
    });

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

export function registerDownloadDemoStepPrettyHTMLTool(server: McpServer) {
  server.tool(Name, Description, Schema.shape, executer);
}
