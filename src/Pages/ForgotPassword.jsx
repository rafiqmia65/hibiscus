import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Bounce, toast } from "react-toastify";

const ForgotPassword = () => {
  const { forgotPassword } = use(AuthContext);

  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const [forgetEmail, setEmail] = useState(emailFromLogin);

  const [errorText, setErrorText] = useState("");

  const handlePasswordForget = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    forgotPassword(email)
      .then(() => {
        toast.success(`Forgotten password email sent ${email}.`, {
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
        const errorMessage = error.message;
        setErrorText(errorMessage);
      });
  };
  return (
    <div className="pt-35 pb-15 container  mx-auto px-3 lg:px-0">
      <Helmet>
        <title>Job Tracks | Forget Password</title>
      </Helmet>
      <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl mt-5 text-center font-bold">Forgot now!</h1>
        <div className="card-body">
          <form onSubmit={handlePasswordForget} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              value={forgetEmail}
              className="input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {errorText && (
              <p className="mt-5 text-red-500 text-base">{errorText}</p>
            )}
            <button className="btn btn-neutral mt-4">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
