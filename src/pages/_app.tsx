import type { AppProps } from "next/app"
import Head from "next/head"
import { ChakraProvider, Container } from "@chakra-ui/react"

export default ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Cloudx DAO</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Container minH="100vh" bg="blue.800" maxW="100%">
      <Component {...pageProps} />
    </Container>
  </ChakraProvider>
)
