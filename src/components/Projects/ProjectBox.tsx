"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectBoxProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[#ACEBE2] p-8 w-full h-full flex flex-col justify-center items-start rounded-lg">
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-grifter font-bold mb-2 ">{title}</h1>
        <Link href={`/projects/${id}`} passHref>
          <button aria-label="View project">
            <Image
              src="/images/arrow.png"
              alt="Project open icon"
              width={24}
              height={24}
            />
          </button>
        </Link>
      </div>
      <p className=" text-base font-medium">{description}</p>
      <div className="flex w-full h-60 items-center justify-center">
        <Image
          width={355}
          height={200}
          src={imageUrl}
          alt="Descriptive visual"
        />
      </div>
    </div>
  );
};

export default ProjectBox;
