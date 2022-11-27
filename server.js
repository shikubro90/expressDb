const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");

//middleware

app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//run server

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB err", err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
