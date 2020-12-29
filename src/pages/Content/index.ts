import { parserFactory } from './job-post-parser';

// TODO: get platform name from current url.
const jobpostParser = parserFactory('indeed');

async function main() {
  const jobPostsElements = document.getElementsByClassName('jobsearch-SerpJobCard');
  Array.from(jobPostsElements).forEach(element => {
    const jobpostContent = jobpostParser.parseJobPost(element);
    const jobtitleEl = element.getElementsByClassName('jobtitle')[0];

    jobtitleEl.addEventListener('dragstart', () => {
      console.log('title drag start', jobpostContent);
    });
  });
}

main();
