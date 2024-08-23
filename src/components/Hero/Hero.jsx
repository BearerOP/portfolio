import React from "react";
import SouthIcon from "@mui/icons-material/South";
import bye from '../../assets/bye.png';
import { motion } from "framer-motion";
import "./Hero.css";
import CustomButton from "../CustomButton/CustomButton";

const Hero = () => {
  return (
    <>
      <motion.div
        className="hero-background-circle"
        initial={{ opacity: 0.01, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.3, stiffness: 200 }}
      ></motion.div>

      <div className="hero-section">
        <div className="hero-left">
          <motion.h1
            className="hero-header"
            initial={{ opacity: 0.01, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <span className="hero-hi">Hi! I am Ankit Yadav, a</span>
            <span className="hero-role"> Full-stack Developer</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <CustomButton text="See my work" size="large" link="projects" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.2 }}
          >
            <div className="social-links">
              <a href="https://linkedin.com/in/yadavankit189" target="_blank">
                <div className="social-item">LinkedIn</div>
              </a>
              <div>/</div>
              <a href="https://github.com/bearerOP" target="_blank">
                <div className="social-item">GitHub</div>
              </a>
              <div>/</div>
              <a
                href="https://drive.google.com/file/d/1UEgRjk1GtQp9Wtb63qAuMvGuyemRbq0p/view?usp=sharing"
                target="_blank"
              >
                <div className="social-item">My Resume</div>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            className="image-container"
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <img className="hero-img" src={bye} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
