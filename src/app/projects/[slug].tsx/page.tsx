// pages/projects/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import FirstBlock from "../firstBlock";
import SummaryPage from "../SummaryPage";
import Challenges from "../Challenges";
import TechnologiesUsed from "../Technologies";
import Testimonial from "../Testimonial";
import Footer from "../../../components/Footer";
import data from "../../../data.json";

interface Item {
  text: string;
  img: string;
}

interface ProjectProps {
  project: {
    slug: string;
    title: string;
    description: string;
    googlePlayImgSrc: string;
    phoneImgSrc: string;
    clientName: string;
    clientDescription: string;
    clientImage: string;
    ourRole: string[];
    projectDescription: string;
    projectImage: string;
    challenges: Item[];
    features: Item[];
  };
}

const ProjectPage: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#E7F8FC]">
      <Navbar />
      <FirstBlock
        title={project.title}
        googlePlayImgSrc={project.googlePlayImgSrc}
        description={project.description}
        phoneImgSrc={project.phoneImgSrc}
      />
      <SummaryPage
        clientName={project.clientName}
        clientDescription={project.clientDescription}
        clientImage={project.clientImage}
        ourRole={project.ourRole}
        projectDescription={project.projectDescription}
        projectImage={project.projectImage}
      />
      <Challenges challenges={project.challenges} features={project.features} />
      <TechnologiesUsed />
      <Testimonial />
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = data.projects;

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const projects = data.projects;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
