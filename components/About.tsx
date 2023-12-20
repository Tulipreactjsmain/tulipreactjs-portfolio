import { Box, Text, Image } from "@chakra-ui/react";
import { Magnifier } from ".";

const About: React.FC = () => {
  return (
    <Box position={`relative`}>
      <Box
        className="about"
        cursor={`-webkit-grab`}
        w={`100%`}
        opacity={0}
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
        left={0}
        top={0}
        right={0}
        position={`fixed`}
        zIndex={0}
        h={`100vh`}
        backgroundColor={`#101419`}
      >
        <Box height={`full`} width={`full`}>
          <Magnifier>
            <Image
              height={`full`}
              width={`full`}
              src="/abstract-binary-code-background.webp"
              opacity={0.1}
            />
          </Magnifier>

          <Box
          w={`full`}
            position={`absolute`}
            transform={`translate(-50%, -50%)`}
            left={`50%`}
            top={`50%`}
            fontSize={{ base: `2xl`, md: `3xl`, lg: `5xl` }}
            textAlign={`center`}
            fontWeight={`bold`}
          >
            <Text>I'm a "P e r f e c t i o n" chaser</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
