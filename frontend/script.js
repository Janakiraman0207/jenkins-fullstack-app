// Build API base URL dynamically using current hostname
const API_BASE = "http://" + window.location.hostname + ":5000";

const productsGrid = document.getElementById("products-grid");
const loadingEl = document.getElementById("loading");
const cartCountEl = document.getElementById("cart-count");
const yearEl = document.getElementById("year");

let cartCount = 0;

// Simple image mapping just for better UI
const productImages = {
  1: "https://images.pexels.com/photos/1813124/pexels-photo-1813124.jpeg?auto=compress&cs=tinysrgb&w=600",
  2: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=600",
  3: "https://images.pexels.com/photos/19081933/pexels-photo-19081933.jpeg?auto=compress&cs=tinysrgb&w=600"
};



// Update footer year
yearEl.textContent = new Date().getFullYear();

function renderProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const img = document.createElement("img");
  img.src = productImages[product.id] || "https://via.placeholder.com/200x150";
  img.alt = product.name;

  imageWrap.appendChild(img);

  const nameEl = document.createElement("div");
  nameEl.className = "product-name";
  nameEl.textContent = product.name;

  const priceEl = document.createElement("div");
  priceEl.className = "product-price";
  priceEl.textContent = "₹" + product.price.toLocaleString("en-IN");

  const idEl = document.createElement("div");
  idEl.className = "product-id";
  idEl.textContent = "Product ID: " + product.id;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const btn = document.createElement("button");
  btn.className = "add-btn";
  btn.textContent = "Add to Cart";

  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
  });

  actions.appendChild(btn);

  card.appendChild(imageWrap);
  card.appendChild(nameEl);
  card.appendChild(priceEl);
  card.appendChild(idEl);
  card.appendChild(actions);

  return card;
}

async function loadProducts() {
  try {
    const res = await fetch(API_BASE + "/api/products");
    const data = await res.json();

    loadingEl.style.display = "none";
    productsGrid.innerHTML = "";

    data.forEach((p) => {
      const card = renderProductCard(p);
      productsGrid.appendChild(card);
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    loadingEl.textContent = "Unable to load products.";
  }
}

loadProducts();
