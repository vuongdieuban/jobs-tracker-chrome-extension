import { JobPostCreateRequest } from 'api-lib/dist/dto/job-post.dto';
import { Platform } from 'api-lib/dist/dto/platform.dto';

const Unknown = 'Unknown';

export class IndeedJobPostParser {
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // TODO: should be a factory that create platform job parser based on platform
  public parseJobPost(element: Element): JobPostCreateRequest {
    const platformJobKey = element.getAttribute('data-jk') || Unknown;

    const titleLinkEl = element.getElementsByClassName('title').item(0)?.getElementsByTagName('a').item(0);
    const title = titleLinkEl?.getAttribute('title') || Unknown;
    const postUrl = titleLinkEl?.getAttribute('href') || Unknown;
    const url = this.platform.baseUrl + postUrl;

    const location =
      element.getElementsByClassName('recJobLoc').item(0)?.getAttribute('data-rc-loc') || Unknown;

    const companyName = this.parseCompanyName(element) || Unknown;

    // const descriptionEl = element.getElementsByClassName('summary').item(0).getElementsByTagName('li');
    // const description = Array.from(descriptionEl).map((el) => el.innerText);

    return {
      title,
      companyName,
      location,
      url,
      platformJobKey,
      platformId: this.platform.id,
    };
  }

  private parseCompanyName(element: Element): string | null {
    const companyNameEl = element.getElementsByClassName('company').item(0);
    if (!companyNameEl) {
      return Unknown;
    }
    const name = companyNameEl.getElementsByTagName('a').item(0)?.textContent || companyNameEl.textContent;
    return name?.trim() || null;
  }
}
