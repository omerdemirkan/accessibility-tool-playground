import { testUrl, testUrls, testRawHtml } from "../data";
import { evaluateUrl, evaluateRawHtml, evaluateUrls } from "./utils";

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    console.log(urlResults.violations.map((v) => v.nodes));

    const rawHtmlResults = await evaluateRawHtml(
        "https://synonymy-app.herokuapp.com/"
    );

    const urlsResults = await evaluateUrls(testUrls);
    console.log(urlsResults);
})();
