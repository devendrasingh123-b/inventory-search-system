#  Inventory Search System (MERN Stack)

##  Project Overview

I built a simple inventory search system where users can search products using filters like product name, category, and price range.
This project also includes supplier and inventory management using a database.

---
##  Features

* Search products by name (partial match)
* Filter by category
* Filter by price range (min & max)
* Case-insensitive search
* Combine multiple filters
* Show "No results found" when no data
* Add suppliers
* Add inventory linked to suppliers
* View all inventory

---

##  Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)

---

##  Project Structure

### Backend

* Models → Supplier, Inventory
* Controllers → Logic for APIs
* Routes → API endpoints
* Config → Database connection

### Frontend

* Components → SearchBar, Filters, ProductList
* Pages → Home
* Services → API calls

---

##  Search Logic (Assignment A)

I used simple filtering logic.

* First, I fetch data from the backend.
* Then I apply filters step by step:

  * Product name using `includes()` (case-insensitive)
  * Category match
  * Price range (min & max)

Example:

* If user enters "lap", it matches "Laptop"
* Multiple filters can be applied together

If no filters are provided, all data is returned.

---

##  Database Schema (Assignment B)

### Supplier Collection

* id
* name
* city

### Inventory Collection

* id
* supplier_id (reference to Supplier)
* product_name
* category
* quantity
* price

### Relationship

* One supplier can have multiple inventory items (One-to-Many)

---

##  Why I Chose MongoDB (NoSQL)

I used MongoDB because:

* It is flexible and easy to use
* Schema is not strict (good for beginners)
* Easy to connect with Node.js using Mongoose
* Good for rapid development

---

##  Required Query (Assignment B)

To calculate total inventory value:

* Formula: `quantity × price`

In a real-world case, I would:

* Group inventory by supplier
* Calculate total value
* Sort suppliers based on total value

---

##  Performance Improvement

For large datasets, I would improve performance by:

* Using database-level filtering instead of array filtering
* Adding indexing on:

  * product_name
  * category
  * price
* Using MongoDB queries (`$regex`, `$gte`, `$lte`) instead of `.filter()`

---

##  API Endpoints

### Supplier

* `POST /supplier` → Create supplier

### Inventory

* `POST /inventory` → Add inventory
* `GET /inventory` → Get all inventory

### Search

* `GET /search?q=&category=&minPrice=&maxPrice=` → Search products

---

##  How to Run the Project

### Backend

1. Go to backend folder
2. Install dependencies:

   ```
   npm install
   ```
3. Start server:

   ```
   node app.js
   ```

---

### Frontend

1. Go to frontend folder
2. Install dependencies:

   ```
   npm install
   ```
3. Run app:

   ```
   npm run dev
   ```

---

##  Notes

* This project is built for learning and interview practice
* Simple UI is used (no Tailwind)
* Backend and frontend are connected using REST APIs

---

##  Conclusion

This project helped me understand:

* API development using Express
* MongoDB schema and relationships
* Search filtering logic
* Connecting frontend with backend

---
