import { createFetch } from 'ofetch';
import type { FetchContext } from 'ofetch';
import { memo } from 'radashi';
import { VERSION } from '../constants';
import { getRegionByUrl } from './url';
import { getTByRegion } from './i18n';
import { findTargetByUrl } from './target';

export const getApiFetch = memo((url: string) => {
  const target = findTargetByUrl(url);

  if (!target) {
    throw new Error('not demoway url');
  }

  if (!target.apiKey) {
    const region = getRegionByUrl(target.app);
    const t = getTByRegion(region);
    throw new Error(t('configure-api-key-first', { key: target.apiKeyEnv }));
  }

  const $apiFetch = createFetch({
    defaults: {
      baseURL: target.api,
      headers: {
        'User-Agent': `demoway-mcp-server/${VERSION}`,
        Authorization: `Bearer ${target.apiKey}`,
      },
      async onResponse(context: FetchContext) {
        if (context.error) {
          return;
        }

        const data = context.response?._data as any;

        if (!data || typeof data !== 'object') {
          return;
        }

        if (data.error) {
          context.error = data.error;
        } else if ('data' in data && context.response?._data) {
          context.response._data = data.data;
        }
      },
    },
  });

  return $apiFetch;
});
