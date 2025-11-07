import React, { useState } from "react";
import Slider from "../../components/slider/Slider";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Sliderdisplay.css";

const SliderShowcase = () => {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);

  return (
    <div className="slider-showcase-container">
      {/* Header Section */}
      <div className="slider-showcase-header">
        <h1 className="slider-showcase-title">Slider Component</h1>
        <p className="slider-showcase-description">
          Sliders allow users to select a value along a continuous range. Perfect for settings like volume,
          brightness, or progress control, they provide an intuitive way to adjust values visually.
        </p>
      </div>

      <ShowcaseContainer
        title="Slider"
        description="A simple slider to select values from a range."
        code={`<Slider value={volume} onChange={(e) => setVolume(e.target.value)} />`}
      >
        <div className="showcase-examples-test">
          <Slider value={volume} onChange={(e) => setVolume(e.target.value)} />
        </div>
      </ShowcaseContainer>

      {/* === Usage Section === */}
      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <h3 className="card-header-usage">Usage</h3>
          <ul className="usage-list">
            <li>Use sliders for selecting values along a continuous range.</li>
            <li>Always display the current value for clarity.</li>
            <li>Maintain consistent track lengths for visual balance.</li>
            <li>Use intuitive colors that represent their meaning or context.</li>
            <li>Ensure the thumb is large enough for easy interaction on all devices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderShowcase;
