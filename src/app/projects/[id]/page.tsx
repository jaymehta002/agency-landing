import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import React from "react";
import FirstBlock from "../firstBlock";
import SummaryPage from "../SummaryPage";
import Challenges from "../Challenges";
import TechnologiesUsed from "../Technologies";
import Testimonial from "../Testimonial";
import Footer from "@/components/Footer";
import data from "../../../data.json"; // Adjust the path as needed

interface Item {
  text: string;
  img: string;
}

interface ProjectProps {
  id: number;
  title: string;
  image: string;
  description: string;
  about: string;
  roles: string[];
  technologies: string[];
  thumbnailImage: string;
  challanges: Item[];
  features: Item[];
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return data.projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const projectId = parseInt(params.id, 10);
  const project = data.projects.find((proj) => proj.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#E7F8FC]">
      <Navbar />
      <FirstBlock
        title={project.title}
        googlePlayImgSrc="/images/googleplay.png"
        description={project.description}
        phoneImgSrc={project.thumbnailImage}
      />
      <SummaryPage
        clientName="Client"
        clientDescription={project.about}
        clientImage="/images/hug.png"
        ourRole={project.roles}
        projectDescription={project.about}
        projectImage={project.thumbnailImage}
      />
      <Challenges challenges={project.challanges} features={project.features} />
      <TechnologiesUsed technologies={project.technologies} />
      <Testimonial
        name="Yato"
        message="We have been working with this agency for a long, and these guys
              have never let us down."
      />
      <Footer />
    </div>
  );
}
