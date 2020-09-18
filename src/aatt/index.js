import { evaluate } from "aatt";

evaluate({
    source:
        "<html xml:lang='en-gb'><head><title>Foo</title></head><body><p>Bar</p></body></html>",
    output: "json",
    engine: "htmlcs",
    level: "WCAG2A",
})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
