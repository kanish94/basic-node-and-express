let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });
































 module.exports = app;
