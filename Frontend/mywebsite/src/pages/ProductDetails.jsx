import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { name } = useParams();
  const product = products.find(p => p.name === decodeURIComponent(name));

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (!product) return <h2>Product Not Found</h2>;

  return (
   <section className="product-page">
  <img className="product-img" src={product.img} alt={product.name} />
  <div className="product-info">
    <h2>{product.name}</h2>
    <p className="price">${product.price}</p>
    <p>{product.desc}</p>
    <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
</section>

  );
}
