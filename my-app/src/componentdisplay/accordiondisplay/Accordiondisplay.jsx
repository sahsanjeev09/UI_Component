import React from "react";
import Accordion from "../../components/accordion/Accordion";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Accordiondisplay.css";

export default function AccordionShowcase() {
  const accordionItems = [
    {
      title: "What is an Accordion?",
      content:
        "An Accordion is a UI component that allows sections of content to expand and collapse. It helps organize content efficiently.",
    },
    {
      title: "Can I open multiple sections?",
      content:
        "Yes! By enabling allowMultipleOpen, users can expand more than one section at a time.",
    },
    {
      title: "How customizable is it?",
      content:
        "You can customize the appearance, borders, rounding, and animation speed to fit your design needs.",
    },
  ];

  const usageCode = `
import Accordion from "./Accordion";

const items = [
  { title: "What is an Accordion?", content: "Accordion helps organize content in expandable sections." },
  { title: "Can I open multiple?", content: "Yes, set allowMultipleOpen={true} to open multiple sections." },
  { title: "Is it customizable?", content: "Yes, you can adjust appearance, borders, rounding, and animation." },
];

export default function Example() {
  return (
    <Accordion
      items={items}
      allowMultipleOpen={false}
      transitionSpeed={250}
      rounded
      border
    />
  );
};
`;

  return (
    <div className="accordion-showcase-container">
      <h2 className="showcase-title">Accordion Component</h2>

      {/* Intro */}
      <p className="showcase-intro">
        Accordions organize content into collapsible sections, making interfaces cleaner and easier to navigate.
      </p>

      {/* Demo */}
      <ShowcaseContainer title="Accordion Demo" code={usageCode}>
        <Accordion items={accordionItems} allowMultipleOpen={true} />
      </ShowcaseContainer>

      {/* === Usage Section (replaces Do's and Don'ts) === */}
      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <h3 className="card-header-usage">Usage</h3>
          <ul className="usage-list">
            <li>Use accordions to group related content without overwhelming the user.</li>
            <li>Keep titles short, clear, and descriptive.</li>
            <li>Make content concise and easy to scan.</li>
            <li>Use indicators or animations to show open/closed states.</li>
            <li>Allow multiple sections to be open only if it improves user understanding.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
