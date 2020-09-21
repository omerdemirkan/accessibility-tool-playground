const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const url = "https://what-time.herokuapp.com/";

(async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
        logLevel: "info",
        output: "html",
        onlyCategories: ["accessibility"],
        port: chrome.port,
    };
    const runnerResult = await lighthouse(url, options);

    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;
    // console.log(reportHtml);

    console.log(runnerResult.lhr.categories.accessibility);

    await chrome.kill();
})();
