const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDb = require("./src/config/db");
const connectDB = require("./src/config/db");

connectDB();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
