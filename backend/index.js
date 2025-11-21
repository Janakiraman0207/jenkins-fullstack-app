const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2500 },
    { id: 3, name: "Smartwatch", price: 3999 }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
