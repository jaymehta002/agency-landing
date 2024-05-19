"use client";
import React from "react";
import data from "../../data.json";
import ProjectBox from "./ProjectBox";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative z-0">
      <div className="relative z-1">
        <span className="bg-[url('/images/blob3.png')] bg-no-repeat right-0 w-40 h-60 absolute z-0"></span>
      </div>
      <div className="relative z-100">
        <div className="flex flex-col items-center justify-center space-y-8 py-8 w-full">
          <h1 className="font-grifter text-6xl font-bold text-center leading-10">
            Projects
          </h1>
          <p className="font-inter font-medium max-w-[600px] mx-12 text-center text-lg px-4">
            We believe in the power of technology to empower businesses. Explore
            our latest projects and see how we have helped our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 lg:gap-8 gap-4 p-4 place-items-center justify-center">
            {data.projects.map((project) => (
              <div key={project.id}>
                <ProjectBox
                  id={project.id}
                  imageUrl={project.image}
                  title={project.title}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
