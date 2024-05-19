'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface SummaryPageProps {
  clientName: string;
  ourRole: string[];
  projectImage: string;
  projectDescription: string;
  clientDescription: string;
  clientImage: string;
  background: string;
}

const SummaryPage: React.FC<SummaryPageProps> = ({
  clientName,
  ourRole,
  projectImage,
  projectDescription,
  clientDescription,
  clientImage,
  background,
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 w-full md:px-8 px-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6 items-stretch justify-center w-full max-w-8xl mx-auto md:px-4">
        <motion.section
          id="clients"
          className="p-8 flex flex-col items-start justify-between rounded-lg min-h-[300px]"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <div>
            <Image
              width={80}
              height={80}
              src={clientImage}
              alt="Descriptive visual"
              className="mb-4"
            />
            <h1 className="text-4xl font-grifter font-bold mb-2">
              {clientName}
            </h1>
            <p className="text-base font-medium">{clientDescription}</p>
          </div>
        </motion.section>
        <motion.section
          id="role"
          className="p-8 flex flex-col items-start justify-start rounded-lg min-h-[300px]"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-grifter font-bold mb-2">Our Role</h1>
          <ul className="list-disc list-inside space-y-2 overflow-auto">
            {ourRole.map((role, index) => (
              <li key={index} className="text-base font-medium">
                {role}
              </li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          id="about"
          className="p-8 flex flex-col items-start justify-start rounded-lg min-h-[300px]"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl py-4 px-2 font-grifter font-bold mb-2">
            About Project
          </h1>
          <p className="text-base px-2 font-medium overflow-auto">
            {projectDescription}
          </p>
        </motion.section>
        <motion.div
          className="p-8 flex flex-col items-center justify-center rounded-lg min-h-[300px]"
          style={{ backgroundColor: background }}
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center w-full h-full relative">
            <Image
              width={400}
              height={300}
              src={projectImage}
              alt="Descriptive visual"
              className="-mb-8"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryPage;
