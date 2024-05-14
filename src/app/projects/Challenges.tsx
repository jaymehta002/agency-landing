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

const challenges: Item[] = [
  { text: "Challenge 1", img: "/path/to/challenge1.png" },
  { text: "Challenge 2", img: "/path/to/challenge2.png" },
  { text: "Challenge 3", img: "/path/to/challenge3.png" },
];

const features: Item[] = [
  { text: "Feature 1", img: "/path/to/feature1.png" },
  { text: "Feature 2", img: "/path/to/feature2.png" },
  { text: "Feature 3", img: "/path/to/feature3.png" },
];

const Challenges: React.FC<ChallengesProps> = ({ challenges, features }) => {
  return (
    <div className="flex flex-col md:flex-row h-[90vh] p-4">
      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl mb-4">Challenges</h2>
        <ul className="list-none p-0">
          {challenges.map((challenge, index) => (
            <li key={index} className="flex items-center mb-2">
              <Image
                src={challenge.img}
                alt={challenge.text}
                width={20}
                height={20}
                className="mr-2"
              />
              {challenge.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <h2 className="text-2xl mb-4">Features</h2>
        <ul className="list-none p-0">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <Image
                src={feature.img}
                alt={feature.text}
                width={20}
                height={20}
                className="mr-2"
              />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example usage
const App: React.FC = () => {
  return <Challenges challenges={challenges} features={features} />;
};

export default App;
