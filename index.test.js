const request = require("supertest");
const rimraf = require("rimraf"); // utility to remove a non empty directory
const app = require("./app");
const { chainDB } = require("./simpleChain");

test("clear blockchain", done => {
  rimraf(chainDB, e => {
    if (e) console.error("Failed deleting DB", e);
    done();
  });
});

test("test server responds", () => {
  return (
    request(app)
      .get("/")
      //.expect(200) // short hand and same as line below
      .then(response => expect(response.statusCode).toBe(200))
  );
});

function getBlock(block) {
  return request(app)
    .get(`/block/${block}`)
    .expect("Content-type", /json/)
    .then(resp => {
      console.log(resp.text);
      return resp;
    });
}
test("get block 0", () => {
  return getBlock(0);
});

test("add block", () => {
  const body = "some data";

  return request(app)
    .post("/block")
    .send({ body: body })
    .expect("Content-type", /json/)
    .expect(200)
    .then(resp => {
      console.log(resp.text);
      return resp;
    });
});

test("get block 1", () => {
  return getBlock(1);
});
