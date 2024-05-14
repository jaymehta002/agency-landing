import Navbar from "@/components/Navbar";
import React from "react";
import FirstBlock from "./firstBlock";
import SummaryPage from "./SummaryPage";
import Challenges from "./Challenges";

interface ProjectProps {
  // Define your props here
}

const ProjectPage: React.FC<ProjectProps> = () => {
  return (
    <div className="bg-[#E7F8FC]">
      <Navbar />
      <FirstBlock
        title="Project Title"
        googlePlayImgSrc="/images/googleplay.png"
        description="Project Description"
        phoneImgSrc="/images/phone.png"
      />
      <SummaryPage
        clientName="Client Name"
        clientDescription="Client Description"
        clientImage="/images/hug.png"
        ourRole={["Role 1", "Role 2", "Role 3"]}
        projectDescription="Project Description"
        projectImage="/images/phone.png"
      />
      <Challenges />
    </div>
  );
};

export default ProjectPage;
