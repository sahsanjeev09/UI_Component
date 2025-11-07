import React, { useRef, useState } from "react";
import Accordion from "../../components/accordion/Accordion";
import useClickOutside from "../../hooks/useClickOutside";
import ShowcaseContainer from "../../componentdisplay/ShowcaseContainer";
import "./Clickoutsidedisplay.css";

export default function ClickOutsideShowcase() {
  const accordionRef = useRef(null);
  const [resetKey, setResetKey] = useState(0);
  const [closed, setClosed] = useState(false);

  const jsxUsage = `
import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Accordion from "../components/accordion/Accordion";

export default function Example() {
  const ref = useRef();

  useClickOutside(ref, () => alert("Clicked outside!"));

  const accordionItems = [
    { title: "Item 1", content: "This is the first section" },
    { title: "Item 2", content: "This is the second section" }
  ];

  return (
    <div ref={ref}>
      <Accordion items={accordionItems} allowMultipleOpen />
    </div>
  );
}
`;

  const cssUsage = `
/* Example styling for click outside area */
.demo-box {
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.demo-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
`;

  const accordionItems = [
    {
      title: "What does this hook do?",
      content:
        "It listens for clicks outside the targeted element and automatically triggers a callback. Perfect for closing dropdowns, modals, or accordions when a user clicks elsewhere.",
    },
    {
      title: "How does it work?",
      content:
        "It attaches an event listener to the document that checks whether the click happened inside or outside the referenced element. If it’s outside, your callback runs.",
    },
    {
      title: "Why use it?",
      content:
        "It helps you keep UI interactions intuitive, ensuring components close when users click away — enhancing user experience.",
    },
  ];

  // Close accordion when clicked outside
  useClickOutside(accordionRef, () => {
    setResetKey((prev) => prev + 1);
    setClosed(true);
    setTimeout(() => setClosed(false), 3000);
  });

  return (
    <div className="clickoutside-showcase-container">
      <h2 className="clickoutside-showcase-title">useClickOutside Hook</h2>

      <p className="clickoutside-showcase-intro">
        The <code>useClickOutside</code> hook makes it easy to detect clicks
        outside an element and respond automatically — ideal for menus,
        modals, and popovers.
      </p>

      <ShowcaseContainer title="Live Demo" code={jsxUsage}>
        <div ref={accordionRef} className="clickoutside-demo-box">
          <Accordion
            key={resetKey}
            items={accordionItems}
            allowMultipleOpen={true}
            border
            rounded
          />
        </div>
      </ShowcaseContainer>

      <ShowcaseContainer title="CSS Example" code={cssUsage}>
        <p className="clickoutside-showcase-note">
          This example shows how to style the clickable container with subtle
          borders and hover effects.
        </p>
      </ShowcaseContainer>
    </div>
  );
}
