import { Box, Heading, Text } from "@chakra-ui/react";
import ConnectWithMe from "./ConnectWithMe";
import FtProjectsLayout from "./FtProjectsLayout";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectImagePreview from "./ProjectImagePreview";

export interface ProjectData {
  about: string;
  mobileImage: string;
  desktopImage: string;
  websiteLink: string;
  githubLink: string;
}

const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  const projectData: ProjectData[] = [
    {
      about:
        "A software consulting platform crafted with Next.js, Sass, and Bootstrap. ",
      mobileImage: "/stardeliteMobile.webp",
      desktopImage: "/stardeliteLaptop.webp",
      websiteLink: "https://stardelitesolutions.com",
      githubLink: "https://github.com/Tulipreactjsmain/stardelite",
    },
    {
      about:
        "@2022 Collaborative NFT minting project built with (python, solidity, javascript, react, SCSS & Chakra UI). Founded by me.",
      mobileImage: "/RDHMobileView.webp",
      desktopImage: "/RDHLaptopview.webp",
      websiteLink: "https://rdh.club",
      githubLink: "https://github.com/Tulipreactjsmain/RDH_Academy",
    },
    {
      about:
        "A complete full feature E-commerce web app built with react, nodeJs, express bootstrap and MongoDB.",
      mobileImage: "/BuyPayMobileView.webp",
      desktopImage: "/BuyPayDesktopView.webp",
      websiteLink: "https://buynpay.vercel.app/",
      githubLink: "https://github.com/Tulipreactjsmain/E-commerce",
    },

    {
      about:
        "Task manager app built with react, nodeJs, express bootstrap and MongoDB.",
      mobileImage: "/TaskDutyMobileView.webp",
      desktopImage: "/TaskdutyLAptopView.webp",
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
      <Box
        h={`100vh`}
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
        opacity={1}
      >
        <Box>
          <Text
            fontSize={{ base: `3xl`, md: `5xl`, lg: `5xl` }}
            fontFamily={`PolySans Median`}
            w={`50rem`}
            maxW={`50vw`}
          >
            Featured Projects
          </Text>

          <Text pt={3} fontFamily={`'Inter', sans-serif`}>
            WEB DEVELOPER FOLIO / 2021 — 2023
          </Text>
        </Box>
        <Box h={"50vh"} overflowY={"scroll"}>
          <Box className={"projs"}>
            {projectData.map((project, index) => (
              <Box
                display={`flex`}
                gap={{ base: `4` }}
                justifyContent={`space-between`}
                alignItems={{ base: `start`, md: `center`, lg: `center` }}
                py={4}
                w={`full`}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
              >
                <ProjectDetail
                  projectData={projectData}
                  currentProject={index}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
                <ProjectImagePreview
                  projectData={projectData}
                  currentProject={index}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <ConnectWithMe />
    </FtProjectsLayout>
  );
};

export default FeaturedProjects;
