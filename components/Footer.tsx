import { Flex, Box, Text } from "@chakra-ui/react";
import { PiCopyrightLight } from "react-icons/pi";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <Box display={`flex`} flexDirection={`column`} gap={2} position={`absolute`} py={`12vh`} bottom={0} zIndex={5000}>
      <Flex
        color={`#7c7c6f`}
        alignItems={`center`}
        textAlign={`start`}
        justifyContent={`start`}
        gap={1}
        w={`fit-content`}
        wrap={`wrap`}
      >
        <span>All rights reserved </span>
        <span style={{ fontSize: "1.2rem" }}>
          <PiCopyrightLight />
        </span>
        <span>Solomon Adesanya 2023.</span>
      </Flex>
      <Flex gap={5} w={`fit-content`} alignItems={`center`} textAlign={`start`}>
        {/* <Text>Connect with me</Text> */}
        <Link
          href={`https://www.instagram.com/tulipmaneth`}
          rel="noopener"
          target="_blank"
        >
          <FaInstagram style={{ fontSize: "1.2rem" }} />
        </Link>
        <Link
          href={`https://linkedin.com/in/solomon-adesanya-tulipreactjs`}
          rel="noopener"
          target="_blank"
        >
          <FaLinkedinIn style={{ fontSize: "1.2rem" }} />
        </Link>
        <Link
          href={`https://twitter.com/tulipmaneth`}
          rel="noopener"
          target="_blank"
        >
          <FaTwitter style={{ fontSize: "1.2rem" }} />
        </Link>
        <Link
          href={`mailto:tulipreactjs@gmail.com`}
          rel="noopener"
          target="_blank"
        >
          <MdEmail style={{ fontSize: "1.2rem" }} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
