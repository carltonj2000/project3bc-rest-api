const { Blockchain, Block, chainDB } = require("./simpleChain");
const rimraf = require("rimraf"); // utility to remove a non empty directory

test("get block", async done => {
  let blockchain = new Blockchain();
  blockchain
    .finishActions()
    .then(() => done())
    .catch(e => console.log(e) || done());
});

test("add block", done => {
  let blockchain = new Blockchain();
  blockchain.validateBlock(0);
  blockchain.finishActions().then(() => done());
});

test("get chain", async done => {
  let blockchain = new Blockchain();
  blockchain
    .finishActions()
    .then(() => done())
    .catch(e => console.log(e) || done());
});

test("clear chain", async done => {
  await rimraf(chainDB, e => e && console.error("Failed deleting DB", e));
});
