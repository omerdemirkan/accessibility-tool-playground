const { testUrl, testUrls, testRawHtml } = require("../data");
const { evaluateUrl, evaluateRawHtml, evaluateUrls } = require("./utils");

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    urlResults.violations.forEach(function (violation) {
        violation.nodes.forEach(function (node) {
            console.log(node);
        });
    });

    // const rawHtmlResults = await evaluateRawHtml(
    //     "https://synonymy-app.herokuapp.com/"
    // );

    // console.log(rawHtmlResults);

    // const urlsResults = await evaluateUrls(testUrls);
    // console.log(urlsResults);
})();
