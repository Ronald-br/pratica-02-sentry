const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://76b9c4a54dc66ba230af533a229bff27@o4512222982504448.ingest.us.sentry.io/4512259644719104",
  sendDefaultPii: true,
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App da Prática 02 rodando!");
});

app.get("/debug-sentry", (req, res) => {
  throw new Error("Erro proposital para teste do Sentry!");
});

Sentry.setupExpressErrorHandler(app);

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000");
});