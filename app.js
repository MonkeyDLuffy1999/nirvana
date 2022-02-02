//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const ejs = require("ejs");


let data = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nirvana'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(process.env.PORT || 3000, function(req, res) {
    console.log("Listening at port 3000");
})

app.get("/", function(req, res) {
    res.render("home.ejs");
})

let sql = "select * from groundfloor";

app.get("/ground", (req, res) => {
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Success");

        data = result;
        // data.push(result[0]);
        console.log(data[0]);


        res.render("ground", { data: data });
    })

})

app.post("/ground", function(req, res) {


    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result[0].name);
        console.log("Success");

        data = result;
        // data.push(result[0]);

        res.render("ground", { data: data });
    })
})