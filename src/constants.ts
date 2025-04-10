import minimist from 'minimist';
import { REGION } from './enums';
import { z } from 'zod';

export const CLI_ARGS_SCHEMA = z.object({
  region: z.string().toUpperCase().default(REGION.CHINA).pipe(z.nativeEnum(REGION)),
  url: z.string().optional(),
  'api-key': z.string().default(process.env.DEMOWAY_API_KEY as string),
});

export type CliArgs = z.infer<typeof CLI_ARGS_SCHEMA>;

export const argv = CLI_ARGS_SCHEMA.parse(minimist(process.argv.slice(2)));

// Retrieve token and baseUrl from environment variables
export const API_KEY = argv['api-key'];
export const BASE_URL =
  argv.url ?? (argv.region === REGION.CHINA ? 'https://api.demoway.cn' : 'https://api.demoway.com');
