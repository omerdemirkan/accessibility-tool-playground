const { testUrl, testRawHtml } = require("../data");
const { evaluateUrl, evaluateRawHtml } = require("./utils");
const {
    promises: { writeFile },
} = require("fs");

(async function () {
    const urlResults = await evaluateUrl(testUrl);
    await writeFile(
        require.resolve("../../sample/htmlcs.json"),
        JSON.stringify(urlResults, null, 1)
    );

    // const rawHtmlResults = await evaluateRawHtml(testRawHtml);
    // console.log(rawHtmlResults);
})();
