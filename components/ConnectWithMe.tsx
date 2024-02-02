import { Box, Text, Container, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

const ConnectWithMe: React.FC = () => {
  return (
    <Box
      className="connect"
      id="connect"
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
        maxW={`95rem`}
        px={`3vw`}
        w={`full`}
        h={`full`}
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
        color={`black`}
      >
      Connect with me
      </Box>
    </Box>
  
  );
};

export default ConnectWithMe;
