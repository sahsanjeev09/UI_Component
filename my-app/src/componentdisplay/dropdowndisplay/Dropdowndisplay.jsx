import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Dropdowndisplay.css";

export default function Dropdownshowcase() {
  const options = ["Male", "Female", "Other"];

  const usageCode = `
import Dropdown from "./Dropdown";

export default function Example() {
  const options = ["Male", "Female", "Other"];

  return (
    <Dropdown
      label="Select Gender"
      options={options}
      placeholder="Choose one"
      onSelect={(value) => console.log("Selected:", value)}
      width="240px"
    />
  );
};
`;

  return (
    <div className="dropdown-showcase-container">
      <h2 className="dropdown-showcase-title">Dropdown Component</h2>

      <p className="dropdown-showcase-intro">
        Dropdowns allow users to select a single option from a list. They are
        flexible, reusable, and ideal for forms, filters, and selection menus.
        Easy to integrate and customize for different data and design requirements.
      </p>

      <ShowcaseContainer title="Dropdown Demo" code={usageCode}>
        <Dropdown
          label="Select Gender"
          options={options}
          placeholder="Choose one"
          onSelect={(value) => console.log("Selected:", value)}
          width="240px"
        />
      </ShowcaseContainer>

      {/* Usage Section (merged Do’s & Don’ts) */}
      <div className="best-practices-section">
        <h2 className="best-practices-title">Usage</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Use dropdowns for short and easily scannable option lists.</li>
            <li>Always provide a clear label or placeholder.</li>
            <li>Ensure keyboard accessibility and visible focus states.</li>
            <li>Keep option names concise and distinct.</li>
            <li>Maintain consistent width and spacing across dropdowns.</li>
            <li>For long lists, consider a searchable dropdown instead.</li>
            <li>Do not hide critical actions inside dropdown menus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
