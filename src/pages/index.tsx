import { FC } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import Profile from "components/profile";
import About from "components/about";
import Footer from "components/footer";

const Home: FC = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      justify="space-between"
      alignItems="center"
      p={["2rem 1rem 0 1rem", "2rem 1rem 0 1rem", "3rem 2rem 0 2rem"]}
      fontFamily="IBM Plex Mono"
      color="#a8adb2"
    >
      <Tabs variant="unstyled">
        <Flex
          w={["320px", "480px", "720px", "960px"]}
          flexDir="row"
          justify="space-between"
          alignItems="center"
        >
          <Heading fontFamily="IBM Plex Mono">Pablo Coronel</Heading>
          <TabList>
            <Tab
              borderBottom="3px solid transparent"
              _selected={{ borderBottom: "3px solid gray" }}
            >
              <Text>Profile</Text>
            </Tab>
            <Tab
              borderBottom="3px solid transparent"
              _selected={{ borderBottom: "3px solid gray" }}
            >
              <Text>About</Text>
            </Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel w={["320px", "480px", "720px"]} p={["1rem 0", "2rem 0"]}>
            <Profile />
          </TabPanel>
          <TabPanel w={["320px", "480px", "720px"]} p={["1rem 0", "2rem 0"]}>
            <About />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </Flex>
  );
};

export default Home;
