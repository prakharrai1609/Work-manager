const express = require("express");
const app = express();
const day = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat", "Sun"];
const date = require(__dirname + "/date.js");
let list = [];
let WorkList = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// HOME ROUTE

app.post("/", (req, res) => {
  // console.log(req.body);
  let item = req.body.newItem;
  if (req.body.submit === "Work list") {
    WorkList.push(item);
    res.redirect("/work");
  } else {
    list.push(item);
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  let currDay = date.getDate();
  res.render("list", { listType: currDay, list: list });
});

// WORK ROUTE

app.get("/work", (req, res) => {
  res.render("list", { listType: "Work list", list: WorkList });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  WorkList.push(item);
  res.redirect("/work");
});

app.listen(5000, (req, res) => {
  console.log("Server is listening...");
});

// ABOUT PAGE

app.get("/about", (req, res) => {
  res.render("about");
});
