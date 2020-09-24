const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

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

    await chrome.kill();
})();
