const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('Server is live and ready to give you the data!');
});

server.get("/quotes", (req, res) => {
  res.send("Here is a random quote!");
});

const PORT = 4001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
