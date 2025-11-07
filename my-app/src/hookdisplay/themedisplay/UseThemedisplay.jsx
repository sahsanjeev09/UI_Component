import React from "react";
import ShowcaseContainer from "../../componentdisplay/ShowcaseContainer";
import { Button } from "../../components/button/Button";
import useTheme from "../../hooks/useTheme";
import "./UseThemedisplay.css";

export default function UseThemeShowcase() {
const usageCode = `import useTheme from "./useTheme";

function Example() {
const { theme, toggleTheme, setTheme } = useTheme();

return ( <div> <p>Current Theme: {theme}</p> <button onClick={toggleTheme}>Toggle Theme</button> </div>
);
}`;

const { theme, toggleTheme, setTheme } = useTheme();

return ( <div className="theme-showcase-container"> <h2 className="theme-showcase-title">useTheme Hook</h2> <p className="theme-showcase-intro">
The <code>useTheme</code> hook provides a simple way to manage light, dark,
and system themes in React. It uses <code>localStorage</code> for persistence
and automatically applies the right CSS class (<code>.light</code> or <code>.dark</code>)
to your document. You can toggle themes or set them explicitly. </p>

  <ShowcaseContainer title="Demo: Toggle & Set Theme" code={usageCode}>  
    <div className="theme-demo">  
      <p className="theme-status">
          Current Theme: <strong className={theme}>{theme}</strong>
      </p>
 
      <Button onClick={toggleTheme} colorScheme="blue"> Switch to {theme === "light" ? "Dark" : "Light"} </Button> 
    </div>  
  </ShowcaseContainer>  

  <div className="usage-section">  
    <h2 className="usage-title">Usage</h2>  
    <div className="usage-card">  
      <ul className="usage-list">  
        <li>Toggle theme programmatically or via a button.</li>  
        <li>Persist user-selected theme in <code>localStorage</code>.</li>  
        <li>Respect system preferences with <code>auto</code> mode.</li>  
        <li>Apply <code>.dark</code> or <code>.light</code> class at root (HTML).</li>  
        <li>Use smooth transitions for background and text color changes.</li>  
        <li>Ensure sufficient contrast for accessibility in all themes.</li>  
      </ul>  
    </div>  
  </div>  
</div>  
);
}
