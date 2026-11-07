require('dotenv').config();

const express = require("express"),
    app = express(),
    exphbs = require("express-handlebars"),
    http = require('http'),

    PORT = Number(process.env.PORT || 88);


app.use(express.urlencoded({ extended: true, limit: '32kb' }));
app.use(express.json({ limit: '32kb' }));

// set public directory for assetts
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main", partialsDir: __dirname + "/views/" }));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render("index", {});
});

http.createServer(app).listen(PORT, '127.0.0.1', () => {
    console.log(`Development HTTP server listening on port ${PORT}; `);
});