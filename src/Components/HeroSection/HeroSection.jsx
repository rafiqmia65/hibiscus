import React from "react";
import heroImage from "../../assets/heroImage.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";

const HeroSection = () => {
  return (
    <div className="container mx-auto pt-30 py-10 px-3 lg:px-0 bg-base-200 min-h-[70vh]">
      <div className="grid gap-5 lg:grid-cols-2 overflow-x-hidden">
        <motion.div
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold max-w-[700px] text-primary mx-auto leading-16">
            Find <span className="text-secondary">Great Job Opportunity</span>{" "}
            You Deserve
          </h1>
          <p className="mt-5">
            Unlocking the perfect job opportunity starts with knowing your worth
            and showcasing your skills effectively. A strong resume, tailored
            applications, and networking can make all the difference. Stay
            persistent, refine your approach, and seize opportunities that align
            with your ambitions. Your dream job is out there—go claim it with
            confidence
          </p>
          <div className="mt-10">
            <div>
              <input
                type="text"
                className="border-2 bg-white focus:outline-0 indent-3 text-xl text-secondary border-primary h-15 border-r-0 rounded-lg rounded-r-none"
                placeholder="Job Title / Keywords"
              />
              <button className="h-15 bg-secondary px-4 text-xl rounded-xl rounded-l-none text-white cursor-pointer ">
                Find Job
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="overflow-x-hidden"
        >
          <img src={heroImage} alt="" className="max-w-[350px] mx-auto" />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 500)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-10 overflow-x-hidden"
      >
        <p className="text-xl font-semibold text-center">Popular Searches</p>
        <ul className="flex gap-3 text-xs flex-wrap mt-5 justify-center">
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Machine Learning Engineer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            web developer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Cloud Solutions Architect
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Data Scientist
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Fullstack Web Developer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Data Scientist
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Senior Software Eng.
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            UI/UX Designer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Data Analytics
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            DevOps Engineer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            Backend Developer
          </li>
          <li className="px-5 py-2 bg-secondary text-white rounded-full">
            QA Engineer
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroSection;
