const axe = require("axe-core");
const puppeteer = require("puppeteer");

module.exports.evaluateUrl = async function (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.addScriptTag({
        path: require.resolve("axe-core"),
    });

    const axeResults = await page.evaluate(async function () {
        const results = await axe.run();

        delete results.testEngine;
        delete results.testRunner;
        delete results.testEnvironment;
        delete results.timestamp;
        delete results.toolOptions;

        results.outcomes = {};

        const mapAuditFieldToResult = {
            violations: "violation",
            passes: "pass",
            incomplete: "incomplete",
            inapplicable: "inapplicable",
        };
        const auditFields = [
            "violations",
            "passes",
            "incomplete",
            "inapplicable",
        ];

        auditFields.forEach(function (auditField) {
            results[auditField].forEach(function (audit) {
                results.outcomes[audit.id] = mapAuditFieldToResult[auditField];
            });
        });

        results.violations.forEach((violation) => {
            violation.selectors = violation.nodes.map((node) => node.xpath);
        });
        return results;
    });

    axeResults.content = (await page.content()).replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ""
    );

    browser.close();

    return axeResults;
};

module.exports.evaluateRawHtml = async function (rawHtml) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(rawHtml);
    await page.addScriptTag({
        path: require.resolve("axe-core"),
    });

    const axeResults = await page.evaluate("axe.run()");
    browser.close();

    return axeResults;
};

module.exports.evaluateUrls = async function (urls) {
    const browser = await puppeteer.launch();

    let promises = [];

    urls.forEach(function (url) {
        promises.push(
            (async function () {
                const page = await browser.newPage();
                await page.goto(url);
                await page.addScriptTag({
                    path: require.resolve("axe-core"),
                });
                const axeResults = await page.evaluate(async () => axe.run());
                page.close();
                return axeResults;
            })()
        );
    });

    return await Promise.all(promises);
};
