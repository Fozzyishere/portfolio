import Card from "./Card";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  src: StaticImageData;
  alt: string;
  descText: string;
  techUsedText: string[];
  githubUrl?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  src,
  alt,
  descText,
  techUsedText,
  githubUrl,
}) => {
  return (
    <div className="mt-6 sm:mt-10 flex justify-center items-center w-full">
      <Card className="flex flex-col md:flex-row w-full sm:w-5/6 md:w-full">
        <div className="relative overflow-hidden content-center rounded-sm w-full md:w-2/3">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
              <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="hover:scale-95 hover:shadow-2xl transition-all duration-300"
              />
            </a>
          ) : (
            <Image
              src={src}
              alt={alt}
              width={500}
              height={500}
            />
          )}
        </div>
        <div className="p-4 md:ml-4 flex flex-col w-full md:w-2/3">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <h2 className="text-lg sm:text-xl font-semibold text-purple-dark mb-2 hover:text-purple-light transition-colors duration-200 cursor-pointer">
                {alt}
              </h2>
            </a>
          ) : (
            <h2 className="text-lg sm:text-xl font-semibold text-purple-dark mb-2">
              {alt}
            </h2>
          )}
          <p className="text-fg1 text-xs sm:text-sm">{descText}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {techUsedText.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-bg2 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoCard;
