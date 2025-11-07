import React from "react";
import ImageSlider from "../../components/imageslider/Imageslider";
import ShowcaseContainer from "../ShowcaseContainer";
import "./ImageSliderdisplay.css";

export default function ImageSliderShowcase() {
  const images = [
    "https://picsum.photos/800/400?image=1050",
    "https://picsum.photos/800/400?image=1043",
    "https://picsum.photos/800/400?image=1039",
  ];

  const usageCode = `
import ImageSlider from "./ImageSlider";

const images = [
  "https://picsum.photos/800/400?image=1050",
  "https://picsum.photos/800/400?image=1043",
  "https://picsum.photos/800/400?image=1039",
];

export default function Example() {
  return (
    <ImageSlider
      images={images}
      width="800px"
      height="400px"
      autoPlay={false}
      autoPlayInterval={5000}
      showIndicators={true}
      showArrows={true}
    />
  );
};
`;

  return (
    <div className="slider-showcase-container">
      <h2 className="slider-showcase-title">Image Slider Component</h2>
      <p className="slider-showcase-intro">
        The Image Slider allows users to view multiple images in a carousel.
        Supports autoplay, navigation arrows, and indicators, making it easy
        to showcase visual content elegantly.
      </p>

      <ShowcaseContainer title="Image Slider" code={usageCode}>
        <ImageSlider
          images={images}
          width="650px"
          height="400px"
          autoPlay={false}
          autoPlayInterval={4000}
          showIndicators={true}
          showArrows={true}
        />
      </ShowcaseContainer>

      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Use clear, high-quality images for a better experience.</li>
            <li>Maintain consistent dimensions to prevent layout shifts.</li>
            <li>Enable indicators to help users navigate slides easily.</li>
            <li>Provide autoplay at a comfortable interval (3–5 seconds).</li>
            <li>Include arrows for manual navigation.</li>
            <li>Limit the number of images to avoid overwhelming users.</li>
            <li>Compress images to optimize performance.</li>
            <li>Ensure important content isn’t hidden without context.</li>
            <li>Autoplay should not move too fast—users need time to view.</li>
            <li>Make the slider fully responsive for mobile and tablet screens.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
