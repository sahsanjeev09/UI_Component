import React from "react";
import { Sun, Moon, Search } from "lucide-react";
import "./Header.css";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">OurUI</h1>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
