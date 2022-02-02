const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bodyParser = require("body-parser");;
const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nirvana'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

let data = [];

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/ground", (req, res) => {


    let sqlSelect = "select * from groundfloor";
    con.query(sqlSelect, (err, result) => {
        if (err) throw err;
        console.log("Success");

        data = result;
        // data.push(result[0]);
        console.log(data[0]);
        res.render("ground", { data: data });
    })
})

router.post("/ground", (req, res) => {


    let sqlSelect = "select * from groundfloor where id<15";
    con.query(sqlSelect, (err, result) => {
        if (err) throw err;
        console.log("Success");

        data = result;
        // data.push(result[0]);
        console.log(data[0]);
        res.render("ground", { data: data });
    })
})

router.post("/first", (req, res) => {


    let sqlSelect = "select * from groundfloor where id>14";
    con.query(sqlSelect, (err, result) => {
        if (err) throw err;
        console.log("Success");

        data = result;
        // data.push(result[0]);
        console.log(data[0]);
        res.render("ground", { data: data });
    })
})


router.post("/post", (req, res)=>{

	let newEntry = {
	id: req.body.id,
	name: req.body.name,
	drink: req.body.drink,
	toast: req.body.toast,
	extras:req.body.extras,
	cereals:req.body.cereals,
	allergies:req.body.allergies
}

let sqlInsert = "insert into groundfloor set ?";
let query = con.query(sqlInsert, newEntry, (err, result) =>{
	if (err) throw err;
    console.log("result");
});

res.redirect("/ground");
});



module.exports = router;