import { useRef, useEffect } from "react";
import gsapMethods from "@/utils/gsapMethods";
import Lenis from "@studio-freight/lenis";
import {
  useScroll,
  useAboutPageScroll,
  useFtProjsScrollEffects,
} from "@/hooks";
import { TbSTurnDown } from "react-icons/tb";
import {
  About,
  Navbar,
  GradientGithubIcon,
  FeaturedProjects,
  GithubFooter,
  CursorChaser,
} from "@/components";
import { Heading, VStack, Text, Box, Flex, Container } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRefs: React.RefObject<HTMLDivElement>[] = [];
  const contextRef = elementRef;

  useScroll(contextRef);
  useAboutPageScroll(contextRef);
  useFtProjsScrollEffects(contextRef);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    elementRefs.push(elementRef);
    gsapMethods({ elementRefs: elementRefs });
  }, []);

  return (
    <>
      <main ref={elementRef} className={`main`}>
        <Navbar />
        <VStack
          id="hero"
          className="section vStack"
          gap={0}
          alignItems={`flex-start`}
          pt={{ base: `9rem`, md: `15rem`, lg: `9rem` }}
          h={`100vh`}
          position={`static`}
          zIndex={1000}
        >
          <Box w={`full`}>
            <Box
              position={`relative`}
              boxShadow={`lg white`}
              className="introText"
            >
              <span
                style={{ padding: "2px", opacity: 0 }}
                className="hiHighlight"
              ></span>

              <Text
                fontSize={`large`}
                position={`relative`}
                display={`inline-block`}
                zIndex={5}
                className="hi"
              ></Text>
            </Box>
            <Heading
              className="name polySans"
              as={`h1`}
              width={"100%"}
              fontWeight={"bold"}
              fontSize={{ base: "15vw", md: `16vw`, lg: `11rem` }}
              opacity={0}
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
          <Box w={`full`} className="title">
            <Text
              className="occupation polySans"
              lineHeight={1.1}
              fontFamily={`PolySans Median`}
              opacity={0}
              color={`#B7AD8F`}
              fontSize={{ base: "11.2vw", md: `5xl`, lg: `5xl` }}
            >
              UI engineer & server-side developer
            </Text>

            <Flex
              flexWrap={`wrap`}
              justifyContent={`space-between`}
              w={`full`}
              pt={5}
            >
              <Box
                className="slog"
                maxW={{ base: `90%`, md: `40%`, lg: `40%` }}
                opacity={0}
                mt={`2rem`}
                display={`flex`}
                flexWrap={`wrap`}
                alignItems={`center`}
                color={`#7c7c6f`}
                border={`solid`}
                px={`1rem`}
                cursor={`pointer`}
              >
                <Text fontSize={`1rem`}>Web Developer with the sauce.</Text>
              </Box>

              <Box
                display={`flex`}
                justifyContent={`space-between`}
                alignItems={`center`}
                color={`#7c7c6f`}
                mt={`2rem`}
                gap={20}
                fontSize={`xl`}
              >
                <Text>Sroll down</Text> <TbSTurnDown />
              </Box>
            </Flex>
          </Box>
        </VStack>
        <About />
        <FeaturedProjects />
        <GithubFooter />
        <CursorChaser />
        <Container
          className=""
          w={`full`}
          maxW={`7xl`}
          h={{ base: `700.5006vh`, md: `500.5006vh`, lg: `500.5006vh` }}
        ></Container>
      </main>
    </>
  );
}
