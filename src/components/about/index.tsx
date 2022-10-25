import { FC } from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"

const About: FC = () => (
  <Flex flexDir="column" gap={4}>
    <Heading fontFamily="IBM Plex Mono" as="h2" fontSize="1.5rem">
      Hey, I'm Pablo 👋🏼
    </Heading>
    <Text fontFamily="IBM Plex Mono">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>

    <Heading fontFamily="IBM Plex Mono" as="h3" fontSize="1.25rem">
      TITLE 1
    </Heading>
    <Text fontFamily="IBM Plex Mono">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
    <Heading fontFamily="IBM Plex Mono" as="h3" fontSize="1.25rem">
      TITLE 2
    </Heading>
    <Text fontFamily="IBM Plex Mono">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  </Flex>
)

export default About
