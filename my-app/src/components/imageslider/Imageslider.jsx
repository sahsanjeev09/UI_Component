import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Imageslider.css";

const Imageslider = ({
  images = [],
  width = "600px",
  height = "400px",
  autoPlay = false,
  autoPlayinterval = 3000,
  showarrows = true,
  showindicators = true,
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayinterval);
    return () => clearInterval(interval);
  }, [current, autoPlay, autoPlayinterval]);

  if (images.length === 0) return <div className="slider-empty">No images</div>;

  return (
    <div className="image-slider" style={{ width, height }}>
      {showarrows && (
        <button className="slider-arrow prev" onClick={prevSlide}>
          &#10094;
        </button>
      )}

      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="slider-image"
      />

      {showarrows && (
        <button className="slider-arrow next" onClick={nextSlide}>
          &#10095;
        </button>
      )}

      {showindicators && (
        <div className="slider-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Imageslider;
