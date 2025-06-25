import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, setUser, createUserWithGoogle, updateUser } =
    use(AuthContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const isValidPassword = passwordRegex.test(password);

    if (!isValidPassword) {
      setErrorText(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
      );
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`${name}'s account was created successfully.`, {
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

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setErrorText(error.message);
            setUser(user);
          });

        setUser(user);
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

  const handleGoogleSignUp = () => {
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
        navigate(`${location.state ? location.state : "/"}`);
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
    <div className="pt-35 pb-15 container mx-auto px-3 lg:px-0">
      <Helmet>
        <title>Job Tracks | signUp</title>
      </Helmet>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl mt-5 text-center font-bold">Sign Up now!</h1>
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo Url</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo Url"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
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
            <button type="submit" className="btn btn-neutral mt-4">
              SignUp
            </button>

            <h3 onClick={handleGoogleSignUp} className="btn btn-primary mt-5">
              SignUp With Google
            </h3>

            <p className="mt-5 text-sm">
              Already Have An Account? Please{" "}
              <Link to={"/login"} className="text-primary font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
