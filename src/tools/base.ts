import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ZodRawShape } from 'zod';

export function createToolExecuter<Args extends undefined | ZodRawShape = undefined>(fn: ToolCallback<Args>) {
  const wrappedFn = async (...args: any[]) => {
    try {
      // @ts-ignore
      return await fn(...args);
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Error: ${(error as Error).message}`,
          },
        ],
      };
    }
  };

  return wrappedFn as ToolCallback<Args>;
}
