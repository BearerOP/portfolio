import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectSection.css";
const ProjectList = () => {
  const projectData = [
    {
      title: "Avadhi",
      subTitle: "An API Monitoring Web Application.",
      stack: "MERN, JWT, Vercel, AWS EC2",
      url: "",
    },
    {
      title: "Slug",
      subTitle: "A URL Shortener Project.",
      stack: "MERN, JWT, Vercel, Public IPs",
      url: "",
    },
    {
      title: "Swasthya",
      subTitle: "A Health & Fitness Monitoring Mobile Application.",
      stack: "React Native, Mongo, NodeJS, Express, Firebase",
      url: "",
    },
    {
      title: "Dhanam",
      subTitle: "WEB 3 based Crypto Wallet",
      stack: "Typescript, Shadcn, Tailwind",
      url: "",
    },
    {
      title:"OTP Generation Package",
      subTitle: "A NodeJS package for generating OTPs.",
      stack: "NodeJS, npm",
    }
  ];

  return (
    <div className="project-section-wrapper" id="projects">
      <motion.h1
        className="project-section-header"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Crafted with love.
      </motion.h1>
      <motion.p
        className="project-section-subheader"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        These are a selection of my recent works.
      </motion.p>
      <div className="projects-container">
        {projectData.map((project, index) => {
          return <ProjectCard {...project} key={index} index={index + 1} />;
        })}
      </div>
      <motion.p
        className="project-section-more"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        There&apos;s More
        <a
          href="https://github.com/bearerOP"
          target="_blank"
          rel="noreferrer"
        >
          View all projects <ArrowForwardOutlinedIcon fontSize="large" />
        </a>
      </motion.p>
    </div>
  );
};

export default ProjectList;
