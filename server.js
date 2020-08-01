const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.static(__dirname + "/public"));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "") });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);