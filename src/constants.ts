import { z } from 'zod';
import { TargetConfigSchema } from './schema/target';
import { unique } from 'radashi';

export { version as VERSION } from '../package.json';

const DEFAULT_CONFIG: {
  targets: TargetConfigSchema[];
} = {
  targets: [
    {
      app: 'https://app.demoway.com',
      api: 'https://api.demoway.com',
      apiKey: process.env.DEMOWAY_API_KEY,
      apiKeyEnv: 'DEMOWAY_API_KEY',
    },
    {
      app: 'https://app.demoway.cn',
      api: 'https://api.demoway.cn',
      apiKey: process.env.DEMOWAY_CN_API_KEY || process.env.DEMOWAY_API_KEY,
      apiKeyEnv: 'DEMOWAY_CN_API_KEY',
    },
  ],
};

const ConfigSchema = z
  .object({
    targets: z.array(TargetConfigSchema),
  })
  .transform((res) => {
    // merge default config
    res.targets = unique([...DEFAULT_CONFIG.targets, ...res.targets], (t) => t.app);
    // read env by apiKeyEnv value
    res.targets.forEach((target) => {
      if (!target.apiKey && target.apiKeyEnv) {
        target.apiKey = process.env[target.apiKeyEnv];
      }
    });
    return res;
  })
  .catch(DEFAULT_CONFIG);

export const CONFIG = process.env.EXTEND_CONFIG
  ? (ConfigSchema.safeParse(JSON.parse(process.env.EXTEND_CONFIG)).data ?? DEFAULT_CONFIG)
  : DEFAULT_CONFIG;
