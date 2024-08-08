import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import layoutcss from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className={layoutcss.main}>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
