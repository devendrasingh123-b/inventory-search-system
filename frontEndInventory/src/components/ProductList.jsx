import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-data">No results found</p>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;