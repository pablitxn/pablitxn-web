import { FC } from "react";
import { Flex, Text, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import Profile from "components/profile";
import About from "components/about";

const Home: FC = () => {
  return (
    <Flex fontFamily="IBM Plex Mono" color="#a8adb2" p={8}>
      <Tabs variant="unstyled">
        <TabList>
          <Tab borderBottom="3px solid transparent" _selected={{ borderBottom: "3px solid gray" }}>
            <Text>Profile</Text>
          </Tab>
          <Tab borderBottom="3px solid transparent" _selected={{ borderBottom: "3px solid gray" }}>
            <Text>About</Text>
          </Tab>
        </TabList>

        <TabPanels maxW="100vw">
          <TabPanel p={["1rem 0", "2rem 0"]}>
            <Flex justify="start">
              <Profile />
            </Flex>
          </TabPanel>
          <TabPanel p={["1rem 0", "2rem 0"]}>
            <Flex justify="start" maxW={["", "", "", "50vw"]}>
              <About />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Home;
