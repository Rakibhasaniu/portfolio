import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import AboutMe from "./Pages/AboutMe/AboutMe";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import Blogs from "./Pages/Blogs/Blogs";
import ContactMe from "./Pages/ContactForm/ContactForm";
import HomePage from "./Pages/Home/HomePage";
import ProjectInfo from "./Pages/Projects/ProjectInfo";
import Projects from "./Pages/Projects/Projects";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "/aboutMe",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/project/:id",
          element: <ProjectInfo></ProjectInfo>,
          loader: ({ params }) =>
            fetch(
              `https://my-portfolio-dashboard-backend.vercel.app/project/${params.id}`
            ),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: ({ params }) =>
            fetch(
              `https://my-portfolio-dashboard-backend.vercel.app/blog/${params.id}`
            ),
        },
        {
          path: "/contactMe",
          element: <ContactMe></ContactMe>,
        },
      ],
    },
  ]);
  return (
    <div data-theme="forest">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
