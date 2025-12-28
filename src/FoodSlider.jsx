//  import { useState } from "react";
import "./Food.css"

export default function FoodSlider() {
  const [position, setPosition] = useState(0);
  const step = 200;

  const slideRight = () => {
    setPosition(prev => prev - step);
  };

  const slideLeft = () => {
    setPosition(prev => Math.min(prev + step, 0));
  };

  return (
    <div>
      <h2>Order our best food options</h2>

      <div className="slider-wrapper">
        <button className="arrow" onClick={slideLeft}>←</button>

        <div className="slider">
          <div
            className="track"
            style={{ transform: `translateX(${position}px)` }}
          >
            {["Idli","Pongal","Biryani","Dosa","Vada","Poori","Cake"].map(item => (
              <div className="item" key={item}>
                <img src="https://via.placeholder.com/120" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow" onClick={slideRight}>→</button>
      </div>
    </div>
  );
}
