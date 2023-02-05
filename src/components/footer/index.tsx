import { FC } from "react";
import { Flex, Text, Box, Link } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Flex justify="space-between" p={4} color="gray.600">
      <Link href="https://github.com/cloudx-labs/cloudx-dao/issues/new" as="small" p={0}>
        <Text fontSize=".75rem">trabajamos juntos?</Text>
      </Link>
      <Box>
        <Flex justify="end" gap={2}>
          <Link href="https://github.com/cloudx-labs/cloudx-dao/issues/new" as="small" p={0}>
            <Text>en</Text>
          </Link>
          <Link href="https://github.com/cloudx-labs/cloudx-dao/issues/new" as="small" p={0}>
            <Text>es</Text>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
