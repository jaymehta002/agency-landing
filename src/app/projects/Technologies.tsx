import Image from "next/image";
import React from "react";

interface TechnologyProps {
  technologies: string[];
  // In a real app, this could be a path to an image or an SVG component
}

const TechnologiesUsed: React.FC<TechnologyProps> = ({ technologies }) => {
  return (
    <section id="technology" className="flex flex-col lg:flex-row items-stretch justify-between max-w-8xl mx-auto gap-8 space-y-8 lg:space-y-0 lg:space-x-0 lg:px-12 md:px-8 px-6 py-12">
      <div className="w-full flex-grow flex flex-col rounded-lg bg-[#ACEBE2] p-12 lg:w-[60%]">
        <h1 className="text-4xl md:text-left text-center font-grifter font-bold text-black md:p-4">
          Technologies Used
        </h1>
        <div className="p-4">
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
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
    </section>
  );
};

export default TechnologiesUsed;
