import { CONFIG } from '../constants';
import { isSameHost } from './url';

export function findTargetByUrl(urlStr: string) {
  const url = new URL(urlStr);
  const target = CONFIG.targets.find((t) => isSameHost(url, t.app));

  return target;
}
