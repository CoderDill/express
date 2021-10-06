const express = require("express");

const app = express();

app.get("/dogs", (req, res) => {
    console.log("you got the dogs")
    res.send("Woof Woof")
})


app.listen(4000, () => {
  console.log("App on port 4000");
});
