const express = require("express");
const app = express();
//const { Blockchain, Block, chainDB } = require("./simpleChain");

let chain;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/block/:blockHeight", async (req, res) => {
  try {
    const { blockHeight } = req.params;
    console.log(req.params);
    if (!blockHeight)
      return res.send(`{"error": "Get block required height."}`);
    // const block = await
    res.send(`{ "Block": "${blockHeight}", "data": "some data"}`);
  } catch (e) {
    res.send(`{"error": "get block => ${e}"}`);
  }
});

app.post("/block", async (req, res) => {
  try {
    const blockHeight = Math.floor(Math.random() * 10);
    const { data } = req.body;
    if (!data) return res.send(`{"error": "Add block requires data."}`);
    res.send(`{ "height": "${blockHeight}", "data": "${data}"}`);
  } catch (e) {
    res.send(`{"error": "add block => ${e}"}`);
  }
});

module.exports = app;
