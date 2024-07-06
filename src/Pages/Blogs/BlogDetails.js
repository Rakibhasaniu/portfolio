import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const data = useLoaderData();
  const blogDetails = data.data;
  const { headline, img, details, date } = blogDetails;

  return (
    <div
      className="px-4 py-12 bg-gradient-to-tr from-teal-900 via-emerald-900 to-stone-900"
      data-aos="zoom-in"
    >
      <div className="px-8 mx-auto rounded-lg overflow-hidden ">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-info mb-4 text-center">
            {headline}
          </h2>
          <p className="text-gray-400 my-4 text-center">{date}</p>
          <img
            src={img}
            alt={headline}
            className="w-full h-96 object-cover object-center"
          />
          <div
            className="text-lg text-justify my-4"
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
