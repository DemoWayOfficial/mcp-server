import { Region } from '../enums';

export function guessRegionFromEnv() {
  if (process.env.DEMOWAY_CN_API_KEY) {
    return Region.CHINA;
  } else {
    return Region.WORLD;
  }
}
