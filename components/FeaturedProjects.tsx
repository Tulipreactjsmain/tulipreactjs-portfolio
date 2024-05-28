import { Box, Heading, Text } from "@chakra-ui/react";
import ConnectWithMe from "./ConnectWithMe";
import FtProjectsLayout from "./FtProjectsLayout";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectImagePreview from "./ProjectImagePreview";
import projectsData from "@/database/projectsData";



const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  
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
        <Box
          className="scroll-box"
          h={"50vh"}
          overflowY={"hidden"}
          // backgroundColor={"yellow"}
          position="relative"
        >
          <Box
            className={"projs"}
            position={"absolute"}
            w={'full'}
          >
            {projectsData.map((project, index) => (
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
                  projectsData={projectsData}
                  currentProject={index}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
                <ProjectImagePreview
                  projectsData={projectsData}
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
