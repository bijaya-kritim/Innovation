import { Link } from "react-router-dom";

export default function PreviewModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="preview-box">
      <span onClick={onClose} className="close-btn">×</span>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${encodeURIComponent(product.name)}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
