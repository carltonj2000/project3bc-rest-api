const express = require("express");
const app = express();
const { Blockchain, Block, chainDB } = require("./simpleChain");

app.chain = new Blockchain();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/block/:blockHeight", (req, res) => {
  const { blockHeight } = req.params;
  console.log("height =", blockHeight);
  if (!blockHeight) return res.send({ error: "Get block required height." });
  app.chain
    .getBlock(blockHeight)
    .then(block => {
      console.log("blk =>", block);
      res.send(block);
    })
    .catch(e => res.send({ error: `get block => ${e}` }));
});

app.post("/block", (req, res) => {
  const { body } = req.body;
  if (!body) return res.send({ error: "Add block requires body." });
  app.chain
    .addBlock(new Block(body))
    .then(block => {
      console.log("add blk =>", block);
      res.send(block);
    })
    .catch(e => res.send({ error: `add block => ${e}` }));
});

module.exports = app;
