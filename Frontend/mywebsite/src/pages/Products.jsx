import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import PreviewModal from "../components/PreviewModal";

export default function Products() {
  const [category, setCategory] = useState("all");
  const [preview, setPreview] = useState(null);

  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  return (
    <section className="products-section">
      <h2 className="section-title">Our Laptops</h2>

      <div className="filters">
        {["all", "gaming", "business", "student", "ultrabook"].map(cat => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map(p => (
          <ProductCard
            key={p.name}
            product={p}
            onClick={() => setPreview(p)}
          />
        ))}
      </div>

     
      <PreviewModal product={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
