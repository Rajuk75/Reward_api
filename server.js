const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./src/routes/user.route");
const config = require("./src/config/config");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();

app.use(express.json());


connectDB();

app.use("/",userRoute)

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(config.PORT, () =>
  console.log(`Server listening on port ${config.PORT}`)
);
