import React, { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { setUser, loginUser, createUserWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const [forgotGmail, setForgotGmail] = useState("");

  const [errorText, setErrorText] = useState("");

  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;

        toast.success(`${user.displayName}'s are successfully logged In.`, {
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
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorText(errorMessage);
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

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success(
          `${user.displayName}'s account was created successfully.`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        setUser(user);
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

  return (
    <div className="pt-35 pb-15 container  mx-auto px-3 lg:px-0">
      <Helmet>
        <title>Job Tracks | login</title>
      </Helmet>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl mt-5 text-center font-bold">Login now!</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={forgotGmail}
              onChange={(e) => setForgotGmail(e.target.value)}
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {errorText && (
              <p className="mt-5 text-red-500 text-base">{errorText}</p>
            )}
            <div>
              <NavLink
                to={`/forgotPassword`}
                state={{ email: forgotGmail }}
                className="link link-hover"
              >
                Forgot password?
              </NavLink>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <h3 onClick={handleGoogleLogin} className="btn btn-primary mt-5">
              Login With Google
            </h3>

            <p className="mt-5 text-sm">
              You Have No Account? Please{" "}
              <Link to={"/signUp"} className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
