import React from "react";
import "./Footer.css";

const Footer = ({ sidebarWidth = 240 }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      <div className="footer-content">
        <p className="footer-copyright">
          © {year} OurUI. All rights reserved.
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/sahsanjeev09"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanjeevkumarsah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100080837319458"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
