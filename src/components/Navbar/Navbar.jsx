import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const handleScroll = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className="nav"
    >
      <div className="nav-left">
        <div className="nav-item">ay</div>
      </div>
      <div className="nav-right">
        <div className="nav-item" onClick={() => handleScroll("projects")}>
          Work
        </div>
        <div className="nav-item" onClick={() => handleScroll("contact")}>
          Contact
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
