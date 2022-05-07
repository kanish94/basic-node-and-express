let express = require('express');
const req = require('express/lib/request');
const dotenv = require('dotenv').config()
let bodyParser = require('body-parser')

let app = express();

let uppercaseMessage = "Hello json".toUpperCase()

let absolutePath = __dirname + "/views/index.html"

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.method, req.path, "-", req.ip)
    next();
})

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": uppercaseMessage })
    } else {
        res.json({ "message": "Hello json" })
    }
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time})
})

app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word})
})

// Get Query Parameter Input from the Client
// The first and last name parameters should be encoded in a query string e.g. ?first=firstname&last=lastname
app.route("/name").get((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
}).post((req, res) => {
    console.log(req.query.first)
})
































module.exports = app;
