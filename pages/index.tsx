import { useRef, useEffect, useState } from "react";
import gsapMethods from "@/utils/gsapMethods";
import Lenis from "@studio-freight/lenis";
import {
  useScroll,
  useAboutPageScroll,
  useFtProjsScrollEffects,
  useAboutSecondTextScroll,
  useprojectsScroll,
  useconnectWMeScroll,
} from "@/hooks";
import { TbSTurnDown } from "react-icons/tb";
import {
  About,
  Navbar,
  HeroNameInDesktop,
  HeroNameInMobile,
  FeaturedProjects,
  GithubFooter,
  CursorChaser,
} from "@/components";
import { VStack, Text, Box, Flex, Container } from "@chakra-ui/react";

export default function Home() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRefs: React.RefObject<HTMLDivElement>[] = [];
  const contextRef = elementRef;
  const [scrollY, setScrollY] = useState<number>(0);

  useScroll(contextRef);
  useAboutPageScroll(contextRef);
  useAboutSecondTextScroll(contextRef);
  useFtProjsScrollEffects(contextRef);
  useprojectsScroll(contextRef);
  useconnectWMeScroll(contextRef);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true ,});
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
          h={`125vh`}
          position={`static`}
          zIndex={1000}
          w={`full`}
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
            {/* Name in Desktop version */}
            <HeroNameInDesktop />
            {/* Name in mobile version */}
            <HeroNameInMobile />
          </Box>
          <Box
            w={`full`}
            className="title"
            pt={{ base: "0", md: `2rem`, lg: `2rem` }}
          >
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
                transform={`perspective(500px) rotateX(20deg)`}
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
        <Container className="aboutPage-opener"></Container>
        <Container className="aboutSecondText-opener"></Container>
        <Container className="ftProjs-opener"></Container>
        <Container className="projs-scroll"></Container>
        <Container className="connect-opener"></Container>
      </main>
    </>
  );
}
