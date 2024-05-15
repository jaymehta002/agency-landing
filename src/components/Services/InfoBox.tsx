import React from "react";
import Image from "next/image";

interface InfoBoxProps {
  title: string;
  description: string;
  imgSrc: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="flex flex-col items-start bg-gray-200 mx-4  rounded-lg shadow p-6 w-11/12 h-full space-y-4">
      <div className="relative w-full h-32 mb-4">
        <Image
          width={120}
          height={120}
          src={imgSrc}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <h3 className="font-grifter text-3xl font-semibold">{title}</h3>
      <p className="font-inter font-medium text-2xl">{description}</p>
    </div>
  );
};

export default InfoBox;
