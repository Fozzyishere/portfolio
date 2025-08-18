import React from "react";
import Typewriter from "./ui/Typewriter";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="text-gruvbox-fg1 flex flex-col items-center justify-center py-10 md:py-20"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-gruvbox-blue-light mb-4 italic">
        <Typewriter string="Contact info" typeSpeed={60} />
      </h1>
      <div>
        <ul className="list-disc list-inside mt-2">
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/quoc-huy-pham-912b26272/"
              className="text-gruvbox-gray-light underline"
            >
              Quoc Huy Pham
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:danielpham13092002@gmail.com"
              className="text-gruvbox-gray-light underline"
            >
              danielpham13092002@gmail.com
            </a>
          </li>
          <li>
            Github:{" "}
            <a
              href="https://github.com/Fozzyishere"
              className="text-gruvbox-gray-light underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fozzyishere
            </a>
          </li>
          <li>
            Resume:{" "}
            <a
              className="text-gruvbox-gray-light underline"
              type="application/pdf"
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
