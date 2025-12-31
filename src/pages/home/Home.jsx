import React from "react";
import Banner from "./Banner";
import About from "./about/About";
import Internships from "./Internships";

export default function Home() {
  return (
    <div className="space-y-14">
      <Banner />
      <div className="space-y-10 container mx-auto">
        <About />
        <Internships />
      </div>
    </div>
  );
}
