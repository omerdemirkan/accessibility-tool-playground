import { testUrl, testRawHtml } from "../data";
import { evaluateUrl, evaluateRawHtml } from "./utils";

(async function () {
    const results = await evaluateUrl(testUrl);
    console.log(results);
})();
