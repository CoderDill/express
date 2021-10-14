const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log("Server got a request!")
    next();
})

app.use((req, res, next) => {
    console.log("This will also run.")
    next();
}) 

app.listen(3000, () => {
    console.log('App on port 3000');
})