let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

app.use(express.static(__dirname + "/public"));

































 module.exports = app;
