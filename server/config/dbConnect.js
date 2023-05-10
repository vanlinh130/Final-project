const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MonDB_URL, () => {
  console.log("Connected to Mongodb");
});