import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Coffee", price: 5 },
  { id: 2, name: "Tea", price: 3 },
  { id: 3, name: "Cake", price: 10 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>
      <div>
        <h3>Products</h3>
        {PRODUCTS.map((p) => (
          <div key={p.id}>
            {p.name} - ${p.price}{" "}
            <button onClick={() => addToCart(p)} className="border p-1 bg-red-500">Add</button>
          </div>
        ))}
      </div>

      <div style={{ borderLeft: "1px solid gray", paddingLeft: "20px" }}>
        <h3>Your Cart</h3>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} (x{item.qty}) - ${item.price * item.qty}
          </p>
        ))}
        <hr />
        <strong>Total: ${totalPrice}</strong>
      </div>
    </div>
  );
}