import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from ".";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <HamburgerMenu show={show} setShow={setShow} />
      <Flex
        position={`fixed`}
        w={`full`}
        right={0}
        left={0}
        alignItems={`center`}
        justifyContent={`center`}
      >
        <Box
          display={`flex`}
          justifyContent={`space-between`}
          maxW={`7xl`}
          px={`3vw`}
          alignItems={`center`}
          w={`full`}
        >
          <Link href={`/`}>
            <Box
              rounded={`100%`}
              overflow={`hidden`}
              w={`40px`}
              h={`40px`}
              border={`solid #E7DFC6 2px`}
              p={`3px`}
              bg={`black`}
            >
              <Image
                src={`/ProfessionalPhoto.ico`}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Link>
          <Box
            className={`${inter.className} navLinks`}
            display={{ base: `none`, md: `flex`, lg: `flex` }}
            justifyContent={`space-between`}
            alignItems={`center`}
            gap={10}
          >
            <Link
              href={`/#projects`}
              style={{ display: "flex", alignItems: "center", gap: "9px" }}
            >
              <span>
                <HiMiniRectangleStack />
              </span>
              <span>Projects</span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1R7NEhAM5OhOI4Vs2e1_7y0yJaX4it50a/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "9px" }}
            >
              <span>
                <CiMemoPad />
              </span>
              <span>Resume</span>
            </Link>

            <Box display={`flex`} alignItems={`center`} gap={`9px`}>
              <FaConnectdevelop />
              <Button
                colorScheme="body"
                className="btn41-43 btn-43"
                variant="ghost"
                border={`1px`}
                fontWeight={`bold`}
                fontSize={`small`}
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
              onClick={() => setShow(!show)}
              colorScheme="body"
              className={`hamburger hamburger--elastic-r ${
                show && "is-active"
              }`}
              type="button"
              padding={0}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
