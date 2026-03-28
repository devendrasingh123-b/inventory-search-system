const Inventory = require("../models/Inventory");
const Supplier = require("../models/Supplier");

// 👉 Add Inventory
const createInventory = async (req, res) => {
    try {
        const { supplier_id, product_name, category, quantity, price } = req.body;

        
        if (!supplier_id || !product_name || !category) {
            return res.status(400).json({ message: "All fields required" });
        }

        if (quantity < 0) {
            return res.status(400).json({ message: "Quantity cannot be negative" });
        }

        if (price <= 0) {
            return res.status(400).json({ message: "Price must be greater than 0" });
        }

        // 🔥 Check supplier exists or not
        const supplierExists = await Supplier.findById(supplier_id);
        if (!supplierExists) {
            return res.status(404).json({ message: "Supplier not found" });
        }

        const inventory = new Inventory({
            supplier_id,
            product_name,
            category,
            quantity,
            price
        });

        await inventory.save();

        res.status(201).json({
            message: "Inventory added successfully",
            inventory
        });

    } catch (err) {
        res.status(500).json({ message: "Error adding inventory", error: err.message });
    }
};


// 👉 Get All Inventory
const getInventory = async (req, res) => {
    try {

        //  const data = await Inventory.find();
        const data = await Inventory.find().populate("supplier_id");

        res.status(200).json({
            count: data.length,
            data
        });

    } catch (err) {
        res.status(500).json({ message: "Error fetching inventory", error: err.message });
    }
};

module.exports = { createInventory, getInventory };