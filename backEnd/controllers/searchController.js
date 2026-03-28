const Inventory = require("../models/Inventory");

const searchInventory = async (req, res) => {
  try {
    const { q, category, minPrice, maxPrice } = req.query;
    console.log(q,category,minPrice,maxPrice)

    // 👉 पहले सारा data ले आओ (simple approach)
    let data = await Inventory.find();

    console.log(data)

    // 👉 name filter
    if (q) {
      data = data.filter(item =>
        item.product_name.toLowerCase().includes(q.toLowerCase())
      );
    }

    // 👉 category filter
    if (category) {
      data = data.filter(item =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // 👉 price filter
    if (minPrice) {
      data = data.filter(item => item.price >= Number(minPrice));
    }

    if (maxPrice) {
      data = data.filter(item => item.price <= Number(maxPrice));
    }

    // 👉 invalid range
    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      return res.status(400).json({ message: "Invalid price range" });
    }

    // 👉 no result
    if (data.length === 0) {
      return res.json({ message: "No results found", data: [] });
    }

    res.json({
      count: data.length,
      data
    });

  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};

module.exports = { searchInventory };