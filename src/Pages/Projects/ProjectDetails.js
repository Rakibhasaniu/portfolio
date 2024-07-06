import React from "react";
import { Link } from "react-router-dom";

const ProjectDetails = ({ project }) => {
  const {
    _id,
    img,
    name,
    details,
    frontendLink,
    ClientSiteCode,
    ServerSiteCode,
  } = project;

  return (
    <div
      className="card shadow-2xl shadow-teal-900 mb-6 w-full  bg-emerald-900 rounded-lg"
      data-aos="zoom-in"
    >
      <figure className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="h-48 w-full object-cover object-center pt-6 px-6"
          style={{ filter: "brightness(70%)" }}
        />
      </figure>
      <div className="card-body items-center text-center rounded-lg">
        <h2 className="card-title text-lg font-semibold text-info">{name}</h2>
        <div className="text-xs flex justify-center">
          <a
            href={frontendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 link"
          >
            Live Site
          </a>
          <a
            href={ClientSiteCode}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 link"
          >
            Client Site Code
          </a>
          {ServerSiteCode && (
            <a
              href={ServerSiteCode}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Server Site Code
            </a>
          )}
        </div>
        <p className="text-sm px-4">{details}</p>
        <div className="card-actions">
          <Link to={`/project/${_id}`}>
            <button className="btn btn-sm btn-info btn-outline mt-3">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
