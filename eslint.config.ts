import { ignores, combine, javascript, typescript } from '@antfu/eslint-config';
import prettierRecommend from 'eslint-plugin-prettier/recommended';

export default combine(
  ignores(),
  javascript(),
  typescript({
    overrides: {
      'ts/ban-ts-comment': 'off',
      'ts/no-redeclare': 'off',
    },
  }),
  prettierRecommend,
);
