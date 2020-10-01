const { testUrl, testRawHtml } = require("../data");
const { evaluateUrl, evaluateRawHtml } = require("./utils");

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    console.log(urlResults);

    // const rawHtmlResults = await evaluateRawHtml(testRawHtml);
    // console.log(rawHtmlResults);
})();
