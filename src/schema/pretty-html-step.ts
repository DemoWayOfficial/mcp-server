import { z } from 'zod';

export enum StepPrettyHTMLStatus {
  NOT_STARTED = 'NOT_STARTED',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export const PrettyHTMLStepSchema = z.object({
  stepId: z.string(),
  index: z.number(),
  status: z.nativeEnum(StepPrettyHTMLStatus),
  url: z.string().nullable(),
});

export type PrettyHTMLStepSchema = z.infer<typeof PrettyHTMLStepSchema>;
