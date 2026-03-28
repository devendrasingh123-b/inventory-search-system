const express = require("express");
const connectToDB = require("./config/db");
require('dotenv').config()

const supplierRoutes = require("./routes/supplierRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const searchRoutes = require("./routes/searchRoutes");
const cors = require("cors");
const app = express();

// 👉 middleware
app.use(express.json());
app.use(cors());
// 👉 DB connect
connectToDB();

// 👉 Routes use करना
app.use("/supplier", supplierRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/search", searchRoutes);

// 👉 test route
app.get("/test", (req, res) => {
  res.send("TEST Rout...");
});

// 👉 server start
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});