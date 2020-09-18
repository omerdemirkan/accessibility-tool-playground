const axe = require("axe-core");
const puppeteer = require("puppeteer");
const util = require("util");

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

    axeResults = await page.evaluate(async () => await axe.run());

    console.log(axeResults);

    browser.close();
})();
