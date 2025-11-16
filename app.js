const express = require("express");
const calculateTotal = require("./calculateTotal");

const app = express();

app.get("/api/total", (req, res) => {
  const { a, b } = req.query;
  const total = calculateTotal(Number(a), Number(b));
  res.json({ total });
});

module.exports = app;
