import { IndeedJobPostParser } from './indeed-job-post-parser';

export type SupportedPlatform = 'indeed' | 'glassdoor' | 'linkedin';

export function parserFactory(platform: SupportedPlatform) {
  switch (platform) {
    case 'indeed':
      // TODO: get from background from http request
      return new IndeedJobPostParser({
        id: 'abc123',
        name: 'indeed',
        baseUrl: 'indeed.ca',
      });
    default:
      throw new Error('Not supported platform');
  }
}
