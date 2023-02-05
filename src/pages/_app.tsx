import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import theme from "theme";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>Pablo Coronel</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Container minH="100vh" maxW="100%" p={0} m={0}>
      <Flex minH="100vh" flexDir="column">
        <Box flex={1}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </Container>
  </ChakraProvider>
);

export default App;
