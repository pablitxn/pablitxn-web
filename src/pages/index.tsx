import { FC } from "react"
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Heading,
} from "@chakra-ui/react"
import Profile from "components/profile"
import About from "components/about"
import GetInTouch from "components/get-in-touch"
import { useGetInTouch } from "hooks/use-get-in-touch"

const Home: FC = () => {
  const { handleGetInTouch, isInvalidEmail } = useGetInTouch()

  return (
    <Flex justify="center" alignItems="center" p={8}>
      <Tabs>
        <Flex w={["120px", "480px", "720px"]} flexDir="row" justify="space-between">
          <Heading>Pablo Coronel</Heading>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>About</Tab>
            <Tab>Get in touch</Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel w={["120px", "480px", "720px"]}>
            <Profile />
          </TabPanel>
          <TabPanel w={["120px", "480px", "720px"]}>
            <About />
          </TabPanel>
          <TabPanel w={["120px", "480px", "720px"]}>
            <GetInTouch
              onSubmit={handleGetInTouch}
              isInvalidEmail={isInvalidEmail}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Home
