import Image from "next/image";
import React from "react";

interface Item {
  text: string;
  img: string;
}

interface ChallengesProps {
  challenges: Item[];
  features: Item[];
}

const Challenges: React.FC<ChallengesProps> = ({ challenges, features }) => {
  return (
    <section id="challenges" className="flex flex-col lg:flex-row items-stretch justify-between max-w-8xl mx-auto md:gap-8 gap-4 space-y-8 lg:space-y-0 lg:space-x-0 lg:px-12 md:px-8 px-6 py-12">
      <div className="w-full flex-grow flex flex-col rounded-lg bg-[#ACEBE2] p-12 lg:w-[60%]">
        <h1 className="text-4xl font-grifter font-bold text-black p-4">
          Challenges
        </h1>
        <ul className="grid grid-cols-1 gap-4 p-4">
          {challenges.map((challenge) => (
            <li key={challenge.text} className="flex items-center space-x-2 ">
              <Image
                src={challenge.img}
                alt={challenge.text}
                width={72}
                height={72}
              />
              <span>{challenge.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex-grow flex flex-col rounded-lg bg-[#ACEBE2] p-12 lg:w-[40%]">
        <h1 className="text-4xl font-grifter font-bold text-black p-4">
          Features
        </h1>
        <ul className="grid grid-cols-1 gap-4 p-4">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-start space-x-2">
              {" "}
              <Image
                src={feature.img}
                alt={feature.text}
                width={24}
                height={24}
              />
              <span className="align-top">{feature.text}</span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Challenges;
