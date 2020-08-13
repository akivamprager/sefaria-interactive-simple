const express = require("express");
const v1ApiRouter = require("./api/v1");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const app = express();
const port = 80;

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use("/api/v1", v1ApiRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})