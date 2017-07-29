// import
require("app-module-path").addPath(__dirname);
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const headers = require("middleware/headers");
const options = require("middleware/options");
const errHandler = require("middleware/error");
const routes = require("routes");

// initialize
const app = express();
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 3000;

// configure app
app.use(jsonParser);
app.use(logger("dev"));
app.use(headers);
app.use(options);
app.use("/", routes);
app.use(errHandler);

// listen on port
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

module.exports = app;
