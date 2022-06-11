const express = require ("express");
const CryptocurrencyController = require("../controllers/CryptocurrencyController");
const router = express.Router();

router.get("/", CryptocurrencyController.getAllCryptocurrencies);
router.get("/:id", CryptocurrencyController.getCryptocurrency);
router.post("/create", CryptocurrencyController.createCryptocurrency);

module.exports = router;