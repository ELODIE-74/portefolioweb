import React from "react";
import "./footer.css";

import CV from '../../components/cv/cv.jsx';

function Footer() {
  return (
    <footer className="footer" id="cv">
      <div className="footer-content">
        <p>&#x24B8; 2024 Elodie. All rights reserved</p>
        <CV />
      </div>
    </footer>
  );
}

export default Footer;
