import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import FtProjectsLayout from "./FtProjectsLayout";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectImagePreview from "./ProjectImagePreview";

export interface ProjectData {
  about: string;
  mobileImage: string;
  desktopImage: string;
  github: string;
  websiteLink: string;
  githubLink: string;
}

const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const projectData: ProjectData[] = [
    {
      about:
        "A complete full feature E-commerce web app built with react, nodeJs, express bootstrap and MongoDB.",
      mobileImage: "/BuyPayMobileView.webp",
      desktopImage: "/BuyPayDesktopView.webp",
      github: "",
      websiteLink: "https://buynpay.vercel.app/",
      githubLink: "https://github.com/Tulipreactjsmain/E-commerce",
    },
    {
      about:
        "Task manager app built with react, nodeJs, express bootstrap and MongoDB.",
      mobileImage: "/TaskDutyMobileView.webp",
      desktopImage: "/TaskdutyLAptopView.webp",
      github: "",
      websiteLink: "https://taskduty.vercel.app",
      githubLink: "https://github.com/Tulipreactjsmain/Task-Duty-App",
    },
  ];
  function handleNext() {
    setCurrentProject((prevProj) => prevProj + 1);
  }
  function handlePrev() {
    setCurrentProject((prevProj) => prevProj - 1);
  }

  return (
    <FtProjectsLayout>
      <Box>
        <Heading
          fontSize={{ base: `3xl`, md: `5xl`, lg: `5xl` }}
          w={`50rem`}
          maxW={`50vw`}
        >
          Featured Projects
        </Heading>

        <Text pt={3}>WEB DEVELOPER FOLIO / 2021 — 2023</Text>
      </Box>
      <Box
        display={`flex`}
        gap={{ base: `4` }}
        justifyContent={`space-between`}
        alignItems={{ base: `start`, md: `center`, lg: `center` }}
        py={4}
        overflowX={`scroll`}
        w={`full`}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <ProjectDetail
          projectData={projectData}
          currentProject={currentProject}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        <ProjectImagePreview
          projectData={projectData}
          currentProject={currentProject}
        />
      </Box>
      <Footer />
    </FtProjectsLayout>
  );
};

export default FeaturedProjects;
