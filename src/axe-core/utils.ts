import axe from "axe-core";
import puppeteer from "puppeteer";

export async function evaluateUrl(url: string): Promise<axe.AxeResults> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.addScriptTag({
        path: require.resolve("axe-core"),
    });
    await page.goto(url);

    const axeResults = (await page.evaluate(
        "(async () => await axe.run())()"
    )) as axe.AxeResults;

    browser.close();

    return axeResults;
}

export async function evaluateRawHtml(
    rawHtml: string
): Promise<axe.AxeResults> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.addScriptTag({
        path: require.resolve("axe-core"),
    });
    await page.setContent(rawHtml);

    const axeResults = (await page.evaluate(
        "(async () => await axe.run())()"
    )) as axe.AxeResults;
    browser.close();

    return axeResults;
}

export async function evaluateUrls(urls: string[]): Promise<axe.AxeResults[]> {
    const browser = await puppeteer.launch();

    let promises: Promise<axe.AxeResults>[] = [];

    urls.forEach(function (url) {
        promises.push(
            (async function () {
                const page = await browser.newPage();
                await page.goto(url);
                await page.addScriptTag({
                    path: require.resolve("axe-core"),
                });
                const axeResults = (await page.evaluate(
                    "(async () => await axe.run())()"
                )) as axe.AxeResults;
                return axeResults;
            })()
        );
    });

    return await Promise.all(promises);
}
