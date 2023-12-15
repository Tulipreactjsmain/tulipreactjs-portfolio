import "@/sass/globals.scss";
import '@fontsource/lilita-one';
import '@fontsource-variable/inter';

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/customTheme";
import { HeadMetaData, Navbar, Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMetaData />
      <ChakraProvider theme={theme}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
