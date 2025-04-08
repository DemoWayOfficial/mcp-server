import type { FetchContext } from 'ofetch';
import { createFetch } from 'ofetch';
import { APP_ID, BASE_URL, TOKEN } from './constants';

export const $apiFetch = createFetch({
  defaults: {
    baseURL: BASE_URL,
    async onRequest(context: FetchContext): Promise<void> {
      const headers = new Headers(context.options.headers);
      headers.set('Authorization', `Bearer ${TOKEN}`);

      context.options.query = { appId: APP_ID, ...context.options.query };

      context.options.headers = headers;
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
