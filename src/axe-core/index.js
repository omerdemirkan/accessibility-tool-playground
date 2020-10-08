const { testUrl, testUrls, testRawHtml } = require("../data");
const { evaluateUrl, evaluateRawHtml, evaluateUrls } = require("./utils");
const {
    promises: { writeFile },
} = require("fs");

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    await writeFile(
        require.resolve("../../sample/axe-core.json"),
        JSON.stringify(urlResults, null, 1)
    );

    // const rawHtmlResults = await evaluateRawHtml(
    //     "https://synonymy-app.herokuapp.com/"
    // );

    // console.log(rawHtmlResults);

    // const urlsResults = await evaluateUrls(testUrls);
    // console.log(urlsResults);
})();
