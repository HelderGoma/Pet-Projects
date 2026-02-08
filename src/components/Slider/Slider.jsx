
import { useState } from "react";
import "./Slider.css"
import { Ellipse9, Ellipse4, Ellipse8 } from "../../assets/images/images";
 
const Slider = () => {
 const slides = [
    <img src={Ellipse9} alt="Slide 1" />,
    <img src={Ellipse4} alt="Slide 2" />,
    <img src={Ellipse8} alt="Slide 3" />,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider" >
      <button onClick={prevSlide}>←</button>

      <div
        className="slide"
      >
        {slides[current]}
      </div>

      <button onClick={nextSlide}>→</button>
    </div>
  );
};

export default Slider;