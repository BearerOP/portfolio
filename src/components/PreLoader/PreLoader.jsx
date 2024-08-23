import React from "react";
import { motion } from "framer-motion";
import "./PreLoader.css";
const PreLoader = () => {
  return (
    <div className="preloader-container">
      <motion.div
        initial={{ opacity: 0.01, scale: 2 }}
        animate={{ opacity: 1, scale: 0.9 }}
        className="text"
      >
        Ankit Yadav
      </motion.div>
      <div className="progress-bar-container">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          className="progress"
        ></motion.div>
      </div>
    </div>
  );
};

export default PreLoader;
