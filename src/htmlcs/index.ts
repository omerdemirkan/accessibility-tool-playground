import { testUrl, testRawHtml } from "../data";
import { evaluateUrl, evaluateRawHtml } from "./utils";
import server from "./server";

(async function () {
    const results = await evaluateUrl(testUrl);
    console.log(results);
})();

server.listen(5000, () => console.log("server listening on port 5000"));
