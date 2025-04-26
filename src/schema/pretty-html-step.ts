import { z } from 'zod';

export enum StepPrettyHTMLStatus {
  /** 未开始 */
  NOT_STARTED = 'NOT_STARTED',
  /** 处理中 */
  PENDING = 'PENDING',
  /** 失败 */
  ERROR = 'ERROR',
  /** 成功 */
  SUCCESS = 'SUCCESS',
}

export const PrettyHTMLStepSchema = z.object({
  stepId: z.string(),
  index: z.number(),
  status: z.nativeEnum(StepPrettyHTMLStatus),
  url: z.string().nullable(),
});

export type PrettyHTMLStepSchema = z.infer<typeof PrettyHTMLStepSchema>;
