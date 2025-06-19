import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("#3498db");

  const colors = [
    { name: "Blue", value: "#3498db" },
    { name: "Red", value: "#e74c3c" },
    { name: "Green", value: "#2ecc71" },
    { name: "Purple", value: "#9b59b6" },
    { name: "Orange", value: "#f39c12" },
    { name: "Pink", value: "#e91e63" },
  ];

  // Function to change color
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="main-container" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h1 className="primary-heading">🎨 Color Changer</h1>
        <p className="instruct">
          Click a button to change the background color!
        </p>
        <div className="colors">
          {colors.map((color) => (
            <button
              className="buttons"
              key={color.name}
              onClick={() => changeColor(color.value)}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              style={{ backgroundColor: color.value }}
            >
              {color.name}
            </button>
          ))}
        </div>
        <p className="current-color">
          Current color: <strong>{bgColor}</strong>
        </p>
      </div>
    </div>
  );
}
