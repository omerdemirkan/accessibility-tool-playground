const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

(async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
    const options = {
        logLevel: "info",
        output: "html",
        onlyCategories: ["accessibility"],
        port: chrome.port,
    };
    const runnerResult = await lighthouse("https://example.com", options);

    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;
    // console.log(reportHtml);

    // `.lhr` is the Lighthouse Result as a JS object
    console.log("Report is done for", runnerResult.lhr.finalUrl);
    console.log(
        "Accessibility score was",
        runnerResult.lhr.categories.accessibility.score * 100
    );
    console.log(runnerResult.lhr.categories.accessibility);

    await chrome.kill();
})();
