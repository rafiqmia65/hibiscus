import React from "react";
import { fadeIn } from "../../motion/motion";
import { motion } from "framer-motion";

const Blogs = ({ blogs }) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-3 lg:px-0 text-center">
        <motion.h2
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 overflow-x-hidden"
        >
          Trending News By Job Stock
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 500)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-gray-600 max-w-[1000px] mx-auto mb-12 overflow-x-hidden"
        >
          Stay updated with the latest trends, insights, and career tips from
          the world of recruitment. At Job Stock, we curate the most relevant
          and trending news that matters to job seekers, professionals, and
          employers alike. Whether it's remote work trends, in-demand skills,
          resume tips, or interview strategies — our news section keeps you
          informed and ahead in your career journey. We believe that staying
          aware of industry movements is key to making better job decisions.
          Explore our articles and empower yourself with knowledge that gives
          you a competitive edge in today's job market.
        </motion.p>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {blogs.map((item) => (
            <motion.div
              variants={fadeIn("up", 500)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition overflow-x-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <span className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1 rounded mb-3">
                  {item.date}
                </span>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="bg-gray-100 w-full py-2 text-sm font-medium rounded text-blue-800 hover:bg-gray-200 transition">
                  Continue Reading
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
