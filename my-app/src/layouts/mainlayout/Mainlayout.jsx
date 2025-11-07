import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // true for expanded initially

  const sidebarWidth = sidebarOpen ? 240 : 64;

  return (
    <div className={`main-layout ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((v) => !v)}
        toggleSidebar={() => setSidebarOpen((v) => !v)}
      />

      {/* Overlay for mobile sidebar */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      {/* Main content container */}
      <div className="main-container">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Scrollable content */}
        <div
          className="content-area"
          style={{ marginLeft: sidebarWidth }}
        >
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer fixed at bottom */}
      <Footer sidebarWidth={sidebarOpen ? sidebarWidth : 64} />
    </div>
  );
};

export default MainLayout;
