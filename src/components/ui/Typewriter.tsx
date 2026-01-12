import { ReactTyped } from "react-typed";
import React from "react";

interface TypewriterProps {
  string: string;
  typeSpeed: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ string, typeSpeed }) => {
  return (
    <div className="flex items-center flex-row">
      <ReactTyped strings={[string]} typeSpeed={typeSpeed}></ReactTyped>
    </div>
  );
};

export default Typewriter;
