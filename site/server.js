// Initialize
const express = require('express');
const app = express();
const server = require('http').Server(app);
const PORT = 3000;

// serve the built application
app.use(express.static('build'))

// Server
server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));