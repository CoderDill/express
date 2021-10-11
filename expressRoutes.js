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

app.get("/chickens/:chicken", (req, res) => {
  res.send("BOCK BOCK");
});

app.post("/chickens", function createChicken(req, res) {
  res.send("You created a chicken, not.");
});

const greetings = {
  en: "hello",
  fr: "bonjour",
  ic: "hallo",
  ja: "konnichiwa",
};

app.get("/greet/:language", (req, res) => {
  const lang = req.params.language;
  const greeting = greetings[lang];
  if (!greeting) return res.send("Invalid Language");
  res.send(greeting);
});

app.get("/search", (req, res) => {
  const { term = "pigs", sort = "top" } = req.query;
  return res.send(`Seach Page! Term is: ${term}, sort is: ${sort}`);
});

app.get("/show-me-headers", (req, res) => {
  res.send(req.headers);
});

app.get("/show-language", (req, res) => {
  const lang = req.headers["accept-language"];
  res.send(`Your language prefrence is ${lang}`);
});

app.listen(4000, () => {
  console.log("App on port 4000");
});
