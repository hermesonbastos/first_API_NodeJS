const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(200).send({
    mensagem: "Deu bom o server",
  });
});

module.exports = app;