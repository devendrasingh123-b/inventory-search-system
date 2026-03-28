const express = require("express");
const { createSupplier } = require("../controllers/supplierController");
const router = express.Router();


// const { createSupplier } = require("../controllers/supplierController");

router.post("/", createSupplier);

module.exports = router;


