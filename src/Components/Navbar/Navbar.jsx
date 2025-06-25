import React, { use } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.warning(`You are successfully logout.`, {
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
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
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

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-base-200 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <div>
                {user ? (
                  <div className="">
                    <p>{user.email}</p>
                    <div className="flex gap-5 my-5 items-center">
                      <NavLink to={"/myProfile"}>
                        <img
                          src={user.photoURL}
                          alt="user Photo"
                          className="w-10 ring-1 cursor-pointer rounded-full"
                        />
                      </NavLink>
                      <p>{user.displayName}</p>
                    </div>
                    <NavLink
                      onClick={handleLogout}
                      to={"/login"}
                      className="btn btn-primary text-white lg:text-lg"
                    >
                      Logout
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <NavLink
                      to={"/login"}
                      className="btn btn-primary text-white lg:text-lg"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to={"/signUp"}
                      className="btn btn-secondary text-white lg:text-lg"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <img
            src={logo}
            className="w-17 h-15 cursor-pointer rounded-xl hidden lg:block"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            {user ? (
              <div className="flex gap-5 items-center">
                <p>{user.email}</p>
                <p>{user.displayName}</p>
                <NavLink to={"/myProfile"}>
                  <img
                    src={user.photoURL}
                    alt="user Photo"
                    className="w-10 ring-1 cursor-pointer rounded-full"
                  />
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  to={"/login"}
                  className="btn btn-primary text-white lg:text-lg"
                >
                  Logout
                </NavLink>
              </div>
            ) : (
              <div className="flex gap-3">
                <NavLink
                  to={"/login"}
                  className="btn btn-primary text-white lg:text-lg"
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/signUp"}
                  className="btn btn-secondary text-white lg:text-lg"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>

          <img
            src={logo}
            className="w-17 h-15 cursor-pointer rounded-xl  lg:hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
