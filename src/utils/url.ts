import { memo } from 'radashi';
import { Region } from '../enums';

export const getRegionByHostname = memo((hostname: string): Region => {
  if (hostname.endsWith('demoway.cn')) {
    return Region.CHINA;
  } else {
    return Region.WORLD;
  }
});

export const getRegionByUrl = memo((url: string): Region => {
  const hostname = new URL(url).hostname;
  return getRegionByHostname(hostname);
});

export function isSameHost(a: string | URL, b: string | URL) {
  try {
    const urlA = typeof a === 'string' ? new URL(a) : a;
    const urlB = typeof b === 'string' ? new URL(b) : b;
    return urlA.host === urlB.host;
  } catch {
    return false;
  }
}

const DEMO_REGEXP = /^\/demo\/(.+)\b/;

export function parseDemoUrl(urlStr: string) {
  const url = new URL(urlStr);

  const matched = url.pathname.match(DEMO_REGEXP);
  if (!matched) {
    throw new Error('not a acceptable demo url');
  }

  return {
    region: getRegionByHostname(url.hostname),
    demoId: matched[1],
  };
}
