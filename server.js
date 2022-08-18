const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectData = require("./Database/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());

// DATABASE CONNECTED
connectData();

app.get("/", (req, res) => {
  res.status(200).send(`Your OTP Sender App`);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!!";
  return res.status(status).json({ success: false, status, message });
});

app.listen(process.env.PORT, () => {
  console.log(`Your server is runnign at ${process.env.PORT}`);
});
