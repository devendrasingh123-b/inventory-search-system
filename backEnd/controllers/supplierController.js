const Supplier = require("../models/Supplier");



// 👉 Create Supplier
const createSupplier = async (req, res) => {
    try {
        const { name, city } = req.body;

        // validation if we don't have name and city
        if (!name || !city) {
            return res.status(400).json({ message: "Name and city required" });
        }

        // const supplier = new Supplier({ name, city });
        // await supplier.save();

    //  const supplier=await supplier.create({name,city})
    const supplier = await Supplier.create({ name, city });

        res.status(201).json({
            message: "Supplier created successfully",
            supplier
        });

    } catch (err) {
        res.status(500).json({ message: "Error creating supplier", error: err.message });
    }
};

module.exports = { createSupplier };