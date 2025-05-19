import { z } from 'zod';

export const TargetConfigSchema = z.object({
  app: z.string().url(),
  api: z.string().url(),
  apiKey: z.string().optional(),
  apiKeyEnv: z.string().optional(),
});
export type TargetConfigSchema = z.infer<typeof TargetConfigSchema>;
