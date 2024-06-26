import { notFound } from "next/navigation";
import Navbar from "@/components/Projects/Navbar";
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
  technologies: Item[];
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
        link={project.link}
        appleStoreImgSrc="/images/applestore.png"
        appleStoreLink={project.appleStoreLink}
        phoneImgSrc={project.thumbnailImage}
        background={project.backgroundHome}
      /> 
      <SummaryPage
        clientName="Client"
        clientDescription={project.about}
        clientImage="/images/hug.png"
        ourRole={project.roles}
        projectDescription={project.about}
        projectImage={project.thumbnailImage}
        background={project.backgroundRest}
      />
      <Challenges challenges={project.challanges} features={project.features} background={project.backgroundRest} />

      <TechnologiesUsed technologies={project.technologies} background={project.backgroundRest} />
      <Testimonial
        name={project.testimonial.name}
        message={project.testimonial.quote}
        position={project.testimonial.title}
        image={project.testimonial.image}
        background={project.backgroundRest}
        imageSrc1={project.footerImage}
        imageSrc2={project.testimonialImage}
      />
      <Footer />
    </div>
  );
}
