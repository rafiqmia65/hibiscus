import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBuilding,
  FaPaperPlane,
  FaClipboardCheck,
} from "react-icons/fa";
import { fadeIn } from "../../motion/motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaBuilding className="text-4xl text-primary mb-4" />,
      title: "Explore Companies",
      description:
        "Browse a list of companies with logo, location, industry, and available job postings.",
    },
    {
      icon: <FaSearch className="text-4xl text-primary mb-4" />,
      title: "Discover Jobs",
      description:
        "View job details including type, salary, description, and required skills. Open modal for more info.",
    },
    {
      icon: <FaPaperPlane className="text-4xl text-primary mb-4" />,
      title: "Apply Easily",
      description:
        "Click the Apply button to visit the company’s website and submit your application directly.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-primary mb-4" />,
      title: "Track Your Jobs",
      description:
        "Save jobs to your Read List or Wish List. Mark jobs as Applied (coming soon).",
    },
  ];

  return (
    <div className="container mx-auto px-3 lg:px-0 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        💼 How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {steps.map((step, index) => (
          <motion.div
            variants={fadeIn("down", 500)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="bg-base-200 rounded-xl shadow-md p-6 transition hover:scale-105 duration-200 overflow-x-hidden"
          >
            <div className="flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
