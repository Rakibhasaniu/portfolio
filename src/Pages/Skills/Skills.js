import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  console.log(skills);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-dashboard-backend.vercel.app/skill"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const skills = data.data;
        setSkills(skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    getSkills();
  }, []);

  return (
    <div className="px-20 py-12 bg-gradient-to-bl from-stone-900 to-teal-900">
      <h2 className="text-xl lg:text-4xl font-semibold mb-12 text-center uppercase text-info">
        Some of my skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center lg:px-32 md:px-16">
        {skills?.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center"
            data-aos="zoom-in"
          >
            <div
              className="radial-progress text-emerald-300 bg-teal-900"
              style={{
                "--value": skill.expertiseLevel,
                "--thickness": "2px",
              }}
            >
              {skill.expertiseLevel}%
            </div>
            <p className="mt-2 mb-4 font-bold text-lg text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
