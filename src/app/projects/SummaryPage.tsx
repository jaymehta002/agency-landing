import Image from "next/image";
import React from "react";

interface SummaryPageProps {
  clientName: string;
  ourRole: string[];
  projectImage: string;
  projectDescription: string;
  clientDescription: string;
  clientImage: string;
}

const SummaryPage: React.FC<SummaryPageProps> = ({
  clientName,
  ourRole,
  projectImage,
  projectDescription,
  clientDescription,
  clientImage,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 w-full md:px-8 px-6 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6 items-stretch justify-center w-full max-w-8xl mx-auto md:px-4">
        <div className="bg-[#ACEBE2] p-8 flex flex-col items-start justify-between rounded-lg min-h-[300px]">
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
        </div>
        <div className="bg-[#ACEBE2] p-8 flex flex-col items-start justify-start rounded-lg min-h-[300px]">
          <h1 className="text-4xl font-grifter font-bold mb-2">Our Role</h1>
          <ul className="list-disc list-inside space-y-2 overflow-auto">
            {ourRole.map((role, index) => (
              <li key={index} className="text-base font-medium ">
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#ACEBE2] p-8 flex flex-col items-start justify-start rounded-lg min-h-[300px]">
          <h1 className="text-4xl py-4 px-2 font-grifter font-bold mb-2">
            About Project
          </h1>
          <p className="text-base px-2 font-medium overflow-auto">
            {projectDescription}
          </p>
        </div>
        <div className="bg-[#ACEBE2] p-8 flex flex-col items-start justify-between rounded-lg min-h-[300px]">
          <div className="w-full h-full  relative">
            <Image
              src={projectImage}
              alt="Descriptive visual"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
