import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="p-6 lg:px-20 bg-gradient-to-r from-teal-900 to-stone-900 text-white">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center uppercase text-info my-8">
        About Me
      </h1>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        data-aos="fade-up"
      >
        <div className="lg:col-span-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 text-center lg:text-left border-b-2 border-gray-500">
            My Story
          </h2>
          <p className="text-left mb-8">
          I am a passionate and versatile full stack developer with expertise in both front-end and back-end technologies. With a solid foundation in Next.js, TypeScript, Redux Toolkit, and Material UI, I create seamless and dynamic user experiences. My back-end proficiency, honed in a software development firm, allows me to build robust and scalable applications. I thrive in collaborative environments and am dedicated to continuous learning and innovation in web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <FaCheckCircle className="text-info mr-2" />
              <span>Front End Development</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-info mr-2" />
              <span>Back End Development</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-info mr-2" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-info mr-2" />
              <span>MERN Stack Development</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 pb-2 text-center lg:text-left border-b-2 border-gray-500">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Name:</strong> Rakib Hasan
              </p>
              <p>
                <strong>Age:</strong> 25 Years
              </p>
              <p>
                <strong>Nationality:</strong> Bangladeshi
              </p>
              <p>
                <strong>Freelance:</strong> Available
              </p>
            </div>
            <div>
              <p>
                <strong>Address:</strong> Dhaka, Bangladesh
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+8801731635367"
                  className="text-info hover:underline"
                >
                  +8801731635367
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:rakibhasanoyoniu@mail.com"
                  className="text-info hover:underline"
                >
                  rakibhasanoyoniu@mail.com
                </a>
              </p>
              <p>
                <strong>Languages:</strong> Bangla, English, Hindi
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="stats stats-vertical shadow bg-transparent">
            <div className="stat" data-aos="fade-up">
              <div className="stat-title">Total Projects</div>
              <div className="stat-value">20+</div>
            </div>
            <div className="stat" data-aos="fade-up">
              <div className="stat-title">Completed</div>
              <div className="stat-value">16</div>
            </div>
            <div className="stat" data-aos="fade-up">
              <div className="stat-title">Pending</div>
              <div className="stat-value">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
