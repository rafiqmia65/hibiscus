import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { updateUser, setUser, user } = use(AuthContext);

  const [errorText, setErrorText] = useState("");

  const handleEditProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;

    console.log(name, photo);

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success(`${name}'s was Updated successfully.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        setErrorText(error.message);
        setUser(user);

        toast.error(`${errorText}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="pt-35 pb-15">
    <Helmet><title>Job Tracks | Profile Update</title></Helmet>
      <div className="card  bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Update Profile now!</h1>
          <form onSubmit={handleEditProfile} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Name"
              required
            />
            <label className="label">Photo Url</label>
            <input
              name="photoUrl"
              type="text"
              className="input w-full"
              placeholder="Photo Url"
              required
            />
            {errorText && (
              <p className="mt-5 text-red-500 text-base">{errorText}</p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
