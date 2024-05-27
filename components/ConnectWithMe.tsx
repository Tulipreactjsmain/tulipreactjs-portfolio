import { Box, Text, Container, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";

const ConnectWithMe: React.FC = () => {
  return (
    <Box
      className="connect"
      id="connect"
      w={`full`}
      h={`100vh`}
      color={`#7c7c6f`}
      display={`flex`}
      flexDirection={`column`}
      justifyContent={`center`}
    >
      <Text fontSize={'3xl'}>Connect with me</Text>
      <Footer />
    </Box>
  );
};

export default ConnectWithMe;
