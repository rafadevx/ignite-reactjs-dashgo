import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rafael Del Grossi</Text>
        <Text color="gray.300" fontSize="small">rafa.comp@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Rafael Del Grossi" src="https://github.com/rafadevx.png" />
    </Flex>
  );
}