import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { GradientGithubIcon } from ".";


const HeroNameInMobile: React.FC = () => {
  return <Box
  className="name2 container"
  display={{ base: "block", md: "none", lg: "none" }}
  width={"100%"}
  fontSize={"13.2vw"}
  opacity={0}
  fontFamily={`PolySans Median`}
  lineHeight={1.1}
  letterSpacing={`-0.035em`}
  mb={`1rem`}
  pt={2}
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
  <span>Rukevwe</span>
</Box>;
};

export default HeroNameInMobile;
