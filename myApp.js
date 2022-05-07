let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

// Normal usage
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

































 module.exports = app;
