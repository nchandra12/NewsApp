import React from "react";
import Latest from "./Latest";
import Navbar from "./Navbar";
import News from "./News";

const Home = () => {
  return (
    <div className="flex-col flex-1 bg-[#ffe8d7]">
      <Navbar />
      <div className="flex h-[92.2%]">
        <News />
        <Latest />
      </div>
    </div>
  );
};

export default Home;