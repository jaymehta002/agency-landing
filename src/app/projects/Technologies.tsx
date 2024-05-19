"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Item {
  text: string;
  img: string;
}

interface TechnologyProps {
  technologies: Item[];
  background: string;
}

const TechnologiesUsed: React.FC<TechnologyProps> = ({
  technologies,
  background,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="technology"
      className="flex flex-col lg:flex-row items-stretch justify-between max-w-8xl mx-auto gap-8 space-y-8 lg:space-y-0 lg:space-x-0 lg:px-12 md:px-8 px-6 py-12"
    >
      <motion.div
        className="w-full flex-grow flex flex-col rounded-lg p-12 lg:w-[60%]"
        style={{ backgroundColor: background }}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <h1 className="text-4xl md:text-left text-center font-grifter font-bold text-black md:p-4">
          Technologies Used
        </h1>
        <div className="p-4">
          <motion.ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {technologies.map((technology) => (
              <motion.li
                key={technology.text}
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <Image
                  src={technology.img} // Use item.img for the image source
                  alt={technology.text} // Use item.text for the alt text
                  width={72}
                  height={72}
                />
                <span className="font-medium">{technology.text}</span>{" "}
                {/* Use item.text for the text content */}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologiesUsed;
