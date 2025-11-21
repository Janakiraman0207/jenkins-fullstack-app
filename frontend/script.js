async function loadProducts() {
  try {
    const response = await fetch("http://3.238.255.5:5000/api/products");
    const products = await response.json();

    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(p => {
      const item = document.createElement("li");
      item.textContent = `${p.name} - ₹${p.price}`;
      list.appendChild(item);
    });
  } catch (error) {
    document.getElementById("product-list").innerHTML =
      "<p style='color:red;'>Unable to load products.</p>";
  }
}

loadProducts();
