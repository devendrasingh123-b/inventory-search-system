const express = require("express");
const router = express.Router();

const { searchInventory } = require("../controllers/searchController");

// 👉 GET /search
router.get("/", searchInventory);

module.exports = router;