import React, { useState } from "react";
import { searchProducts } from "../services/api";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import "../App.css";           

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const data = await searchProducts(filters);
    setProducts(data.data || []);
  };

  return (
    <div className="container">
      <h2 className="title">Inventory Search</h2>

      <div className="search-box">
        <SearchBar value={filters.q} onChange={handleChange} />
        <Filters filters={filters} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ProductList products={products} />
    </div>
  );
};

export default Home;