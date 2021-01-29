import { Box, HStack, Text } from "@chakra-ui/core";
import React from "react";

const Securities = ({ securities }) => {
  return (
    <HStack key={securities.id} w="100%" alignItems="flex-start">
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{securities.ticker}</Text>
      </Box>
    </HStack>
  );
};

export default Securities;
