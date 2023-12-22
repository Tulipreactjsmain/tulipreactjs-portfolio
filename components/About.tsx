import { Box, Text, Image, Container} from "@chakra-ui/react";
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
        backgroundColor={`#FFFFF0`}
        color={`#B7AD8F`}
      >
        <Box
          className="gradientBackground"
          height={`full`}
          width={`full`}
        >
          <Magnifier>
            {/* <Image
              height={`full`}
              width={`full`}
              src="/abstract-binary-code-background.webp"
              opacity={0}
            /> */}

            <></>
          </Magnifier>

          <Box
            w={`full`}
            position={`absolute`}
            transform={`translate(-50%, -50%)`}
            left={`50%`}
            top={`50%`}
            zIndex={200}
            fontSize={{ base: `3xl`, md: `5xl`, lg: `4rem` }}
            textAlign={`center`}
            fontWeight={`bold`}
            // color={`white`}
          >
            <Text fontFamily={`'PolySans Median'`}>
              I am a maestro of <br /> exactitude.
            </Text>
          </Box>
        </Box>
      </Box>
    
    </Box>
  );
};

export default About;
