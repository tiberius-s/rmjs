const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = 3000;

app.use(express.static('build'))

server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));