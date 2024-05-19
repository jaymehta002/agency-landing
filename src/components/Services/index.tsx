"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import InfoBox from "./InfoBox";

function Services() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="mt-20">
      <div className="z-0">
        <motion.span
          style={{ scale }}
          className="bg-[url('/images/spring.png')] lg:block hidden bg-no-repeat absolute md:left-1/4 h-20 w-24"
        ></motion.span>
        <motion.span
          style={{ scale }}
          className="bg-[url('/images/spiral.png')] z-0 bg-no-repeat absolute right-8 md:right-32 right-4 h-20 w-14"
        ></motion.span>
      </div>
      <motion.section
        id="services"
        className="flex flex-col relative z-20 items-center justify-center space-y-8 md:px-40 py-8 mt-8 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
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
          className="flex flex-col lg:flex-row mx-6 space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
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
    </div>
  );
}

export default Services;