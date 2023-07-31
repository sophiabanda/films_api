const express = require("express"),
  app = express(),
  morgan = require("morgan");

app.use(morgan("common"));

let topBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    title: "Twilight",
    author: "Stephanie Meyer",
  },
];

//express.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.send("Welcome to my book club!");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

app.get("/books", (req, res) => {
  res.json(topBooks);
});
