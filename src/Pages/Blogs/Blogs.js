import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-dashboard-backend.vercel.app/blog"
        );
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="px-4 lg:px-20 py-12 bg-gradient-to-tr from-teal-900 via-emerald-900 to-stone-900">
      <h1 className="text-4xl font-semibold text-center text-info uppercase mb-8">
        Blogs
      </h1>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded mt-8"
        data-aos="fade-up"
      >
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="card card-side bg-emerald-800 "
            data-aos="zoom-in"
          >
            <figure>
              <img src={blog?.img} alt="Blog" className="w-36 h-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog?.headline}</h2>
              <p className="my-2 text-md">{blog?.date}</p>
              <div className="card-actions justify-end">
                <Link to={`/blog/${blog?._id}`}>
                  <button className="btn btn-sm btn-info btn-outline">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
