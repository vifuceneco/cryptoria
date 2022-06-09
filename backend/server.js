const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const CryptocurrencyRoutes = require("./routes/cryptocurrency");
const app = express();

require('dotenv').config();

ATLAS_USER = process.env.ATLAS_USER || '';
ATLAS_PASS = process.env.ATLAS_PASS || '';
BACKEND_PORT = process.env.BACKEND_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/cryptocurrency", CryptocurrencyRoutes);

app.listen(BACKEND_PORT, () => {
  console.log("Server levantado en 3001");
});

mongoose
  .connect("mongodb+srv://" + ATLAS_USER + ":" + ATLAS_PASS + "@ayi-cluster.jhcut.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to MongoDB Atlas with user: " + ATLAS_USER)
  });
