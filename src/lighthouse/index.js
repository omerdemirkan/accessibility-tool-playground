const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const {
    promises: { writeFile },
} = require("fs");

const url = "https://www.csun.edu";

(async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
        logLevel: "info",
        output: "html",
        onlyCategories: ["accessibility"],
        port: chrome.port,
    };
    const runnerResult = await lighthouse(url, options);

    // const reportHtml = runnerResult.report;

    console.log(runnerResult.lhr.categories.accessibility);

    await writeFile(
        require.resolve("../../sample/lighthouse.json"),
        JSON.stringify(runnerResult, null, 1)
    );
    await writeFile(
        require.resolve("../../sample/lighthouse-accessibility.json"),
        JSON.stringify(runnerResult.lhr.categories.accessibility, null, 1)
    );

    await chrome.kill();
})();
