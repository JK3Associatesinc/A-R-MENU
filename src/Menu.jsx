import { Link } from "react-router-dom";
import { menuItems } from "./data/menuItems";

export default function Menu() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>📋 AR Restaurant Menu</h1>
      <p>Tap on any item to see it in Augmented Reality</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map(item => (
          <li key={item.id} style={{ margin: "20px 0" }}>
            <div style={{
              border: "1px solid #ccc",
              padding: 20,
              borderRadius: 10,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <h2>{item.name}</h2>
              <Link to={`/ar/${item.id}`}>
                <button style={{
                  padding: "10px 20px",
                  fontSize: 16,
                  background: "#0070f3",
                  color: "white",
                  border: "none",
                  borderRadius: 5
                }}>
                  View in AR
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
