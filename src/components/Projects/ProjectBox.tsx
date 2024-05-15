"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectBoxProps {
  key: number;
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  key,
  id,
  title,
  description,
  imageUrl,
}) => {
  console.log(key);
  return (
    <div className="bg-[#ACEBE2] p-8 w-11/12 flex flex-col justify-center items-start rounded-lg">
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
