import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-dashboard-backend.vercel.app/project"
        );
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        const projects = data.data;
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    getProjects();
  }, []);
  return (
    <div className="px-20 py-12 bg-gradient-to-bl from-stone-900 to-teal-900">
      <h1 className="text-4xl font-semibold text-center uppercase text-info">
        Some Of My Projects
      </h1>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 rounded mt-16"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {projects &&
          projects.map((project) => (
            <ProjectDetails
              key={projects.id}
              project={project}
            ></ProjectDetails>
          ))}
      </div>
    </div>
  );
};

export default Projects;
