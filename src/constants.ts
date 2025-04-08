import minimist from 'minimist';
import { REGION } from './enums';
import { z } from 'zod';

export const CLI_ARGS_SCHEMA = z.object({
  region: z.string().toUpperCase().default(REGION.CHINA).pipe(z.nativeEnum(REGION)),
  url: z.string().optional(),
  token: z.string().default(process.env.TOKEN as string),
  appId: z.string().default(process.env.APP_ID as string), // 临时参数，后续应该后端从 token 中提取和校验（需要后端改造，多 appId 支持）
});

export type CliArgs = z.infer<typeof CLI_ARGS_SCHEMA>;

export const argv = CLI_ARGS_SCHEMA.parse(minimist(process.argv.slice(2)));

// Retrieve token and baseUrl from environment variables
export const APP_ID = argv.appId;
export const TOKEN = argv.token;
export const BASE_URL =
  argv.url ?? (argv.region === REGION.CHINA ? 'https://api.demoway.cn' : 'https://api.demoway.com');
