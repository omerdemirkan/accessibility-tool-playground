import { testUrl, testUrls, testRawHtml } from "./data";
import { evaluateUrl, evaluateRawHtml, evaluateUrls } from "./utils";

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    console.log(urlResults);

    const rawHtmlResults = await evaluateRawHtml(testRawHtml);
    console.log(rawHtmlResults);

    const urlsResults = await evaluateUrls(testUrls);
    console.log(urlsResults);
})();
