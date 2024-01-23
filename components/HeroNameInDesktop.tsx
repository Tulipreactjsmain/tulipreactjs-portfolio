import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { GradientGithubIcon } from ".";


const HeroNameInDesktop: React.FC = () => {
  return (
    <Box className="name" opacity={0}>
              <Heading
                className="polySans"
                display={{ base: "none", md: "block", lg: "block" }}
                as={`h1`}
                width={"100%"}
                // fontWeight={"bold"}
                fontSize={{ base: "13vw", md: `16vw`, lg: `11rem` }}
                lineHeight={1}
                letterSpacing={`-0.035em`}
                mb={`1rem`}
              >
                <span
                  className="firstName"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span className="letterHover">
                    <span>S</span>
                    <span>o</span>
                    <span>l</span>
                    <span style={{ color: "#7c7c6f" }}>o</span>
                    <span>m</span>
                    <span>o</span>
                    <span>n</span>
                  </span>
                  <Link
                    href={`https://github.com/Tulipreactjsmain`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="letterHover"
                    
                  >
                    <GradientGithubIcon displayValue={`block`} />
                  </Link>
                </span>
                <span
                  className="surname letterHover flip-container"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <span>A</span>
                  <span>d</span>
                  <span>e</span>
                  <span>s</span>
                  <span className={`flip-text active"}`}>a</span>
                  <span>n</span>
                  <span>y</span>
                  <span>a</span>
                  <div className="flip-text-back"></div>
                </span>
              </Heading>
            </Box>
  )
};

export default HeroNameInDesktop;
