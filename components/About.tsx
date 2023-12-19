import { Box } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Box
      className="about"
      w={`100%`}
      opacity={0}
      display={`flex`}
      justifyContent={`center`}
      alignItems={`center`}
      left={0}
      top={`50%`}
      right={0}
      position={`fixed`}
      zIndex={1000}
    >
      I'm a "P e r f e c t i o n" chaser
    </Box>
  );
};

export default About;
