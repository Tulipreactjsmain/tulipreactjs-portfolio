import { useRef, useEffect, useState } from "react";
import styles from "@/sass/Home.module.scss";
import gsapMethods from "@/utils/gsapMethods";
import { Heading, VStack, Text, Box, Flex } from "@chakra-ui/react";

export default function Home() {
  const [playState, setPlayState] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRefs: React.RefObject<HTMLDivElement>[] = [];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlayState((prev) => !prev);
      setTimeout(() => {
        setPlayState(false);
      }, 1000);
    }, 5000);

    elementRefs.push(elementRef);
    gsapMethods({ elementRefs: elementRefs });
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className={`${styles.main}`}>
        <VStack ref={elementRef} gap={0} alignItems={`flex-start`} py={`24`}>
          <Box position={`relative`}>
            <span
              style={{ padding: "2px", opacity: 0 }}
              className="hiHighlight"
            ></span>
            <Text
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
            fontSize={{ base: "4rem", md: `16vw`, lg: `11rem` }}
            opacity={0}
            lineHeight={1}
            letterSpacing={`-0.035em`}
            mb={`1rem`}
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
              <span className={`flip-text ${playState && "active"}`}>a</span>
              <span>n</span>
              <span>y</span>
              <span>a</span>
              <div className="flip-text-back"></div>
            </span>
          </Heading>
          <Text
            className="occupation polySans"
            lineHeight={1.1}
            fontFamily={`PolySans Median`}
            opacity={0}
            color={`#B7AD8F`}
            fontSize={`5xl`}
          >
            UI engineer & server-side developer
          </Text>

          <Flex
            flexWrap={`wrap`}
            gap={`20`}
            justifyContent={`space-between`}
            w={`full`}
            pt={5}
          >
            <Box
              className="about"
              maxW={{ base: `90%`, md: `40%`, lg: `40%` }}
              opacity={0}
              mt={`2rem`}
              // fontSize={`1.2rem`}
              display={`flex`}
              flexWrap={`wrap`}
              alignItems={`center`}
              color={`#7c7c6f`}
              border={`solid`}
              px={`1rem`}
              cursor={`pointer`}
            >
              {/* I'm fueled by 🎨 design systems, user engagement, backend
              architecture, and the decentralized web (web3). */}
              Web Developer with the sauce.
            </Box>

            <Box color={`#7c7c6f`} fontSize={`1.2rem`} mt={`2rem`}>
              {/* Still thinking of what should be here...{" "} */}
            </Box>
          </Flex>
        </VStack>
      </main>
    </>
  );
}
