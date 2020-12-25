https://stackoverflow.com/questions/59945719/cookie-samesite-with-a-chrome-extension

If an extension page (background script/html) initiates a request to a web URL, the request is considered
same-site if the extension has host permission for the requested URL in the extension’s manifest.

For content scripts, the behavior of SameSite cookies is exactly the same as if the request were initiated
from the page on which the content script is running.
