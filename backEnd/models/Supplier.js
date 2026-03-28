// Supplier Schema

const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true   // extra spaces remove करेगा
    },
    city: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true   // createdAt, updatedAt auto
});

module.exports = mongoose.model("Supplier", supplierSchema);