import Navbar from "@/components/Navbar";
import React from "react";
import FirstBlock from "./firstBlock";
import SummaryPage from "./SummaryPage";
import Challenges from "./Challenges";
import TechnologiesUsed from "./Technologies";
interface Item {
  text: string;
  img: string;
}
interface ProjectProps {
  // Define your props here
}

const ProjectPage: React.FC<ProjectProps> = () => {
  const challenges: Item[] = [
    {
      text: "Design a clear and intuitive UX/UI so users can understand what to do from the first seconds.",
      img: "/images/challenge1.png",
    },
    {
      text: "Design a clear and intuitive UX/UI so users can understand what to do from the first seconds.",
      img: "/images/challenge2.png",
    },
    {
      text: "Design a clear and intuitive UX/UI so users can understand what to do from the first seconds.",
      img: "/images/challenge3.png",
    },
  ];

  const features: Item[] = [
    {
      text: "Interactive timeline with zoom and scroll",
      img: "/images/tick.png",
    },
    { text: "Gallery of photos and locations", img: "/images/tick.png" },
    { text: "Dark and light app themes", img: "/images/tick.png" },
    { text: "Offline mode and cloud synchronization", img: "/images/tick.png" },
    { text: "Lots of custom user preferences", img: "/images/tick.png" },
  ];
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
        clientName="Client "
        clientDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        clientImage="/images/hug.png"
        ourRole={["Flutter Development", "Backend Development", "UI/UX Design"]}
        projectDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        projectImage="/images/phone.png"
      />
      <Challenges challenges={challenges} features={features} />
      <TechnologiesUsed />
    </div>
  );
};

export default ProjectPage;
