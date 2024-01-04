import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { GradientGithubIcon } from ".";
// import Link from "next/link";

const GithubFooter: React.FC = () => {
  return (
    <>
      <Box
        className="github-footer"
        w={`full`}
        maxW={`7xl`}
        transform={`translate(-50%, -0%)`}
        left={`50%`}
        position={`fixed`}
        zIndex={0}
        bottom={0}
        opacity={0}
        px={`3vw`}
      >
        <Flex alignItems={`center`} justifyContent={`space-between`} py={`3vw`}>
          <Link
            href="https://github.com/Tulipreactjsmain"
            target="_blank"
            rel="noopener noreferrer"
            fontSize={`5xl`}
          >
            <GradientGithubIcon displayValue={`none`} />
          </Link>
          <Text
            fontWeight={`bold`}
            color={`#7c7c6f`}
            display={{ base: "block", md: "none", lg: "none" }}
          >
            Scroll down
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default GithubFooter;
