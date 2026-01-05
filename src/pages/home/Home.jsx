import React from "react";
import Banner from "./Banner";
import About from "./about/About";
import Internships from "./Internships";
import checkUser from "../../function/checkUser";

export default function Home() {
  const userLogin = checkUser();
  return (
    <div className="space-y-14">
      <Banner userLogin={userLogin} />
      <div className="space-y-10 mx-auto container">
        <About />
        <Internships />
      </div>
    </div>
  );
}
