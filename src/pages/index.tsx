import { FC } from "react";
import { Flex, Box, Text, Tabs, TabList, TabPanels, TabPanel, Tab } from "@chakra-ui/react";
import Profile from "components/profile";
import About from "components/about";

const Home: FC = () => {
  return (
    <Flex
      flexDir="column"
      justify="space-between"
      alignItems="center"
      fontFamily="IBM Plex Mono"
      color="#a8adb2"
      p={8}
    >
      <Tabs variant="unstyled">
        <Flex flexDir="row" justify="end">
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

        <Box width="60vw" p={8}>
          <TabPanels>
            <TabPanel p={["1rem 0", "2rem 0"]}>
              <Flex justify="start">
                <Profile />
              </Flex>
            </TabPanel>
            <TabPanel p={["1rem 0", "2rem 0"]}>
              <Flex justify="start">
                <About />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Flex>
  );
};

export default Home;
