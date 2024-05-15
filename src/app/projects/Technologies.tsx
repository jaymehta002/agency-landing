import Image from "next/image";
import React from "react";

interface TechnologyProps {
  technologies: string[];
  // In a real app, this could be a path to an image or an SVG component
}

const TechnologiesUsed: React.FC<TechnologyProps> = ({ technologies }) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-8 space-y-8 lg:space-y-0 lg:space-x-0 px-4 py-12">
      <div className="w-full flex-grow flex flex-col rounded-lg bg-[#ACEBE2] p-12 lg:w-[60%]">
        <h1 className="text-4xl font-grifter font-bold text-black p-4">
          Technologies Used
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <ul className="space-y-4">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center space-x-2">
                <Image
                  src="/images/tech.png"
                  alt={tech}
                  width={72}
                  height={72}
                />
                <span className="font-medium">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
