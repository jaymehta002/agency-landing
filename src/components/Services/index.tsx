import React from "react";
import InfoBox from "./InfoBox";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8 w-full">
      <h1 className="font-grifter text-4xl font-bold text-center">
        Main Heading
      </h1>
      <p className="font-inter text-center text-lg px-4">
        This is some descriptive text that gives more details about the content
        of the page or component.
      </p>
      <h2 className="font-grifter text-2xl font-semibold text-center">
        Subheading
      </h2>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center">
        <InfoBox
          imgSrc="/images/hero1.png"
          title="Startup & MVP"
          description="Turn your amazing idea into a ready-made application."
        />
        <InfoBox
          imgSrc="/images/hero1.png"
          title="Full-Cycle App Development"
          description="From idea to app store, we handle it all: features, fixes, & publishing.."
        />
      </div>
    </div>
  );
}

export default Services;
