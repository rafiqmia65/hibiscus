import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-base-200">
      <div className="flex gap-2">
        <span className="loading loading-bars loading-sm text-primary"></span>
        <span className="loading loading-bars loading-md text-secondary"></span>
        <span className="loading loading-bars loading-lg text-accent"></span>
      </div>
      <p className="text-lg font-semibold text-gray-600 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
