import React from "react";

const ProductItem = ({ item }) => {
    // console.log(item)
  return (
    <div className="card">
      <h3>{item.product_name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p><strong>Quantity:</strong> {item.quantity}</p>
    </div>
  );
};

export default ProductItem;