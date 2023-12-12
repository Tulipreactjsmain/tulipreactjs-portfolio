import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { HeadMetaData } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMetaData />
      <Component {...pageProps} />
    </>
  );
}
