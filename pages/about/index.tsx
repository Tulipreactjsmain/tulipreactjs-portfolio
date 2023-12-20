import { Box, Container, Image } from "@chakra-ui/react";
import { Magnifier } from "@/components";


const About: React.FC = () => {
  return (
    <Box
      display={`flex`}
      justifyContent={`center`}
      alignItems={`center`}
      w={`full`}
      h={`full`}
      position={`fixed`}
    >
      <Box bgColor={`white`} width={100} h={100} position={`relative`}>
        <Box
          bgColor={`black`}
          w={50}
          h={50}
          position={`absolute`}
          bottom={0}
        ></Box>
      </Box>
      {/* <Box
        className="about"
        w={`100%`}
        // opacity={0}
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
        left={0}
        top={0}
        right={0}
        position={`fixed`}
        zIndex={500}
        h={`100vh`}
        backgroundColor={`#101419`}
      >
        <Box height={`full`} width={`full`} position={`relative`}>
          <Magnifier>
            <Image
              height={`full`}
              width={`full`}
              src="/abstract-binary-code-background.webp"
              opacity={1}
            />
          </Magnifier>

          <Box
            position={`absolute`}
            transform={`translate(-50%, -50%)`}
            left={`50%`}
            top={`50%`}
            fontSize={`3xl`}
            textAlign={`center`}
          >
            I'm a "P e r f e c t i o n" chaser
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default About;
