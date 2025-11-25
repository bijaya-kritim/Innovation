// -------------------------------
// PRODUCT LIST (DATABASE)
// -------------------------------
const products = [
    {
        name: "Gaming Beast X1",
        price: 1299,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        desc: "16GB RAM • RTX Graphics • 1TB SSD • RGB Keyboard • Metal Body"
    },
    {
        name: "UltraSlim Air 14",
        price: 899,
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        desc: "8GB RAM • Ultra Lightweight • 512GB SSD • Long Battery Life"
    },
    {
        name: "Business Pro 15",
        price: 1099,
        img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800",
        desc: "16GB RAM • Fingerprint Sensor • 1TB SSD • Slim & Durable"
    },
    {
        name: "StudentBook S2",
        price: 599,
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800",
        desc: "8GB RAM • 256GB SSD • Lightweight • Perfect for school"
    },
    {
        name: "Predator GX7",
        price: 1499,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        desc: "32GB RAM • Ultra RTX GPU • 2TB SSD • Liquid Cooling"
    },
    {
        name: "FeatherLite 13",
        price: 999,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        desc: "Ultra Thin • 16GB RAM • 512GB SSD • Feather Weight"
    }
];


// -------------------------------
// PRODUCT FILTERING
// -------------------------------
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

if (filterButtons) {
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            btn.classList.add("active");

            const cat = btn.getAttribute("data-category");

            productCards.forEach(card => {
                if (cat === "all" || card.getAttribute("data-category") === cat) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}


// -------------------------------
// PRODUCT PREVIEW POPUP
// -------------------------------
function openPreview(card) {
    const box = document.getElementById("previewBox");

    document.getElementById("previewImg").src = card.querySelector("img").src;
    document.getElementById("previewTitle").textContent = card.querySelector("h3").textContent;
    document.getElementById("previewPrice").textContent = card.querySelector(".price").textContent;

    document.querySelector("#previewBox a.btn").href =
        "product.html?name=" + encodeURIComponent(card.querySelector("h3").textContent);

    box.style.display = "block";
}

function closePreview() {
    document.getElementById("previewBox").style.display = "none";
}


// -------------------------------
// DYNAMIC PRODUCT PAGE
// -------------------------------
if (window.location.pathname.includes("product.html")) {

    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");

    const product = products.find(p => p.name === productName);

    if (product) {
        document.getElementById("productImg").src = product.img;
        document.getElementById("productTitle").textContent = product.name;
        document.getElementById("productPrice").textContent = "$" + product.price;
        document.getElementById("productDescription").textContent = product.desc;

        // Add to cart button
        document.getElementById("addToCartBtn").onclick = () => addToCart(product);
    }
}


// -------------------------------
// ADD TO CART
// -------------------------------
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}


// -------------------------------
// CART PAGE
// -------------------------------
if (window.location.pathname.includes("cart.html")) {

    const container = document.getElementById("cartItems");
    const totalPriceBox = document.getElementById("totalPrice");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceBox.textContent = "";
    } else {
        let total = 0;
        container.innerHTML = "";

        cart.forEach((item, index) => {
            total += item.price;

            container.innerHTML += `
                <div style="background:#fff;padding:15px;margin:10px 0;border-radius:10px;">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                    <button onclick="removeItem(${index})" class="btn small">Remove</button>
                </div>
            `;
        });

        totalPriceBox.textContent = "Total: $" + total;
    }
}


// Remove item by index
function removeItem(i) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// MOBILE MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}

// CLOSE MENU WHEN CLICKING OUTSIDE
window.addEventListener("click", function(e) {
    const menu = document.getElementById("navMenu");
    const button = document.querySelector(".menu-toggle");

    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove("show");
    }
});

