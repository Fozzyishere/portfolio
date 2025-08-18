import React from "react";
import Typewriter from "./ui/Typewriter";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto text-left">
        <h1 className="flex flex-row text-5xl md:text-7xl font-bold mb-4 text-aqua-dark">
          <FaChevronRight className="text-gray-dark transform-[scale(0.75)]" />
          <Typewriter string="Quoc Huy Pham" typeSpeed={60} />
        </h1>
        <p className="p-5 text-l md:text-2xl text-fg1 mb-4 mt-4 leading-6">
          Rising software engineer with a passion to build things.
        </p>
      </div>
    </div>
  );
};

export default Hero;
