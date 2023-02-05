import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const About: FC = () => (
  <Flex flexDir="column" gap={4} w={["", "", "70vw"]}>
    <Heading fontFamily="IBM Plex Mono" as="h3" fontSize="1.25rem">
      My experience
    </Heading>
    <Text fontFamily="IBM Plex Mono">
      I'm a highly skilled software engineer with 5 years of experience in the industry. My focus
      has been on developing cutting-edge applications utilizing web 3 technologies.
    </Text>

    <Heading fontFamily="IBM Plex Mono" as="h3" fontSize="1.25rem">
      Skills
    </Heading>
    <Text fontFamily="IBM Plex Mono">
      I'm a technical professional with expertise in a range of cutting-edge technologies. My skill
      set includes proficiency in TypeScript, Solidity, Web3, ReactJS, GitOps CI/CD, Docker,
      GraphQL, PostgreSQL, MongoDB, Express.js, Next.js, and Foundry.
    </Text>
  </Flex>
);

export default About;
