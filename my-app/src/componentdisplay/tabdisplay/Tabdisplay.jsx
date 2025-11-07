import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/tabs/Tabs";
import ShowcaseContainer from "../ShowcaseContainer";
import "./Tabdisplay.css";

export default function TabShowcase() {
  const usageCode = `
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

export default function Example() {
  return (
    <Tabs defaultValue="overview" onChange={(v) => console.log("Active Tab:", v)}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        Welcome to the Overview section. You can place any content or React components here.
      </TabsContent>
      <TabsContent value="details">Here are the detailed insights.</TabsContent>
      <TabsContent value="settings">Manage your preferences in Settings.</TabsContent>
    </Tabs>
  );
};
`;

  return (
    <div className="tab-showcase-container">
      <h2 className="tab-showcase-title">Tabs Component</h2>
      <p className="tab-showcase-intro">
        Tabs let you divide content into multiple sections, helping users navigate smoothly.
        Use them to group related information while keeping the UI clean and organized.
      </p>

      <ShowcaseContainer title="Tabs Demo" code={usageCode}>
        <Tabs defaultValue="overview" onChange={(v) => console.log("Active Tab:", v)}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            Welcome to the Overview section. You can place any content or React components here.
          </TabsContent>
          <TabsContent value="details">Here are the detailed insights.</TabsContent>
          <TabsContent value="settings">Manage your preferences in Settings.</TabsContent>
        </Tabs>
      </ShowcaseContainer>

      <div className="best-practices-section">
        <h2 className="best-practices-title">Best Practices</h2>
        <div className="usage-card">
          <ul className="usage-list">
            <li>Use concise and descriptive tab labels.</li>
            <li>Group related content together under one tab.</li>
            <li>Highlight the active tab clearly for users.</li>
            <li>Enable keyboard navigation for accessibility.</li>
            <li>Keep spacing and styling consistent.</li>
            <li>Avoid too many tabs to prevent clutter.</li>
            <li>Do not place unrelated content in tabs.</li>
            <li>Ensure focus and hover states are clearly visible.</li>
            <li>Do not hide critical information behind tabs.</li>
            <li>Use meaningful labels instead of generic names.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
