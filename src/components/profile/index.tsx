import { FC } from "react"
import { Flex, Text, Link, Image, HStack } from "@chakra-ui/react"
import { MdOutlineEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const About: FC = () => (
  <Flex gap={[4, 8]} padding={[0, 4]} pt={4}>
    <Image
      src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
      alt="Pablo Coronel"
      borderRadius="full"
      boxSize={["80px", "100px", "150px"]}
    />
    <Flex flexDir="column" justify="center" gap={[2, 2, 4]}>
      <Text fontSize={["0.75rem", "0.75rem", "1rem", "1.25rem"]}>
        Hey, I'm Pablo. I'm a blockchain and fullstack developer.
      </Text>
      <Flex gap={[2, 2, 4, 8]}>
        <Link href="https://github.com/pablitxn">
          <HStack>
            <FaGithub />
            <Text fontSize={["0.65rem", "0.75rem", "0.75rem", "1rem"]}>
              Github
            </Text>
          </HStack>
        </Link>
        <Link href="https://www.linkedin.com/in/pablitxn/">
          <HStack>
            <FaLinkedin />
            <Text fontSize={["0.65rem", "0.75rem", "0.75rem", "1rem"]}>
              LinkedIn
            </Text>
          </HStack>
        </Link>
        <Link href="mailto:me@pablitxn.io">
          <HStack>
            <MdOutlineEmail />
            <Text fontSize={["0.65rem", "0.75rem", "0.75rem", "1rem"]}>
              Mail To
            </Text>
          </HStack>
        </Link>
      </Flex>
    </Flex>
  </Flex>
)

export default About
