import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, Container } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Pablo Coronel</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Container bg="#0c0f11" minH="100vh" maxW="100%" p={0} m={0}>
      <Component {...pageProps} />
    </Container>
  </ChakraProvider>
);

export default App;
