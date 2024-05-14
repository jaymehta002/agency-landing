import React from "react";
import InfoBox from "./InfoBox";
import Image from "next/image";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8 mt-8 w-full">
      <div>
        <Image
          width={38}
          height={80}
          src={"/images/spiral"}
          alt="Spring pattern"
        />
        <Image
          width={38}
          height={80}
          src={"/images/spring"}
          alt="Spring pattern"
        />
      </div>
      <h1 className="font-grifter text-6xl font-bold text-center">
        Services We Provide
      </h1>
      <p className="font-inter font-medium max-w-[600px] text-center text-lg px-4">
        We build super cool apps with a laser focus on robust development. Our
        collaborative approach involves understanding your unique goals,
        strategizing tailored solutions, and meticulously crafting apps that
        seamlessly align with your vision.
      </p>
      <h2 className="font-grifter text-3xl font-bold text-center">
        What Exactly We Do
      </h2>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center">
        <InfoBox
          imgSrc="/images/services.png"
          title="Startup & MVP"
          description="Turn your amazing idea into a ready-made application."
        />
        <InfoBox
          imgSrc="/images/services.png"
          title="Full-Cycle App Development"
          description="From idea to app store, we handle it all: features, fixes, & publishing.."
        />
      </div>
    </div>
  );
}

export default Services;
