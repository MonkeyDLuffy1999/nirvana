const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");




const app = express();

const indexRouter = require("./routes/dbcontroller");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.use("/", indexRouter);
app.use("/ground", indexRouter);
app.use("/post", indexRouter);

app.listen(process.env.PORT || 3000, (req, res) =>{
	console.log(" server started");
});