import React, { useEffect, useState } from "react";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          "https://my-portfolio-dashboard-backend.vercel.app/certificate"
        );
        const data = await response.json();
        setCertificates(data.data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className="px-20 py-12 bg-gradient-to-tr from-teal-900 via-emerald-900 to-stone-900">
      <h2 className="text-xl lg:text-4xl font-semibold mb-12 text-center uppercase text-info">
        Awards & Certifications
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {certificates?.map((certificate) => (
          <div
            key={certificate._id}
            className="flex flex-col items-center bg-teal-900 p-4 rounded"
            data-aos="zoom-in"
          >
            <img
              src={certificate.img}
              alt={certificate.name}
              className="w-full h-56 object-cover mb-4 rounded"
              style={{ filter: "brightness(70%)" }}
            />
            <p className="text-center font-semibold">{certificate.name}</p>
            <p className="text-sm text-gray-400">{certificate.institution}</p>
            <p className="text-sm mt-2 text-center">
              <strong>Skills:</strong> {certificate.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
