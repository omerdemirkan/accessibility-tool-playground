import express, { Request, Response } from "express";
import puppeteer from "puppeteer";

// single page web application (client-side rendered)
const spwaUrl = "https://synonymy-app.herokuapp.com/";

function timeout(ms: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

const app = express();

app.get("/", async function (req: Request, res: Response) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let htmlcsResults = [];
    page.on("console", (msg) => {
        htmlcsResults.push(msg.text());
    });

    await page.goto(spwaUrl, { waitUntil: "load" });
    await page.addScriptTag({
        path: require.resolve("html_codesniffer/build/HTMLCS.js"),
    });

    res.send(await page.content());
});

export default app;
