import { FC } from "react"
import { Flex, Text } from "@chakra-ui/react"

const Footer: FC = () => (
  <Flex flexDir="column" alignItems="center" p={8}>
    <Text color="whiteAlpha.900">© 2022</Text>
  </Flex>
)

export default Footer
