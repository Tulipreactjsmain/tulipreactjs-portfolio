import {
  Box,
  Text,
  VStack,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Image
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";

const ConnectWithMe: React.FC = () => {
  return (
    <VStack
      className="connect"
      id="connect"
      w={`full`}
      h={`full`}
      minH={"100vh"}
      // color={`#7c7c6f`}
      justifyContent={"center"}
      alignItems="center"
    >
      <Flex
        w={`full`}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={{ base: "0.5rem", md: "5rem", lg: "5rem" }}
      >
        <Flex
          className="form-bg"
          direction="column"
          backgroundImage="url('https://res.cloudinary.com/techbro/image/upload/v1716849816/gradient-7258997_1280_gen6fh.png')"
          p={8}
          rounded="md"
          shadow="md"
          maxW="600px"
          w="full"
          position={"relative"}
          color={'#FFFFF0'}
        >
          <Box
            rounded="lg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          ></Box>
          <Flex direction="column" position={"static"} zIndex={2}>
            <Text fontSize="3xl" mb={4} textAlign="center">
              Connect with me
            </Text>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Your Name"
                focusBorderColor="teal.500"
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                focusBorderColor="teal.500"
              />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Your Message"
                focusBorderColor="teal.500"
              />
            </FormControl>
            <Button colorScheme="teal" size="lg" mt={4} type="submit">
              Submit
            </Button>
          </Flex>
        </Flex>
        
      </Flex>
      <Footer />
    </VStack>
  );
};

export default ConnectWithMe;
