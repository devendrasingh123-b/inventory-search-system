import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="q"
      placeholder="Search product..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;