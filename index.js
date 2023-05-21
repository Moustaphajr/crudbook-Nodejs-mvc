const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const bookapp = require("./routes/route");
const url =
  "mongodb+srv://tapha:tapha@blogtuts.4ymh827.mongodb.net/crudbook?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then((result) => app.listen(3000))

  .catch((error) => {
    console.log(error);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bookapp);
