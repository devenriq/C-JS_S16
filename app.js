const express = require("express");
const { dbConnection } = require("./db/config");
const app = express();
const port = 3000;

dbConnection();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
