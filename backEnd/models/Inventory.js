// Inventory Schema

const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",   // relation (important 🔥)
        required: true
    },
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0   // quantity >= 0
    },
    price: {
        type: Number,
        required: true,
        min: 1   // price > 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Inventory", inventorySchema);