import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Register = () => {
  return (
    <Box bg="black" w="300px" p="20px" borderRadius="md" mx="auto" mt="100px">
      <FormControl mb="20px">
        <FormLabel color="white">Name</FormLabel>
        <Input
          placeholder="Enter your name"
          bg="black"
          border="1px solid white"
          borderRadius="md"
          _placeholder={{ color: "white" }}
          _focus={{ outline: "none" }}
        />
      </FormControl>

      <FormControl mb="20px">
        <FormLabel color="white">Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          bg="black"
          border="1px solid white"
          borderRadius="md"
          _placeholder={{ color: "white" }}
          _focus={{ outline: "none" }}
        />
      </FormControl>

      <Button colorScheme="teal">Signup</Button>
    </Box>
  );
};

export default Register;
