import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/home/Home";

export default function Layout() {
  return (
    <div className="space-y-[50px]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
