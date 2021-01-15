const express = require("express");
const cors = require("cors");
const app = express();
const port = 3080;

// app.get("/a", cors(), (req, res, next) => {
//   res.send("Hello World!a");
// });
app.get("/", cors(), (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const list = ["a", "b", "c", "d"];
do {
  console.log(i);
  i++;
} while (i > list.length);
