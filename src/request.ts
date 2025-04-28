import type { FetchContext } from 'ofetch';
import { createFetch } from 'ofetch';
import { BASE_URL, API_KEY, VERSION } from './constants';

export const $apiFetch = createFetch({
  defaults: {
    baseURL: BASE_URL,
    headers: {
      'User-Agent': `demoway-mcp-server/${VERSION}`,
      Authorization: `Bearer ${API_KEY}`,
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
