import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/home/Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
      <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-row my-5 mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>

  );
}
