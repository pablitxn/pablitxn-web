import { FC } from "react"
import { Flex, Text, Link, Image } from "@chakra-ui/react"

const About: FC = () => {
  return (
    <Flex>
      <Flex gap={8} padding={4}>
        <Image
          src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg"
          alt="Pablo Coronel"
          borderRadius="full"
          boxSize="150px"
        />
        <Flex flexDir="column" justify="center">
          <Text fontSize="1.5rem">
            Hey, I'm Pablo. I'm a blockchain and fullstack developer.
          </Text>
          <Flex>
            <Link href="">Github</Link>
            <Link href="">LinkedIn</Link>
            <Link href="">Mail To</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About
