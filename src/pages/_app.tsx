import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import TabProvider from "@src/containers/home/TabProvider";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <TabProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TabProvider>
  );
}

export default MyApp;
