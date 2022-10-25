import type { AppProps } from "next/app"
import Head from "next/head"
import { ChakraProvider, Container } from "@chakra-ui/react"

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Head>
      <title>Pablo Coronel</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Container bg="#0c0f11" minH="100vh" maxW="100%" p={0} m={0}>
      <Component {...pageProps} />
    </Container>
  </ChakraProvider>
)

export default App
