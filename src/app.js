const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const obfuscator = require("javascript-obfuscator");
const format = require("json-beautify");

app.get("/", (_req, res) => {
  res.send(
    format({
      error: false,
      status: res.statusCode,
      endpoint: "api/obfuscate",
      about:
        "Code obfuscation is the technique of making the source code of an application difficult to read and comprehend so it becomes almost impossible for any unauthorized third-party group or individual, using any available tools, to reverse engineer it",
      query: {
        required: "?code=",
      },
    })
  );
});

app.get("/api/:type", (req, res) => {
  const codeQuery = req.query.code;
  const apiType = req.params.type;

  if (apiType !== "obfuscate")
    return res.send({
      error: true,
      message: "The only available params is api/obfuscate",
    });

  if (!codeQuery)
    return res.send({
      error: true,
      message: "Code Parameter / Query must be provided",
      codeQuery: codeQuery || "",
    });

  try {
    res.send({
      error: false,
      status: res.statusCode,
      codeQuery,
      detail: obfuscator.obfuscate(codeQuery).options,
      result: obfuscator.obfuscate(codeQuery).getObfuscatedCode(),
    });
  } catch (err) {
    return res.send({
      error: true,
      codeQuery,
      message: `${err}`,
    });
  }
});

app.get("*", (_req, res) => {
  res.send({
    error: true,
    message: "Route not found",
    available: {
      required: "api/obfuscate",
      home: "/",
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
