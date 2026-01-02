import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/home/Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="space-y-[50px]">
      <Header />
       <Outlet />
      <Footer />
    </div>
  );
}
