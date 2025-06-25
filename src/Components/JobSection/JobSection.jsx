import React, { useState } from "react";
import { fadeIn } from "../../motion/motion";
import { motion } from "framer-motion";

const JobSection = ({ job, website }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <motion.div
      variants={fadeIn("left", 500)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="overflow-x-hidden"
    >
      <div className="border-1 shadow-xl py-10 border-secondary text-center rounded-lg p-4 bg-base-200">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center ">
          <div>
            <img
              className="max-w-[200px] mx-auto rounded-3xl"
              src={job.bannerImage}
              alt=""
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-secondary">
              {job.title}
            </h3>
            <p className="text-lg">
              <strong>Type:</strong> {job.jobType}
            </p>
            <p className="text-lg">
              <strong>Salary:</strong> {job.salary}
            </p>
          </div>
        </div>
        <button
          className="btn btn-primary mt-10 text-white"
          onClick={() => setSelectedJob(job)}
        >
          View Details
        </button>

        {/* Modal */}
        {selectedJob && (
          <dialog className="modal modal-open">
            <div className="modal-box my-10 max-w-xl">
              <h3 className="font-bold text-2xl mb-2">{selectedJob.title}</h3>
              <img
                src={selectedJob.bannerImage}
                alt={selectedJob.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <div className="bg-base-200 p-5 pl-[28%] rounded-2xl text-left mx-auto">
                <p>
                  <strong>Location:</strong>{" "}
                  <span className="text-primary">{selectedJob.location}</span>
                </p>
                <p>
                  <strong>Type:</strong>{" "}
                  <span className="text-primary">{selectedJob.jobType}</span>
                </p>
                <p>
                  <strong>Salary:</strong>{" "}
                  <span className="text-primary">{selectedJob.salary}</span>
                </p>
              </div>
              <p className="mt-4 text-justify text-gray-500">
                {selectedJob.description}
              </p>
              <ul className="list-disc list-inside mt-4 text-left ml-10 text-secondary">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <div className="modal-action flex justify-between mt-6">
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-white"
                >
                  Apply
                </a>
                <button
                  className="btn btn-outline"
                  onClick={() => setSelectedJob(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </motion.div>
  );
};

export default JobSection;
