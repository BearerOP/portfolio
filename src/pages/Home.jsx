import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Quote from "../components/Quote/Quote";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ProjectSection from "../components/ProjectSection/ProjectsSection";
import Contact from "../components/Contact/Contact";


const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Quote />
      <ProjectSection />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
