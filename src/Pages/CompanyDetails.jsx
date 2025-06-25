import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import JobSection from "../Components/JobSection/JobSection";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";

const CompanyDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    const filterData = data.find((company) => company.id == id);
    setSingleData(filterData);
  }, [data, id]);

  const { name, logo, location, website, industry, jobs } = singleData;

  return (
    <div className="container pt-35 mx-auto px-4 py-8">
      <Helmet>
        <title>Job Tracks | company-details</title>
      </Helmet>
      <motion.div
        variants={fadeIn("right", 500)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="bg-base-200 shadow-md rounded-xl p-6 mb-10 overflow-x-hidden"
      >
        <div className="flex flex-col md:flex-row items-center gap-5 border-b pb-4">
          <img src={logo} alt={name} className="w-40 object-contain" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary">
              <span>Company Name: </span>
              {name}
            </h2>
            <p className="text-gray-600 mt-2">Industry: {industry}</p>
            <p className="text-gray-600">Location: {location}</p>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline text-sm"
            >
              Visit Company Website
            </a>
          </div>
        </div>
      </motion.div>

      <section className="grid gap-10">
        {jobs?.map((job) => (
          <JobSection key={job.id} website={website} job={job}></JobSection>
        ))}
      </section>
    </div>
  );
};

export default CompanyDetails;
