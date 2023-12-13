import { Inter } from "next/font/google";
import { useRef, useEffect } from "react";
import styles from "@/sass/Home.module.scss";
import gsapMethods from "@/utils/gsapMethods";
import { Heading, VStack, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRefs: React.RefObject<HTMLDivElement>[] = [];

  useEffect(() => {
    elementRefs.push(elementRef);
    gsapMethods({ elementRefs: elementRefs });
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <VStack ref={elementRef} alignItems={`flex-start`} py={`9rem`}>
          <Text className="hi" id="hi" px={`0.5rem`}></Text>
          <Heading
            className="name"
            as={`h1`}
            fontWeight={"bold"}
            fontSize={{ base: "5xl", md: `7xl`, lg: `7xl` }}
            opacity={0}
          >
            Solomon Adesanya
          </Heading>
        </VStack>
      </main>
    </>
  );
}
