
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface InfoBoxProps {
  title: string;
  description: string;
  imgSrc: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description, imgSrc }) => {
  return (
    <motion.div
      className="flex flex-col items-start bg-[#ACEBE2] mx-4  rounded-lg shadow p-6 w-full lg:h-[400px] h-full space-y-4"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-full h-32 mb-4"
      >
        <Image
          width={120}
          height={120}
          src={imgSrc}
          alt={title}
          className="rounded-lg"
        />
      </motion.div>
      <motion.h3
        className="font-grifter text-3xl font-semibold"
        whileHover={{ color: "#333" }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="font-inter font-medium text-2xl"
        whileHover={{ color: "#333" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default InfoBox;
