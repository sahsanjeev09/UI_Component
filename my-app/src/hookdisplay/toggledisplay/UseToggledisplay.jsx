import React from "react";
import ShowcaseContainer from "../../componentdisplay/ShowcaseContainer";
import { Button } from "../../components/button/Button";
import useToggle from "../../hooks/useToggle";
import "./UseToggledisplay.css";

export default function UseToggleShowcase() {
  const usageCode1 = `import useToggle from "./useToggle";

function Example() {
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <p>Light is {value ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}`;

  const usageCode2 = `import useToggle from "./useToggle";

function ModeSwitcher() {
  const { value: mode, toggle } = useToggle(["dark", "light"]);

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button onClick={toggle}>Switch Mode</button>
    </div>
  );
}`;

  const lightToggle = useToggle(false);
  const modeToggle = useToggle(["dark", "light"]);

  return (
    <div className="toggle-showcase-container">
      <h2 className="toggle-showcase-title">useToggle Hook</h2>

      <p className="toggle-showcase-intro">
        The <code>useToggle</code> hook provides a simple way to switch between
        two states — like <code>true/false</code>, <code>open/close</code>, or
        even custom values such as <code>"light/dark"</code>. It’s perfect for
        toggling UI visibility, dark mode, or modal states.
      </p>

      {/* --- SIDE BY SIDE GRID --- */}
      <div className="toggle-demo-flex">
        {/* Boolean Toggle - Left */}
        <ShowcaseContainer title="Boolean Toggle" code={usageCode1}>
          <div className="toggle-card">
            <p className="toggle-status">
              Light is:{" "}
              <strong
                style={{ color: lightToggle.value ? "#16a34a" : "#dc2626" }}
              >
                {lightToggle.value ? "ON" : "OFF"}
              </strong>
            </p>
            <Button onClick={lightToggle.toggle} colorScheme="blue">
              Toggle Light
            </Button>
          </div>
        </ShowcaseContainer>

        {/* Custom Value Toggle - Right */}
        <ShowcaseContainer title="Custom Value Toggle" code={usageCode2}>
          <div className="toggle-card">
            <p className="toggle-status">
              Current Mode:{" "}
              <strong
                style={{
                  color: modeToggle.value === "light" ? "#2563eb" : "#facc15",
                }}
              >
                {modeToggle.value}
              </strong>
            </p>
            <Button onClick={modeToggle.toggle} colorScheme="purple">
              Switch Mode
            </Button>
          </div>
        </ShowcaseContainer>
      </div>

      {/* Usage Section */}
      <div className="usage-section">
        <h2 className="usage-title">Usage</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Use for simple toggles like dark mode, modals, or dropdowns.</li>
            <li>Combine with UI interactions for cleaner state logic.</li>
            <li>Pass custom values like ["open", "closed"] for readability.</li>
            <li>Keep it stateless and predictable — avoid side effects.</li>
            <li>Ideal for buttons, switches, and visibility controls.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
