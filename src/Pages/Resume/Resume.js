import React, { useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  console.log(experiences);

  useEffect(() => {
    const getExperiences = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-dashboard-backend.vercel.app/experience"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const experiences = data.data;
        setExperiences(experiences);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    getExperiences();
  }, []);
  return (
    <div className="p-6 lg:px-20 bg-gradient-to-r from-teal-900 to-stone-900">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center uppercase text-info my-8">
        Education and Experience
      </h1>
      <div
        className="lg:flex lg:justify-between lg:space-x-8"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 md:border-r-2 md:border-gray-500 lg:border-r-2 lg:border-gray-500 lg:mr-3">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-info mr-3" size={24} />
            <h2 className="text-lg lg:text-xl font-semibold uppercase text-info">
              Educational Background
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-base text-justify">
              <strong>Islamic University,Kushtia</strong>
              <br />
              Bachelor of Science - BS, Computer Science And Engineering
              <br />
              <span className="text-sm text-gray-400">February 14 - March 2022</span>
            </p>
            {/* <p className="text-base text-justify mt-4">
              <strong>University of Dhaka</strong>
              <br />
              Bachelor of Science - BS, Computer Science And Engineering
              <br />
              <span className="text-sm text-gray-400">Jan 2013 - May 2017</span>
            </p> */}
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-12">
          <div className="flex items-center mb-3">
            <FaBriefcase className="text-info mr-3" size={24} />
            <h2 className="text-lg lg:text-xl font-semibold uppercase text-info">
              Experience
            </h2>
          </div>
          {experiences?.map((experience) => (
            <div key={experience.id}>
              <p className="text-base text-justify">
                <strong>
                  {experience?.position}, {experience?.institution}
                </strong>
                <br />
                <span className="text-sm text-gray-500">
                  ({experience?.startDate} - {experience?.endDate})
                </span>
                <br />
                <span className="text-md text-gray-400">
                  {experience?.address}
                </span>
                <br />
                <span className="text-gray-300 font-semibold">
                  Responsiblities:{" "}
                </span>
                <span className="text-sm text-gray-300">
                  {experience?.responsibilities}
                </span>
                <br />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
