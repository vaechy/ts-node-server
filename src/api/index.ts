import express from "express";
const fs = require("fs");
const path = require("path");
const app = express();
import Mock from "mockjs";
const port = 9651;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/user_list", (req, res) => {
  const users = fs.readFileSync(
    path.resolve(__dirname, "../data/users.json"),
    "utf-8"
  );
  res.json(JSON.parse(users));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
