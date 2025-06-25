import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";

const About = () => {
  return (
    <div className="container mx-auto px-3 lg:px-0 pt-35 pb-10 overflow-x-hidden">
      <Helmet>
        <title>Job Tracks | about</title>
      </Helmet>

      <motion.h1
        variants={fadeIn("up", 500)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="overflow-x-hidden text-4xl font-bold text-center text-primary mb-6"
      >
        About JobTracks
      </motion.h1>
      <div className="grid mt-10 gap-10 items-stretch grid-cols-1 md:grid-cols-2 justify-center">
        <motion.div
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="overflow-x-hidden bg-base-200 shadow-md p-5 rounded-2xl hover:scale-105 transition duration-200"
        >
          <p className="text-gray-700 mb-4 text-lg">
            <strong>JobTracks</strong> is your all-in-one platform for managing
            and exploring job opportunities. Whether you're a fresh graduate or
            a seasoned professional, JobTracks helps you stay organized,
            focused, and updated throughout your job-hunting journey.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="overflow-x-hidden bg-base-200 shadow-md p-5 rounded-2xl hover:scale-105 transition duration-200"
        >
          <h2 className="text-2xl font-semibold text-secondary mt-6 mb-2">
            🌟 What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Explore jobs from multiple companies in one place</li>
            <li>Track your applied, saved, and interested jobs easily</li>
            <li>Company-wise job listings with detailed information</li>
            <li>Responsive UI for both desktop and mobile users</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="overflow-x-hidden bg-base-200 shadow-md p-5 rounded-2xl hover:scale-105 transition duration-200"
        >
          <h2 className="text-2xl font-semibold text-secondary mt-6 mb-2">
            ⚙️ How It Works
          </h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>Browse companies and view their current job openings</li>
            <li>Click on job details to learn more and apply directly</li>
            <li>Save jobs you're interested in for future tracking</li>
            <li>Stay updated on job statuses and manage your profile</li>
          </ol>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="overflow-x-hidden bg-base-200 shadow-md p-5 rounded-2xl hover:scale-105 transition duration-200"
        >
          <h2 className="text-2xl font-semibold text-secondary mt-6 mb-2">
            💡 Our Mission
          </h2>
          <p className="text-gray-700">
            We aim to simplify the job search process and empower users by
            giving them a platform where they can track, apply, and manage jobs
            efficiently — all in one place.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
