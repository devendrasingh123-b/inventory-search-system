
export const searchProducts = async (params) => {
  try {
    // console.log(params)
    const query = new URLSearchParams(params).toString();
    // console.log(query)
    const res = await fetch(`https://inventory-search-system-1.onrender.com/search?${query}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("API Error", err);
  }
};

