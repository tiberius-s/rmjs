// import
require("app-module-path").addPath(__dirname);
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const errHandler = require("middleware/error");
const routes = require("routes");

// initialize
const app = express();
const PORT = process.env.PORT || 3001;
const jsonParser = bodyParser.json({ type: 'application/json' });

// configure app
app.use(logger("dev"));
app.use(jsonParser);
app.use("/", routes);
app.use(errHandler);

// listen on port
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

module.exports = app;
