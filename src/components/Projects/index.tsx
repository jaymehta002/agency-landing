import React from "react";
import ProjectBox from "./ProjectBox";
import data from "../../data.json";
const Projects: React.FC = () => {

  return (
    <section id="projects">
      <div className="flex  z-10 flex-col items-center justify-center space-y-8 py-8 w-full">
        <h1 className="font-grifter text-6xl font-bold text-center leading-10">
          Projects
        </h1>
        <p className="font-inter font-medium max-w-[600px] text-center text-lg px-4">
          We believe in the power of technology to empower businesses. Explore
          our latest projects and see how we have helped our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center items-center justify-center space-y-4 lg:space-y-0">
          <ProjectBox
            imageUrl="/images/project.png"
            title="Project Name"
            description="Tagline or a short project description gives justice to the card"
          />
          <ProjectBox
            imageUrl="/images/project.png"
            title="Project Name"
            description="Tagline or a short project description gives justice to the card"
          />
          <ProjectBox
            imageUrl="/images/project.png"
            title="Project Name"
            description="Tagline or a short project description gives justice to the card"
          />
          <ProjectBox
            imageUrl="/images/project.png"
            title="Project Name"
            description="Tagline or a short project description gives justice to the card"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
