import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <MotionWrapper>
          <Footer></Footer>
        </MotionWrapper>
      </footer>
    </>
  );
};

export default MainLayout;
