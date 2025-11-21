// Fetch products from backend API
async function loadProducts() {
  const list = document.getElementById("product-list");

  try {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();

    data.forEach((p) => {
      const item = document.createElement("li");
      item.className = "product";
      item.innerHTML = `
        <strong>${p.name}</strong><br>
        Price: ₹${p.price}
      `;
      list.appendChild(item);
    });

  } catch (err) {
    console.log("Error fetching products:", err);
    list.innerHTML = "<p style='color:red;'>Unable to load products.</p>";
  }
}

loadProducts();
