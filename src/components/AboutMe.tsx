import React from "react";
import Typewriter from "./ui/Typewriter";

export const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="about-me text-fg1 flex flex-col items-center justify-center py-10 md:py-20 "
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-blue-light mb-4 italic">
        <Typewriter string="About me" typeSpeed={60} />
      </h1>
      <div className="w-full md:w-1/2 px-5">
        <p>
          My name is{" "}
          <span className="text-green-light">Quoc Huy Pham</span>. I
          also went by Daniel in high school but rarely use it nowadays.
        </p>
        <p className="mt-10">
          I am currently a{" "}
          <span className="text-green-light">final year student</span> at{" "}
          <span className="text-green-light">Macquarie University</span>{" "}
          studying Software Engineering. I have a genuine passion for{" "}
          <span className="text-green-light">programming</span> and{" "}
          <span className="text-green-light">technology</span>, and I
          thrive on learning new concepts and tackling challenging problems. I
          am actively seeking an internship opportunity to apply my skills in a
          real-world environment.
        </p>
        <p className="mt-10">
          Outside of academics, I enjoy playing{" "}
          <span className="text-green-light">video games</span>,
          particularly those with compelling narratives. I also have a passion
          for <span className="text-green-light">badminton</span>, though
          since relocating to Sydney, I haven&apos;t had the opportunity to play
          regularly.
        </p>
        <p className="mt-10">
          My technical <span className="text-green-light">skillset</span>{" "}
          includes:
        </p>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-green-light mb-1 font-semibold">
              Comfortable:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>CSS3</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <p className="text-green-light mb-1 font-semibold">
              Beginner:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>React Native</li>
              <li>Linux</li>
            </ul>
          </div>
          <div>
            <p className="text-green-light mb-1 font-semibold">
              Exploring:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Pandas</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>Arduino</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
