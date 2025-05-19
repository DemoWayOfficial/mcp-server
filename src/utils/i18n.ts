import i18next from 'i18next';
import enTranslation from '../locales/en.json';
import zhTranslation from '../locales/zh.json';
import { Region } from '../enums';

i18next.init({
  initAsync: false,
  fallbackLng: 'en',
  resources: {
    en: { translation: enTranslation },
    zh: { translation: zhTranslation },
  },
});

export function getTByRegion(region: Region) {
  const lng = region === Region.CHINA ? 'zh' : 'en';
  return i18next.getFixedT(lng);
}
