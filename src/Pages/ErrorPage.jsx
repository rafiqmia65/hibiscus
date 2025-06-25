import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>Job Tracks | error 404</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-5">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-base lg:text-lg max-w-xl mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>
        <Link to="/" className="btn btn-primary text-white">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
