import puppeteer from "puppeteer";
import htmlcs from "html_codesniffer";

export async function evaluateUrl(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let htmlcsResults = [];
    page.on("console", (msg) => {
        htmlcsResults.push(msg.text());
    });

    await page.goto(url);
    await page.addScriptTag({
        path: require.resolve("html_codesniffer/build/HTMLCS.js"),
    });

    await page.evaluate(`
        HTMLCS_RUNNER.run("WCAG2AAA")
    `);

    browser.close();

    return htmlcsResults;
}

export function evaluateRawHtml(content: string) {
    htmlcs.run(console.log, content);
}