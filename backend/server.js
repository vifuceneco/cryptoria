const express = require("express");
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();


app.listen(PORT, () => {
  console.log("Server levantado en 3001");
});

mongoose
  .connect("mongodb+srv://" + ATLAS_USER + ":" + ATLAS_PASS + "@ayi-cluster.jhcut.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB Atlas with user: " + ATLAS_USER)
  });
