import { Box, Heading, Text, Image, Flex, Link } from "@chakra-ui/react";
import Footer from "./Footer";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

interface ProjectData {
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
      mobileImage: "/BuyPayMobileView.png",
      desktopImage: "/BuyPayDesktopView.png",
      github: "",
      websiteLink: "https://buynpay.vercel.app/",
      githubLink: "https://github.com/Tulipreactjsmain/E-commerce",
    },
    {
      about:
        "Task manager app built with react, nodeJs, express bootstrap and MongoDB.",
      mobileImage: "/TaskdutyMobileView.png",
      desktopImage: "/TaskdutyLAptopView.png",
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
  console.log(projectData.length);

  return (
    <Box
      className="featurProjects"
      id="projects"
      w={`100%`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`center`}
      alignItems={`center`}
      left={0}
      top={0}
      right={0}
      position={`fixed`}
      zIndex={0}
      opacity={0}
      h={`100vh`}
      color={`#7c7c6f`}
    >
      <Box
        maxW={`7xl`}
        px={`3vw`}
        w={`full`}
        h={`full`}
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
      >
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
          <Flex
            flexDirection={`column`}
            fontWeight={`bold`}
            gap={4}
            maxW={`350`}
          >
            <Text fontSize={`small`} className="gradient-text">
              {projectData[currentProject]?.about}
            </Text>
            <Box
              display={`flex`}
              justifyContent={`space-between`}
              alignItems={`center`}
              gap={2}
              fontSize={`2xl`}
            >
              <Flex gap={5}>
                <Link
                  href={projectData[currentProject]?.githubLink}
                  rel="noopener"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={projectData[currentProject]?.websiteLink}
                  rel="noopener"
                  target="_blank"
                >
                  <MdLanguage />
                </Link>
              </Flex>
              <Flex gap={5}>
                {currentProject > 0 && (
                  <Box onClick={handlePrev}>
                    <GrLinkPrevious className="circle" />
                  </Box>
                )}

                {projectData.length - 1 > currentProject && (
                  <Box onClick={handleNext}>
                    <GrLinkNext className="circle" />
                  </Box>
                )}
              </Flex>
            </Box>
          </Flex>
          <Box
            position={`relative`}
            w={{ base: `full`, md: `100vw`, lg: `45vw` }}
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
                />
                <Image
                  src={projectData[currentProject]?.mobileImage}
                  w={`20%`}
                  h={{ base: `70%`, md: `70%`, lg: `60%` }}
                  position={`absolute`}
                  zIndex={3}
                  bottom={0}
                  left={15}
                />
              </Box>
            </Link>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
