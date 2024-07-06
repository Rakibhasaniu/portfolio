import React from "react";
import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const ProjectInfo = () => {
  const data = useLoaderData();
  const projectDetails = data.data;

  return (
    <div className="px-20 py-12 bg-gradient-to-bl from-stone-900 to-teal-900">
      <Details
        key={projectDetails.id}
        projectDetails={projectDetails}
      ></Details>
    </div>
  );
};

export default ProjectInfo;
