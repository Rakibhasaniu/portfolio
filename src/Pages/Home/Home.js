import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import BgImg from "../../Assets/bg.png";
import logo from "../../Assets/heroImg.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-20 mt-12">
        <img
          src={logo}
          className="rounded-full w-full max-w-sm shadow-xl shadow-teal-900"
          alt="Logo"
          data-aos="zoom-in"
        />
        <div className="text-center lg:text-left lg:pr-24">
          <h1 className="text-3xl font-semibold mb-4 uppercase">
            I'm Rakib <span className="text-info">Hasan</span>
          </h1>
          <h1 className="text-4xl font-bold my-5">
            <span className="text-info">
              <Typewriter
                options={{
                  strings: ["FULL STACK DEVELOPER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p>
            Hello! I'm Rakib, a motivated Full Stack Developer with an
            unwavering passion for creating outstanding digital experiences. My
            proficiency spans a diverse range of technologies, including,C,C++,Python
            React.js, Next.js, React Redux, Typescript, Node.js, Express.js,
            JavaScript, REST API, MongoDB, PostgreSQL, Prisma ORM, HTML5, CSS3,
            Bootstrap, Tailwind CSS, Daisy UI, Material UI, Ant Design, Shadcn.
          </p>

          <div className="mt-5">
            <Link to="/projects" className="btn btn-sm btn-info uppercase mr-3">
              Projects
            </Link>
            <a href="resume.pdf">
              <button className="btn btn-sm btn-info btn-outline uppercase">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
