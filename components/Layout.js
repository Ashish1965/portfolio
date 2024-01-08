import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
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
