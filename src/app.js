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
      query: {
        required: "?code=",
      },
    })
  );
});

app.get("/api/obfuscate", (req, res) => {
  const codeParams = req.query.code;
  if (!codeParams)
    return res.send({
      error: true,
      message: "Code Parameter / Query must be provided",
      codeParams: codeParams || "",
    });

  try {
    res.send({
      error: false,
      status: res.statusCode,
      codeParams,
      detail: obfuscator.obfuscate(codeParams),
      result: obfuscator.obfuscate(codeParams).getObfuscatedCode(),
    });
  } catch (err) {
    return res.send({
      error: true,
      codeParams,
      message: `${err}`,
    });
  }
});

app.get("/api/*", (_req, res) => {
  res.send({
    error: false,
    status: res.statusCode,
    message: "The only available endpoint is api/obfuscate",
  });
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
