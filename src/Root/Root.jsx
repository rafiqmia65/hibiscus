import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import Loader from "../Components/Loader/Loader";

const Root = () => {
  const { state } = useNavigation();

  return (
    <div>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main>{state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}</main>
      <footer className="bg-base-200">
        <Footer></Footer>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
