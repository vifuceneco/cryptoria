const express = require ("express");
const CryptocurrencyController = require("../controllers/CryptocurrencyController");
const router = express.Router();

router.get("/", CryptocurrencyController.getAllCryptocurrencies);
router.get("/:id", CryptocurrencyController.getCryptocurrency);

module.exports = router;