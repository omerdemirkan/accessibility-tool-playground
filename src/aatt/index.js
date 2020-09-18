const { evaluate } = require("aatt");

evaluate({
    source:
        "<html xml:lang='en-gb'><head><title>Foo</title></head><body><p>Bar</p></body></html>",
    output: "json",
    engine: "htmlcs",
    level: "WCAG2A",
})
    .then(console.log)
    .catch(console.error);
