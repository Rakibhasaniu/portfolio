import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
import Certificates from "../Certificates/Certificates";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Home from "./Home";

const HomePage = () => {
  return (
    <div>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Resume></Resume>
      <Certificates></Certificates>
      <Projects></Projects>
      <Blogs></Blogs>
    </div>
  );
};

export default HomePage;
