import Image from "next/image";
import React from "react";

interface TechnologyProps {
  name: string;
  icon: string; // In a real app, this could be a path to an image or an SVG component
}

const Technology: React.FC<TechnologyProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-teal-200 rounded-lg shadow">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 text-sm font-medium">{name}</div>
    </div>
  );
};

const TechnologiesUsed: React.FC = () => {
  const technologies = [
    { name: "Flutter", icon: "/images/tech.png" },
    { name: "Dart", icon: "/images/tech.png" },
    { name: "Sockets", icon: "/images/tech.png" },
    { name: "Firebase", icon: "/images/tech.png" },
    { name: "Bloc", icon: "/images/tech.png" },
    { name: "OAuth", icon: "/images/tech.png" },
    { name: "Node JS", icon: "/images/tech.png" },
    { name: "Git", icon: "/images/tech.png" },
    { name: "AWS Amplify", icon: "/images/tech.png" },
    { name: "SQLite", icon: "/images/tech.png" },
  ];

  const firstColumnTechnologies = technologies.slice(0, 5);
  const secondColumnTechnologies = technologies.slice(5, 10);

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-8 space-y-8 lg:space-y-0 lg:space-x-0 px-4 py-12">
      <div className="w-full flex-grow flex flex-col rounded-lg bg-[#ACEBE2] p-12 lg:w-[60%]">
        <h1 className="text-4xl font-grifter font-bold text-black p-4">
          Technologies Used
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <ul className="space-y-4">
            {firstColumnTechnologies.map((tech) => (
              <li key={tech.name} className="flex items-center space-x-2">
                <Image src={tech.icon} alt={tech.name} width={72} height={72} />
                <span className="font-medium">{tech.name}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {secondColumnTechnologies.map((tech) => (
              <li key={tech.name} className="flex items-center space-x-2">
                <Image src={tech.icon} alt={tech.name} width={72} height={72} />
                <span className="font-medium">{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
