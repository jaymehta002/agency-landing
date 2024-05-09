import React from "react";
import Image from "next/image";

interface InfoBoxProps {
  title: string;
  description: string;
  imgSrc: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col font-grifter items-start bg-gray-200 rounded-lg shadow p-6 w-80 space-y-4">
      <div className="relative w-full h-32">
        <Image
          width={64}
          height={64}
          src={imgSrc}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <h3 className="font-grifter text-xl font-semibold">{title}</h3>
      <p className="font-inter text-sm">{description}</p>
    </div>
  );
};

export default InfoBox;
