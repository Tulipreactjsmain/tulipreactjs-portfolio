import { Box, Heading } from "@chakra-ui/react";

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
      <Box maxW={`7xl`} px={`3vw`} pt={`9rem`} w={`full`} h={`full`}>
        <Heading
          fontSize={{ base: `3xl`, md: `5xl`, lg: `5xl` }}
          w={`50rem`}
          maxW={`50vw`}
          // border={`solid`}
        >
          Featured Projects
        </Heading>
        {/* <div id="projects" ></div> */}
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
