import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="line"></div>
      <p className="project-idx">0{props.index}</p>

      <div className="project-wrapper">
        <div className="project-left">
          <h2 className="project-title">{props.title}</h2>
          <p className="project-stack">{props.stack}</p>
        </div>
        <div className="project-right">
          <a href={props.url} target="_blank">
            <CustomButton text="View project" size="medium" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
