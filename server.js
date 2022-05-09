const express = require("express");
const app = express();
let path = require("path");
let bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "build")));

let dataController = require("./dataController");

app.get("/api/data", dataController.getData);

const port = 3000;

app.listen(process.env.PORT || port);
