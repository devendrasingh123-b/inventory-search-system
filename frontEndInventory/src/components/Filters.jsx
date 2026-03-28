import React from "react";

const Filters = ({ filters, onChange }) => {
  return (
    <div>
      {/*  for Category Dropdown */}
      <select
        name="category"
        value={filters.category}
        onChange={onChange}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Grocery">Grocery</option>
        <option value="Furniture">Furniture</option>
        <option value="Appliances">Appliances</option>

      </select>

      {/* Min Price  input box */}
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={onChange}
      />

      {/* Max Price  box*/}
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={onChange}
      />
    </div>
  );
};

export default Filters;