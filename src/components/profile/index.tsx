import { FC } from "react";
import { Flex, Text, Link, Avatar, HStack } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About: FC = () => (
  <Flex gap={[4, 8]} padding={[0, 4]} pt={4}>
    <Avatar
      src="https://avatars.githubusercontent.com/u/39420001?s=400&u=f8f520a8d724d0e03bc38d3f643bfa7468c87080&v=4"
      filter="brightness(70%) contrast(100%)"
      name="Pablo Coronel"
      size="2xl"
    />
    <Flex flexDir="column" justify="center" gap={[2, 2, 4]}>
      <Text>Hi, there!</Text>
      <Text>I'm Pablo </Text>
      <Text>a blockchain and fullstack developer.</Text>
      <Flex gap={[2, 2, 4, 8]}>
        <Link href="https://github.com/pablitxn">
          <HStack>
            <FaGithub />
            <Text>Github</Text>
          </HStack>
        </Link>
        <Link href="https://www.linkedin.com/in/pablitxn/">
          <HStack>
            <FaLinkedin />
            <Text>LinkedIn</Text>
          </HStack>
        </Link>
        <Link href="mailto:me@pablitxn.io">
          <HStack>
            <MdOutlineEmail />
            <Text>Mail To</Text>
          </HStack>
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default About;
