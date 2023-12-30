import { Box } from "@chakra-ui/react";
import { GradientGithubIcon } from ".";
import Link from "next/link";

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
        <Box py={`3vw`} fontSize={`5xl`} color={`green`}>
          <Link
            href="https://github.com/Tulipreactjsmain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientGithubIcon displayValue={`none`} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default GithubFooter;
