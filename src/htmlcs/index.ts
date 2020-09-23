import { testUrl } from "../data";
import { evaluateUrl } from "./utils";

(async function () {
    const results = await evaluateUrl(testUrl);
    console.log(results);
})();
