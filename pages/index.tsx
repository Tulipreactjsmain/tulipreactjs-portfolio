import { Inter } from "next/font/google";
import { useRef, useEffect, useState } from "react";
import styles from "@/sass/Home.module.scss";
import gsapMethods from "@/utils/gsapMethods";
import { Heading, VStack, Text, Box, Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

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
      <main className={`${styles.main} ${inter.className}`}>
        <VStack ref={elementRef} alignItems={`flex-start`} py={`7rem`}>
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
              // px={`0.5rem`}
            ></Text>
          </Box>

          <Heading
            className="name"
            as={`h1`}
            width={"100%"}
            fontWeight={"bold"}
            fontSize={{ base: "15vw", md: `16vw`, lg: `11rem` }}
            opacity={0}
          >
            <span className="letterHover" style={{ display: "flex" }}>
              <span>S</span>
              <span>o</span>
              <span>l</span>
              <span>o</span>
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
          <Text className="occupation" opacity={0} fontWeight={`bold`} color={`#B7AD8F`} fontSize={`4xl`}>
            UI engineer & server-side developer
          </Text>

          <Flex
            flexWrap={`wrap`}
            gap={`20`}
            justifyContent={`space-between`}
            w={`full`}
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
