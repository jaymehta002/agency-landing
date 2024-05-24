"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectBoxProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectCardColor: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  title,
  description,
  imageUrl,
  projectCardColor,
}) => {
  return (
    <div className="bg-[#ACEBE2] p-8 w-full h-full flex flex-col justify-center items-start rounded-lg">
      <Link href={`/projects/${id}`} passHref>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-grifter font-bold mb-2 ">{title}</h1>
          <button aria-label="View project">
            <Image
              src="/images/arrow.png"
              alt="Project open icon"
              width={24}
              height={24}
            />
          </button>
        
      </div>
      <p className=" text-base font-medium">{description}</p>
      <div className={`flex w-full rounded-xl mt-4 h-60 items-center justify-center`} style={{backgroundColor: projectCardColor}}>
        <Image
          width={400}
          height={200}
          src={imageUrl}
          alt="Descriptive visual"
        />
      </div>
      </Link>
    </div>
  );
};

export default ProjectBox;
