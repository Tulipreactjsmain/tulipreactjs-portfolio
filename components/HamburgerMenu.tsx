import {
  Modal,
  ModalOverlay,
  Box,
  Text,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const MotionModalContent = motion(ModalContent);
interface hamburgerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const inter = Inter({ subsets: ["latin"], weight: "400" });

const HamburgerMenu: React.FC<hamburgerProps> = (props) => {
  const { isOpen, onOpen, onClose } = props;
  const scrollToProjects = () => {
    scroll.scrollTo(5260, {
      delay: 0,
      spy: true,
      smooth: true,
      offset: -500,
      duration: 1000,
    });
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        blockScrollOnMount={true}
      >
        <ModalOverlay zIndex={4000} />
        <MotionModalContent
          bottom={0}
          zIndex={50000}
          backgroundColor={`#101419`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          height={`30vh`}
        >
          <ModalBody>
            <Box
              pt={`2rem`}
              className={`${inter.className} navLinks`}
              display={`flex`}
              flexDirection={`column`}
              justifyContent={`space-between`}
              gap={5}
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
              <hr />
              <a
                href="https://drive.google.com/file/d/1MB5n-_wkcQ60HqYu535Jw0xDXmruVpzy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "9px" }}
              >
                <span>
                  <CiMemoPad />
                </span>
                <span>Resume</span>
              </a>
              <hr />

              <Box display={`flex`} alignItems={`center`} gap={`9px`}>
                <FaConnectdevelop />
                <Text onClick={scrollToProjects}>Connect</Text>
              </Box>
            </Box>
          </ModalBody>
        </MotionModalContent>
      </Modal>
    </>
  );
};

export default HamburgerMenu;
