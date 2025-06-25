import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";

const OurSuccess = () => {
  return (
    <div className="py-10 container mx-auto px-3 lg:px-0 text-center">
      <motion.h2
        variants={fadeIn("down", 500)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-3xl lg:text-4xl text-primary font-bold overflow-x-hidden"
      >
        Our Success
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 500)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-5 max-w-[1100px] mx-auto overflow-x-hidden"
      >
        JobTacks thrives on innovation and dedication, empowering professionals
        to achieve their career goals. Through strategic guidance and dynamic
        job matching, we ensure individuals find roles that align with their
        aspirations. Our platform bridges the gap between skilled talent and
        top-tier employers, fostering growth and success. With a commitment to
        excellence, we continuously refine our services to meet evolving market
        demands. JobTacks is not just about finding jobs—it’s about building
        careers. By leveraging data-driven insights and personalized support, we
        equip job seekers with the tools needed to excel. Our success is defined
        by the countless professionals we’ve helped shape brighter futures.
        Together, we create opportunities that transform careers and industries.
      </motion.p>

      <div className="grid gap-10 grid-cols-2 md:grid-cols-4 mt-10">
        <motion.div
          variants={fadeIn("left", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border-2 border-primary p-5 rounded-xl transition duration-200 hover:shadow-2xl cursor-pointer overflow-x-hidden"
        >
          <span className="text-5xl font-bold text-secondary">
            <CountUp end={250} />+
          </span>
          <h3 className="mt-7 text-3xl font-medium">Job Posted</h3>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border-2 border-primary p-5 rounded-xl transition duration-200 hover:shadow-2xl cursor-pointer overflow-x-hidden"
        >
          <span className="text-5xl font-bold text-secondary">
            <CountUp end={200} />+
          </span>
          <h3 className="mt-7 text-3xl font-medium">Happy Customers</h3>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border-2 border-primary p-5 rounded-xl transition duration-200 hover:shadow-2xl cursor-pointer overflow-x-hidden"
        >
          <span className="text-5xl font-bold text-secondary">
            <CountUp end={500} />+
          </span>
          <h3 className="mt-7 text-3xl font-medium">Freelancers</h3>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="border-2 border-primary p-5 rounded-xl transition duration-200 hover:shadow-2xl cursor-pointer overflow-x-hidden"
        >
          <span className="text-5xl font-bold text-secondary">
            <CountUp end={10} />+
          </span>
          <h3 className="mt-7 text-3xl font-medium">Companies</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default OurSuccess;
