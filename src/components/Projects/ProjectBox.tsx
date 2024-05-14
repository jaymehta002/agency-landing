"use client";
import Image from "next/image";
import React from "react";

interface ProjectBoxProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[#ACEBE2] p-8 w-96 flex flex-col items-start relative rounded-lg">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-grifter font-bold mb-2 ">{title}</h1>
        <button className="">
          <Image
            src="/images/arrow.png"
            alt="Project open icon"
            width={24}
            height={24}
          />
        </button>
      </div>
      <p className=" text-base font-medium">{description}</p>
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt="Descriptive visual"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ProjectBox;