import { Box, Text, Container, Link } from "@chakra-ui/react";
import { Magnifier } from ".";
import { GradientGithubIcon } from ".";
const About: React.FC = () => {
  return (
    <Box position={`relative`} color={`#B7AD8F`}>
      <Box
        className="about"
        id="about"
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
        h={`100vh`}
        backgroundColor={`#FFFFF0`}
        color={`#7c7c6f`}
      >
        <Magnifier>
          <Box
            className="gradientBackground"
            height={`full`}
            width={`full`}
            position={`relative`}
          >
            {/* <Image
              height={`full`}
              width={`full`}
              src="/abstract-binary-code-background.webp"
              opacity={0}
            /> */}
            <Box
              w={`full`}
              h={`full`}
              backgroundImage={
                "linear-gradient(to right, rgba(16, 20, 25, 0.1) 2px, transparent 1px)"
              }
              backgroundSize={"100px 100%"}
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
              <Text w={`50rem`} maxW={`70vw`}  className="aboutIntroText" fontFamily={`'PolySans Median'`} id="aboutIntroText" pt={10} pb={20}>
                I am a maestro of <br /> exactitude.
              </Text>
              <Box
                width={`10vw`}
                h={`10vw`}
                rounded={`10%`}
                boxShadow={`md`}
              ></Box>
            </Box>
            <Box
              w={`full`}
              maxW={`7xl`}
              transform={`translate(-50%, -0%)`}
              left={`50%`}
              position={`absolute`}
              zIndex={200}
              bottom={0}
              px={`3vw`}
            >
              <Box py={`3vw`} fontSize={`5xl`} color={`green`}>
                <Link href="https://github.com/Tulipreactjsmain">
                  <GradientGithubIcon displayValue={`none`} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Magnifier>
      </Box>
      
    </Box>
  );
};

export default About;
