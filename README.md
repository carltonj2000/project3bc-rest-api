# Blockchain RESTful Web API with the Node.js Framework

- This repository contains the code for project 3 of the
  [Udacity Blockchain Nanodegree](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309).
- This project uses:
  - Node v10.8.0
  - Express v4.16.3
  - Google Chrome 68.0.3440.106 - for web frontend testing
  - To Do - Not necessary to meet project goals
    - Remove console.log on the server and client application.
    - Complete coding index.test.js tests using
      [jestjs](https://jestjs.io)
      and
      [supertest](https://www.npmjs.com/package/supertest).

## Run Project

To install dependences and start the server do the following:

```
yarn
yarn start
```

## Web API

The server provides the following endpoints.

### http://localhost:8000/block/{BLOCK_HEIGHT} GET

When a GET request is preformed at the URL noted above, the block data at {BLOCK_HEIGHT} is returned in a JSON format.

### http://localhost:8000/block POST

When a POST request is preformed at the URL noted above, with a JSON body in the following format { "body" : "data for block" }. The returned value will be the insertd block data in a JSON format.
