import { IndeedJobPostParser } from './indeed-job-post-parser';

export type SupportedPlatform = 'indeed' | 'glassdoor' | 'linkedin';

export function parserFactory(platform: SupportedPlatform) {
  switch (platform) {
    case 'indeed':
      return new IndeedJobPostParser();
    default:
      throw new Error('Not supported platform');
  }
}
