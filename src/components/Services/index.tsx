"use client";
import { motion } from "framer-motion";
import InfoBox from "./InfoBox";

function Services() {
  return (
    <>
      <div>
        <span className="bg-[url('/images/spring.png')] bg-no-repeat absolute left-1/4 h-20 w-24"></span>
        <span className="bg-[url('/images/spiral.png')] bg-no-repeat absolute md:right-32 right-4 h-20 w-24"></span>
      </div>
      <motion.section
        id="services"
        className="flex flex-col items-center justify-center space-y-8 md:px-40 py-8 mt-8 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
        <motion.div
          className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <InfoBox
            imgSrc="/images/services1.png"
            title="Startup & MVP"
            description="Turn your amazing idea into a ready-made application."
          />
          <InfoBox
            imgSrc="/images/services2.png"
            title="Full-Cycle App Development"
            description="From idea to app store, we handle it all: features, fixes, & publishing."
          />
        </motion.div>
      </motion.section>
    </>
  );
}

export default Services;
