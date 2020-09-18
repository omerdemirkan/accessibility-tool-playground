import axe from "axe-core";
import puppeteer from "puppeteer";
import util from "util";

const url = "https://what-time.herokuapp.com/";

const results = [];
let axeResults;

(async function () {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    await page.addScriptTag({
        path: require.resolve("axe-core"),
    });

    axeResults = await page.evaluate(`async () => console.log("hello")`);

    console.log(axeResults);

    browser.close();
})();
