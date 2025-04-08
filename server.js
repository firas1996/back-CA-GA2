const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

const port = 1587;

app.listen(port, () => {
  try {
    console.log("The server is running !!!!");
  } catch (error) {
    console.log("Error: " + error);
  }
});
