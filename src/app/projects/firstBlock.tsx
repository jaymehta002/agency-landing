// src/components/TwoPartSection.tsx

import Image from "next/image";
import React from "react";

interface FirstBlockProps {
  title: string;
  description: string;
  googlePlayImgSrc: string;
  phoneImgSrc: string;
}

const FirstBlock: React.FC<FirstBlockProps> = ({
  title,
  description,
  googlePlayImgSrc,
  phoneImgSrc,
}) => {
  return (
    <div className="bg-green-500 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
      {/* Text and Heading Section */}
      <div className="flex flex-col items-start justify-center space-y-4 lg:w-1/2">
        <h1 className="text-4xl font-grifter font-bold text-black">{title}</h1>
        <p className="text-black text-lg">{description}</p>
        <Image
          src={googlePlayImgSrc}
          alt="Google Play Store"
          width={192}
          height={64}
          className="w-48"
        />
      </div>
      {/* Phone Image Section */}
      <div className="flex items-center justify-center mt-8 lg:mt-0 lg:w-1/2">
        <Image
          src={phoneImgSrc}
          alt="Phone Screenshot"
          width={400}
          height={800}
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default FirstBlock;
