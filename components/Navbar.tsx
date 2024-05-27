import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { HamburgerMenu } from ".";
import NextLink from "./NextLink";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToProjects = () => {
    scroll.scrollTo(9650, {
      delay: 0,
      spy: true,
      smooth: true,
      offset: -500,
      duration: 1,
    });
  };

  const scrollToConnect = () =>
    scroll.scrollTo(13050, {
      delay: 0,
      spy: true,
      smooth: true,
      offset: -500,
      duration: 1,
    });
  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        scrollToConnect={scrollToConnect}
        scrollToProjects={scrollToProjects}
      />
      <Flex
        className="navBar"
        position={`fixed`}
        zIndex={5000}
        w={`full`}
        right={0}
        left={0}
        top={0}
        flexDirection={`column`}
        justifyContent="center"
        maxW={`95rem`}
        mx={"auto"}
        color={`#7c7c6f`}
        px={`3vw`}
      >
        <Box></Box>
        <Box
          className="navRule"
          display={`flex`}
          justifyContent={`space-between`}
          flex={`1`}
          py={`1.5rem`}
          w={`full`}
          alignItems={`center`}
        >
          <NextLink href="/">
            <Box
              rounded={`100%`}
              overflow={`hidden`}
              w={`40px`}
              h={`40px`}
              border={`solid 2px`}
              p={`3px`}
              bg={`black`}
            >
              <Image
                src={`/ProfessionalPhoto.ico`}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </NextLink>
          <Box
            className={`${inter.className} navLinks`}
            display={{ base: `none`, md: `flex`, lg: `flex` }}
            justifyContent={`space-between`}
            alignItems={`center`}
            gap={10}
            fontWeight={`bold`}
          >
            <ScrollLink
              to="projects"
              onClick={scrollToProjects}
              style={{ display: "flex", alignItems: "center", gap: "9px" }}
            >
              <span>
                <HiMiniRectangleStack />
              </span>
              <span>Projects</span>
            </ScrollLink>
            <a
              href="https://drive.google.com/file/d/1trIMc4hB-y5NfsPoxCXem35sy6o4JkfS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "9px" }}
            >
              <span>
                <CiMemoPad />
              </span>
              <span>Resume</span>
            </a>

            <Box display={`flex`} alignItems={`center`} gap={`9px`}>
              <FaConnectdevelop />
              <Button
                colorScheme="body"
                className="btn41-43 btn-43"
                variant="ghost"
                border={`1px`}
                fontWeight={`bold`}
                fontSize={`small`}
                onClick={scrollToConnect}
              >
                Connect
              </Button>
            </Box>
          </Box>
          <Box
            className={`${inter.className}`}
            display={{ base: `flex`, md: `none`, lg: `none` }}
          >
            <Button
              onClick={onOpen}
              colorScheme="body"
              className={`hamburger hamburger--elastic-r ${
                isOpen && "is-active"
              }`}
              type="button"
              padding={0}
              color={`#7c7c6f`}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </Button>
          </Box>
        </Box>
        <hr style={{ borderBottom: "solid #42433d" }} />
      </Flex>
    </>
  );
};

export default Navbar;
