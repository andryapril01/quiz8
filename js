// Array of products
const products = [
  { name: "Topi", price: 20.0, category: "Atribute Sekolah" },
  { name: "Dasi", price: 10.0, category: "Atribute Sekolah" },
  { name: "Gesper", price: 15.0, category: "Atribute Sekolah" },
  { name: "Pulpen", price: 3.0, category: "Alat Tulis" },
  { name: "Penggaris", price: 5.0, category: "Alat Tulis" },
  { name: "Pensil", price: 3.0, category: "Alat Tulis" },
];

// Function to generate HTML for products
const generateProductHTML = (product, index) => `
    <div class="product ${product.bought ? "bought" : ""}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Category: ${product.category}</p>
        <button onclick="buyProduct(${index})" ${
  product.bought ? "disabled" : ""
}>
            ${product.bought ? "Bought" : "Buy"}
        </button>
    </div>
`;

// Function to render products
const renderProducts = () => {
  document.getElementById("product-list").innerHTML = products
    .map(generateProductHTML)
    .join("");
};

// Function to handle product purchase
const buyProduct = (index) => {
  products[index].bought = true;
  renderProducts();
};

// Initial render
renderProducts();
