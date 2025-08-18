import React from "react";
import Typewriter from "./ui/Typewriter";
import InfoCard from "./ui/InfoCard";
import PortfolioImg from "../img/portfolio.png";
import VivaMQ from "../img/vivamq.png";
import ImageConverter from "../img/image-converter.png";
import OneVOne from "../img/1v1.png";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full h-full py-10 md:py-20"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-light mb-2 sm:mb-4 italic">
        <Typewriter string="Projects" typeSpeed={60} />
      </h1>
      <h3 className="text-sm sm:text-base md:text-lg text-fg0 text-center mb-6">
        Some cool stuff I made.
      </h3>
      <div className="flex flex-col w-full max-w-4xl gap-6 md:gap-8">
        <InfoCard
          src={OneVOne}
          alt="Valorant 1v1 ban-pick OBS overlay"
          descText="A Valorant 1v1 ban-pick OBS overlay. Currently in development. Intented to have a player client and a host client that players can send their ban-pick info back to the admin for hands-free controls."
          techUsedText={["React", "Tauri", "Tailwind", "Zustand", "Vite", "Socket.io"]}
          githubUrl="https://github.com/Fozzyishere/valorant-1v1-banpick-overlay"
        />
        <InfoCard
          src={PortfolioImg}
          alt="Portfolio"
          descText="My personal portfolio website built with Next.js and Tailwind CSS."
          techUsedText={["Next.js", "Tailwind"]}
          githubUrl="https://github.com/Fozzyishere/portfolio"
        />
        <InfoCard
          src={VivaMQ}
          alt="VivaMQ"
          descText="VivaMQ is an AI-based question generator for the Viva exam in Maquarie University. I worked on the project as a front-end technical lead."
          techUsedText={["Next.js", "Tailwind", "Shadcn", "Zustand"]}
          githubUrl="https://github.com/Fozzyishere/VivaMQ"
        />
        <InfoCard
          src={ImageConverter}
          alt="Image Converter"
          descText="Since all free image converter are filled with ads, I decided to build my own. It utilises FFmpeg to efficiently convert images to different formats."
          techUsedText={["React Native", "Tailwind", "FFmpeg"]}
          githubUrl="https://github.com/Fozzyishere/image-converter"
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg text-fg0 pt-6 md:pt-10 text-center">
        Smaller projects can be found on my{" "}
        <a
          className="text-red-dark hover:text-red-light"
          type="application/pdf"
          href="./resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </h3>
    </div>
  );
};
