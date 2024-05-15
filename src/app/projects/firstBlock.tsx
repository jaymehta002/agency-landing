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
    <div className="bg-green-500 p-4 lg:p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between lg:mx-12 md:mx-8 mx-6  px-4 lg:px-8">
      {/* Text and Heading Section */}
      <div className="flex flex-col items-start justify-center space-y-4 lg:w-1/2 mb-6 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-grifter font-bold text-black">
          {title}
        </h1>
        <p className="text-base lg:text-lg text-black">{description}</p>
        <div className="w-48 lg:w-auto">
          <Image
            src={googlePlayImgSrc}
            alt="Google Play Store"
            width={192}
            height={64}
            layout="intrinsic"
          />
        </div>
      </div>
      {/* Phone Image Section */}
      <div className="flex items-center justify-center lg:w-1/2">
        <Image
          src={phoneImgSrc}
          alt="Phone Screenshot"
          layout="intrinsic"
          width={400}
          height={800}
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default FirstBlock;
