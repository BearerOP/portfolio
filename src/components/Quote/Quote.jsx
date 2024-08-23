import React from "react";
import { motion } from "framer-motion";
import "./Quote.css";
const Quote = () => {
  return (
    <div className="quote-wrapper">
      <motion.h1
        className="quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Choose a job you love and you will never have to work a day in your life
      </motion.h1>
    </div>
  );
};

export default Quote;
