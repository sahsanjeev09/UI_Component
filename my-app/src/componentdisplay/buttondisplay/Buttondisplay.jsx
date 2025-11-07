import React from "react";
import { Button } from "../../components/button/Button";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Buttondisplay.css";

const ButtonShowcase = () => {
  return (
    <div className="button-showcase-container">
      {/* Header Section */}
      <div className="button-showcase-header">
        <h1 className="button-showcase-title">Button Component</h1>
        <p className="button-showcase-description">
          Buttons allow users to take actions with a single click. Use primary, secondary, danger, and success buttons
          to represent different types of actions clearly.
        </p>
      </div>

      {/* Basic Buttons */}
      <ShowcaseContainer
        title="Primary Buttons"
        description="Use primary, secondary, danger, and success buttons for key actions."
        code={`<Button colorScheme="blue">Primary</Button>\n<Button colorScheme="gray">Secondary</Button>\n<Button colorScheme="red">Danger</Button>\n<Button colorScheme="green">Success</Button>`}
      >
        <div className="showcase-examples-basic">
          <Button colorScheme="blue">Primary</Button>
          <Button colorScheme="gray">Secondary</Button>
          <Button colorScheme="green">Success</Button>
          <Button colorScheme="red">Danger</Button>
        </div>
      </ShowcaseContainer>

      {/* Sizes */}
      <ShowcaseContainer
        title="Button Sizes"
        description="Choose sizes to indicate importance and hierarchy."
        code={`<Button size="sm" colorScheme="blue">Small</Button>\n<Button size="md" colorScheme="blue">Medium</Button>\n<Button size="lg" colorScheme="blue">Large</Button>`}
      >
        <div className="showcase-examples">
          <Button size="sm" colorScheme="blue">Small</Button>
          <Button size="md" colorScheme="blue">Medium</Button>
          <Button size="lg" colorScheme="blue">Large</Button>
        </div>
      </ShowcaseContainer>

      {/* States */}
      <ShowcaseContainer
        title="Button States"
        description="Indicate different button states to guide users."
        code={`<Button isLoading colorScheme="blue">Loading</Button>\n<Button disabled colorScheme="gray">Disabled</Button>`}
      >
        <div className="showcase-examples">
          <Button isLoading colorScheme="blue">Loading</Button>
          <Button disabled colorScheme="gray">Disabled</Button>
        </div>
      </ShowcaseContainer>

      {/* Usage Section */}
      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Use primary buttons for main actions.</li>
            <li>Use secondary buttons for supporting actions.</li>
            <li>Use danger buttons for destructive actions.</li>
            <li>Use success buttons for positive actions or confirmation.</li>
            <li>Keep button labels short, clear, and actionable.</li>
            <li>Show loading states for asynchronous operations.</li>
            <li>Ensure sufficient color contrast for accessibility.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
