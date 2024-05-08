import React from "react";
import data from "../../data";
import Image from "next/image";
const Index = () => {
  return (
    <div className="flex flex-row">
      {/* Content on the Left */}
      <div className="w-1/2 p-8">
        <h1 className="font-grifter text-xl mb-4">
          Fluttering your Ideas into Digital Reality
        </h1>
        <ul className="list-disc">
          <li>Innovative</li>
          <li>Design</li>
          <li>Develop</li>
        </ul>
      </div>
      {/* Image on the Right */}
      <div className="w-full sm:w-1/2">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2">
            <Image
              src={data.hero.images[0]}
              alt="First Image"
              width={1080}
              height={1080}
              className="object-cover w-full h-80 sm:h-auto"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:pl-2">
            <Image
              src={data.hero.images[1]}
              alt="Second Image"
              width={1080}
              height={1080}
              className="object-cover w-full h-80 sm:h-auto"
            />
          </div>
          <div className="w-full mt-2 sm:mt-0">
            <Image
              src={data.hero.images[2]}
              alt="Third Image"
              width={1080}
              height={1080}
              className="object-cover w-full h-80 sm:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
