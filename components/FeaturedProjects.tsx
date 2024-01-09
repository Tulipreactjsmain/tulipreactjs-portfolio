import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import Footer from "./Footer";
import FtProjectsLayout from "./FtProjectsLayout";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

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
      mobileImage: "/TaskdutyMobileView.webp",
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
        <Box
          position={`relative`}
          maxW={{ base: `full`, md: `100vw`, lg: `45vw` }}
          h={{ base: `30vh`, md: `300`, lg: `450` }}
          overflow={`hidden`}
          rounded={20}
        >
          <Box
            className="imgBox"
            position="absolute"
            content=""
            h="100%"
            width="100%"
            zIndex={0}
            bg={`red`}
          ></Box>
          <Link
            position={`relative`}
            h={`full`}
            w={`full`}
            display={`block`}
            href={projectData[currentProject]?.websiteLink}
            rel="noopener"
            target="_blank"
          >
            <Box position={`relative`} top={20} left={20} h={`full`}>
              <Image
                src={projectData[currentProject]?.desktopImage}
                w={`full`}
                h={`full`}
                alt="Project preview"
                fetchPriority="high"
              />
              <Image
                src={projectData[currentProject]?.mobileImage}
                alt="Project preview"
                w={`20%`}
                h={{ base: `70%`, md: `70%`, lg: `60%` }}
                position={`absolute`}
                zIndex={3}
                bottom={0}
                left={15}
                fetchPriority="high"
              />
            </Box>
          </Link>
        </Box>
      </Box>
      <Footer />
    </FtProjectsLayout>
  );
};

export default FeaturedProjects;
