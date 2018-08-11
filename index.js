const app = require("./app");

const port = process.env.PORT || 8000;

app.listen(port, async () => {
  // bc = await new Blockchain();
  console.log(`Example app listening on port ${port}!`);
});
