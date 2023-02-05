import { extendTheme } from "@chakra-ui/react";

const overrides = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

export default extendTheme(overrides);
