import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import { useLoaderData } from "react-router";
import Company from "../Components/Company/Company";
import Blogs from "../Components/Blog/Blogs";
import OurSuccess from "../Components/OurSuccess/OurSuccess";
import HowItWorks from "../Components/HowIt/HowIt";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const companies_data = useLoaderData();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Job Tracks | home</title>
      </Helmet>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <div className="container px-3 lg:px-0 mx-auto text-center py-10">
        <h2 className="text-primary font-bold text-3xl lg:text-4xl capitalize">
          Our trusted recruiting companies
        </h2>
        <p className="mt-5 max-w-[850px] mx-auto">
          Some of the popular and trusted companies listed below are constantly
          offering jobs for various positions. You can easily apply for any one
          or more positions in these companies according to your skills.
        </p>
        <div className="grid gap-5 grid-cols-2 mt-10 justify-between items-center md:grid-cols-3 lg:grid-cols-4">
          {companies_data.map((company) => (
            <Company key={company.id} company={company}></Company>
          ))}
        </div>
      </div>
      <Blogs blogs={blogs}></Blogs>
      <OurSuccess></OurSuccess>
    </div>
  );
};

export default Home;
