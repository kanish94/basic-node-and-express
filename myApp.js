let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"
let publickPath = __dirname + "/public"

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

app.use(express.static(publickPath))

































 module.exports = app;
