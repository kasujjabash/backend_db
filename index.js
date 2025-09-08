const express = require('express');
const server = express();

const prisma = require('./prisma/prismaClient');

server.get('/', (req, res) => {
  res.send('Server is live and ready to give you the data!');
});

server.get("/quotes", async (req, res) => {
  try {
    let quotes = await prisma.quote.findMany();
    res.send(quotes);
  } catch (error) {
    res.send(error)
  }
  // res.send("Here is a random quote!");
});


// server.post("/quotes", (req, res) => {
//   res.send("Quote created!");
// });

server.post("/authors", (req, res) => {
  res.send("Author created!");
});

const PORT = 4001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
