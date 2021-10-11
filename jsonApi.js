const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CANDIES = [
  { name: "snickers", qty: 43, price: 1.5 },
  { name: "payday", qty: 34, price: 0.99 }
];

app.get("/candies", (req, res) => {
  res.json(CANDIES);
});

app.post("/candies", (req, res) => {
    CANDIES.push(res.body)
    res.json(CANDIES)
})

app.listen(4000, () => {
  console.log("App on port 4000");
});
