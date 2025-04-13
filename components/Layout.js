import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}

      <Toaster position="top-center" />
    </>
  );
};

export default Layout;
