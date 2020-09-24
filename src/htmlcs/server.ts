import express, { Request, Response } from "express";
import { testUrl } from "../data";
import puppeteer from "puppeteer";

const app = express();

app.get("/", async function (req: Request, res: Response) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let htmlcsResults = [];
    page.on("console", (msg) => {
        htmlcsResults.push(msg.text());
    });

    await page.goto(testUrl);
    await page.addScriptTag({
        path: require.resolve("html_codesniffer/build/HTMLCS.js"),
    });

    res.send(await page.content());
});

export default app;
