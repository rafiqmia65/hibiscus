import React from "react";
import { NavLink } from "react-router";

const Company = ({ company }) => {
  const { logo, name, id } = company;
  return (
    <NavLink
      to={`/companyDetails/${id}`}
      className="cursor-pointer border border-amber-400 rounded-xl p-5 shadow transition-all duration-200 hover:shadow-2xl"
    >
      <img
        src={logo}
        className="max-w-[200px] h-25 rounded-full mx-auto"
        alt="Company Logo"
      />
      <p className="text-center mt-3 font-bold text-lg text-secondary">
        {name}
      </p>
    </NavLink>
  );
};

export default Company;
