const routes = require("express").Router();
const request = require("routes/calls");
const headers = require("middleware/headers");
const options = require("middleware/options");

// configure router
routes.use(headers);
routes.use(options);

// administration
routes.get("/administration/users/current", request.send(200));
routes.get("/administration/users/:acctId", request.send(200));

// campaigns
routes.post('/campaigns/:acctId', request.send(201));
routes.get('/campaigns/scheduled', request.send(200));

// lists
routes.get("/lists/:acctId", request.send(200));
routes.post("/lists/:acctId", request.send(201));
routes.get("/lists/:acctId/:list", request.send(200));
routes.put("/lists/:acctId/:list", request.send(204));
routes.delete("/lists/:acctId/:list", request.send(204));

// list recipients
routes.post("/lists/recipients/:acctId/:listId", request.send(201));
routes.get("/lists/recipients/:acctId/:listId/:email", request.send(200));
routes.put("/lists/recipients/:acctId/:listId/:email", request.send(204));
routes.delete("/lists/recipients/:acctId/:listId/:email", request.send(204));

// mailings
routes.post("/reports/mailings/summary/:acctId", request.send(201));
routes.post("/mailings/:acctId", request.send(201));
routes.get("/mailings/:acctId/:mailId", request.send(200));
routes.put("/mailings/:acctId/:mailId", request.send(204));
routes.delete("/mailings/:acctId/:mailId", request.send(204));

// For testing
routes.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello World!" });
});

module.exports = routes;
