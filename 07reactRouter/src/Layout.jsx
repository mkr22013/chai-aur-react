import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* This is outlet, which is react feature it helps us to keep header and footer common in all pages but it will change outlet with other pages  */}
      <Footer />
    </>
  );
}

export default Layout;
