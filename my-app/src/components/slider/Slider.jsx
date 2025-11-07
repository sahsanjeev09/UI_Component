import React from "react";
import "./Slider.css";

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label= "",
  showValue = true,
  color = "#3b82f6", 
  trackColor = "gray",
  height = "6px",
  thumbSize = "16px",
  disabled = false,
}) => {
  return (
    <div className={`slider-container ${disabled ? "disabled" : ""}`}>
      {label && <label className="slider-label">{label}</label>}

      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={onChange}
          style={{
            "--slider-color": color,
            "--slider-track": trackColor,
            "--slider-height": height,
            "--thumb-size": thumbSize,
          }}
          className="slider-input"
        />
      </div>

      {showValue && <span className="slider-value">{value}</span>}
    </div>
  );
};

export default Slider;
