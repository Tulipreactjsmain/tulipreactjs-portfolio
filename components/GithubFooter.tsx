import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { GradientGithubIcon } from ".";
import { TbSTurnDown, TbSTurnUp } from "react-icons/tb";
import handleScrollToBottomOrTop from "@/utils/handleScrollToBottomOrTop";
import { scrollPosition } from "./Magnifier";
import { useEffect, useState } from "react";

const GithubFooter: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>();
  useEffect(() => {
    setIsAtBottom(
      scrollPosition >=
        document.documentElement.scrollHeight - window.innerHeight - 1
    );
  }, []);

  return (
    <>
      <Box
        className="github-footer"
        w={`full`}
        maxW={`95rem`}
        transform={`translate(-50%, -0%)`}
        left={`50%`}
        position={`fixed`}
        zIndex={0}
        bottom={0}
        opacity={0}
        px={`3vw`}
      >
        <Flex alignItems={`center`} justifyContent={`space-between`} pb={`3vw`}>
          <Link
            href="https://github.com/Tulipreactjsmain"
            target="_blank"
            rel="noopener noreferrer"
            fontSize={`5xl`}
          >
            <GradientGithubIcon displayValue={`none`} />
          </Link>
          {isAtBottom! ? (
            <TbSTurnUp
              fontSize={`x-large`}
              color={`#7c7c6f`}
              onClick={handleScrollToBottomOrTop}
            />
          ) : (
            <TbSTurnDown
              fontSize={`x-large`}
              color={`#7c7c6f`}
              onClick={handleScrollToBottomOrTop}
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default GithubFooter;
