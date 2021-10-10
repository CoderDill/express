const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});
app.get("/dogs", (req, res) => {
  console.log("you got the dogs");
  res.send("Woof Woof");
});

app.get("/cats", (req, res) => {
  console.log("you got the cats");
  res.send("Meow Meow");
});

app.get("/chickens", (req, res) => {
  res.send("BOCK BOCK")
})

app.post("/chickens", function createChicken(req, res) {
  res.send("You created a chicken, not.");
});

app.listen(4000, () => {
  console.log("App on port 4000");
});
