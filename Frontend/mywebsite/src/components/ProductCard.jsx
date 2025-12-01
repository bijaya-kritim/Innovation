export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card zoom-effect" onClick={onClick}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
    </div>
  );
}
