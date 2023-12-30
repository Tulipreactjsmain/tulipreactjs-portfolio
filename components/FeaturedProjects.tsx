import { Box, Heading, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import { FaCircle } from "react-icons/fa6";

const FeaturedProjects: React.FC = () => {
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
      <Box maxW={`7xl`} px={`3vw`} pt={`18vh`} w={`full`} h={`full`}>
        <Heading
          fontSize={{ base: `3xl`, md: `5xl`, lg: `5xl` }}
          w={`50rem`}
          maxW={`50vw`}
          // border={`solid`}
        >
          Featured Projects
        </Heading>
        <Text pt={3}>WEB DEVELOPER FOLIO / 2021 — 2023</Text>
        <Box
          h={`30vh`}
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
        >
          <Text fontSize={{ base: `4xl`, md: `6xl`, lg: `6xl` }}>
            Coming soon...
          </Text>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
