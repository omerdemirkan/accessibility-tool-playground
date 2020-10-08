const puppeteer = require("puppeteer");
const { run } = require("html_codesniffer");

module.exports.evaluateUrl = async function (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });
    await page.addScriptTag({
        path: require.resolve("html_codesniffer/build/HTMLCS.js"),
    });

    const htmlcsResults = await page.evaluate(async function () {
        HTMLCS_RUNNER.run("Section508");
        let messages = HTMLCS.getMessages();

        const messagesHashTable = {};
        messages.forEach(function (message) {
            try {
                messagesHashTable[message.code].push(message);
            } catch (e) {
                messagesHashTable[message.code] = [message];
            }
            delete message.code;
        });
        return messagesHashTable;
    });

    browser.close();

    return htmlcsResults;
};

module.exports.evaluateRawHtml = function (content) {
    run(console.log, content);
};
