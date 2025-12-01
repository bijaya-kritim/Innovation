import { useState, useEffect } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeItem = i => {
    const updated = items.filter((_, index) => index !== i);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <section className="contact-section">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item, i) => (
            <div key={i} style={{background:"#fff",padding:"15px",margin:"10px 0",borderRadius:"10px"}}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button className="btn small" onClick={() => removeItem(i)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </section>
  );
}
