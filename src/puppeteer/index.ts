import puppeteer from "puppeteer";

const spwaUrl = "https://synonymy-app.herokuapp.com/";

(async function () {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(spwaUrl, { waitUntil: "networkidle0" });

    await page.screenshot({ path: "screenshot.png" });

    await browser.close();
})();
