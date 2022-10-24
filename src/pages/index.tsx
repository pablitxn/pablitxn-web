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
import GetInTouch from "components/contact-form"
import { useGetInTouch } from "hooks/use-get-in-touch"
import Footer from "components/footer"

const Home: FC = () => {
  const { handleGetInTouch, isValidEmail } = useGetInTouch()

  return (
    <Flex
      flexDir="column"
      h="100vh"
      justify="space-between"
      alignItems="center"
      p="3rem 2rem 0 2rem"
    >
      <Tabs>
        <Flex
          w={["120px", "480px", "720px"]}
          flexDir="row"
          justify="space-between"
        >
          <Heading>Pablo Coronel</Heading>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>About</Tab>
            <Tab>Contact</Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel p="2rem 0" w={["120px", "480px", "720px"]}>
            <Profile />
          </TabPanel>
          <TabPanel p="2rem 0" w={["120px", "480px", "720px"]}>
            <About />
          </TabPanel>
          <TabPanel p="2rem 0" w={["120px", "480px", "720px"]}>
            <GetInTouch
              onSubmit={handleGetInTouch}
              isValidEmail={isValidEmail}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </Flex>
  )
}

export default Home
