const express = require("express");
const router = express.Router();

const { createInventory, getInventory } = require("../controllers/inventoryController");

// 👉 POST /inventory
router.post("/", createInventory);

// 👉 GET /inventory
router.get("/", getInventory);

module.exports = router;