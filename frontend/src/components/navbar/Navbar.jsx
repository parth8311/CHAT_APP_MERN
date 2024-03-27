import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import SideMenu from "../sideMenu/SideMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <SideMenu />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-96"
        >
          Chat App
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
        <div className="p-4 mx-6 h-screen flex items-center justify-center">
          <button
            style={{
              width: 100,
              height: 50,
              borderRadius: 50,
              backgroundColor: "orange",
              color: "black",
            }}
          >
            Login
          </button>
        </div>
        <div className="h-screen flex items-center justify-center">
          <button
            style={{
              width: 100,
              height: 50,
              borderRadius: 50,
              backgroundColor: "orange",
              color: "black",
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
