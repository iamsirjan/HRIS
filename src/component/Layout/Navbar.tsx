import { Box, Flex, Text } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Box
      as={Flex}
      boxShadow="1px 1px 24px 0px #00000014"
      height="100%"
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.50"
      justifyContent="flex-start"
      alignItems="center"
      p={2}
    >
      <Text>Hello, Welcome To Our System</Text>
    </Box>
  );
};
