import React, { createContext, useContext, useState } from "react";
import "./Tabs.css";

// Create Context for Tabs
const TabsContext = createContext();

export function Tabs({ defaultValue, children, onChange, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChange = (value) => {
    setActiveTab(value);
    if (onChange) onChange(value);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChange }}>
      <div className={`tabs ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

// Tabs List
export function TabsList({ children, className = "" }) {
  return <div className={`tabs-list ${className}`}>{children}</div>;
}

// Tab Trigger
export function TabsTrigger({ value, children, className = "" }) {
  const { activeTab, handleChange } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`tab-trigger ${isActive ? "active" : ""} ${className}`}
      onClick={() => handleChange(value)}
    >
      {children}
    </button>
  );
}

// Tab Content
export function TabsContent({ value, children, className = "" }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return <div className={`tab-content ${className}`}>{children}</div>;
}
