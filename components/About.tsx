import { Box, Text, Image, Container } from "@chakra-ui/react";
import { Magnifier } from ".";

const About: React.FC = () => {
  return (
    <Box position={`relative`} color={`#B7AD8F`}>
      <Box
        className="about"
        cursor={`-webkit-grab`}
        w={`100%`}
        opacity={0}
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
        alignItems={`center`}
        left={0}
        top={0}
        right={0}
        position={`fixed`}
        zIndex={0}
        h={`full`}
        backgroundColor={`#FFFFF0`}
        color={`#B7AD8F`}
      >
        <Magnifier>
          <Box className="gradientBackground" height={`full`} width={`full`}>
            {/* <Image
              height={`full`}
              width={`full`}
              src="/abstract-binary-code-background.webp"
              opacity={0}
            /> */}
            <Box
              w={`full`}
              h={`full`}
              position={`absolute`}
              transform={`translate(-50%, -50%)`}
              left={`50%`}
              top={`50%`}
              zIndex={200}
              fontSize={{ base: `3xl`, md: `5xl`, lg: `4rem` }}
              textAlign={`center`}
              fontWeight={`bold`}
              display={`flex`}
              justifyContent={`center`}
              flexDirection={`column`}
              alignItems={`center`}
            >
              <Box
                width={`10vw`}
                h={`10vw`}
                rounded={`100%`}
                boxShadow={`md`}
              ></Box>
              <Text fontFamily={`'PolySans Median'`} pt={10} pb={20}>
                I am a maestro of <br /> exactitude.
              </Text>
              <Box
                width={`10vw`}
                h={`10vw`}
                rounded={`10%`}
                boxShadow={`md`}
              ></Box>
            </Box>
          </Box>
        </Magnifier>
      </Box>
    </Box>
  );
};

export default About;
