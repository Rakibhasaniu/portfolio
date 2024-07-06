import React from "react";

const Details = ({ projectDetails }) => {
  const {
    img,
    name,
    details,
    funtionalities,
    technologies,
    frontendLink,
    backendLink,
    clientSiteCode,
    serverSiteCode,
  } = projectDetails;

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <h2 className="text-4xl font-bold text-info mb-6 text-center">{name}</h2>
      <p className="text-xl text-center max-w-3xl mb-6">{details}</p>
      <figure className="mb-6">
        <img src={img} alt={name} className="rounded-lg shadow-lg" />
      </figure>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Functionalities */}
        <div>
          <h3 className="text-2xl font-bold text-info mb-4">Functionalities</h3>
          <ul className="list-disc list-inside">
            {funtionalities?.map((func, index) => (
              <li key={index} className="text-lg mb-2">
                {func}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-info mb-4">Technologies</h3>
          <ul className="list-disc list-inside">
            {technologies?.map((tech, index) => (
              <li key={index} className="text-lg mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Important Links */}
        <div>
          <h3 className="text-2xl font-bold text-info mb-4">Important Links</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">
              <a href={frontendLink} target="_blank" rel="noopener noreferrer">
                Frontend Live Link
              </a>
            </li>
            <li className="text-lg mb-2">
              <a href={backendLink} target="_blank" rel="noopener noreferrer">
                Backend Live Link
              </a>
            </li>
            <li className="text-lg mb-2">
              <a
                href={clientSiteCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Code GitHub Link
              </a>
            </li>
            <li className="text-lg mb-2">
              <a
                href={serverSiteCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Code GitHub Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
