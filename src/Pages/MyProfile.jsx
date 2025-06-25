import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaUserEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="container mx-auto px-3 lg:px-0 pt-35 pb-15">
      <Helmet>
        <title>Job Tracks | my profile</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-base-200 rounded-xl shadow-lg p-5 text-center">
        <div className="text-right mb-5">
          <NavLink to={"/updateProfile"} className="btn btn-accent">
            <FaUserEdit className="text-white" />
            Edit Profile
          </NavLink>
        </div>
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-30 h-30 rounded-full mx-auto mb-4"
          />
        )}
        <h2 className="text-3xl font-bold text-primary mb-2">
          {user?.displayName}
        </h2>
        <p className="text-secondary font-medium">{user?.email}</p>
        <div className="mt-4">
          <p>
            <strong className="text-gray-900">User Id:</strong>{" "}
            <span className="text-gray-500">{user?.uid}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
