const express = require("express"); 
const app = express(); 
const port = 3000; 
require('dotenv').config();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));


const todoRouter = require("./routes/todoRouter");
const aboutRouter = require("./routes/aboutRouter");


const errorController = require('./controllers/errorController');

app.use("/", todoRouter);
app.use("/about", aboutRouter);
app.use(errorController.notFound);

app.use((req, res) => {
  res.status(404).render("404");
});


app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});


