import { Container, Flex, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { CiLogin } from "react-icons/ci";
import { BsFillKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function nav() {
  return (
    <Box
      as="nav"
      backgroundColor="transparent"
      position="relative"
      width="100%"
      zIndex="1"
    >
      <Container maxW="container.xl" padding={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="30" fontWeight="bold" color="white">
            Medigrounds
          </Text>
          <Flex alignItems="center" fontSize="16">
            <Box mx={4}>
              <Text color="white">Home</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">About</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Patient Data</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Transactions</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Compliance</Text>
            </Box>
            <Box mx={4}>
              <Text color="white">Contact Us</Text>
            </Box>
            <Box ml={20}>
              <Link to="/register">
                <Button
                  size="sm"
                  backgroundColor="black"
                  color="white"
                  border="1px solid white"
                  leftIcon={<BsFillKeyFill color="#9E00FF" />}
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                >
                  Register
                </Button>
              </Link>
            </Box>
            <Box ml={5}>
              <Button
                size="sm"
                backgroundColor="black"
                color="white"
                border="1px solid white"
                leftIcon={<CiLogin color="#9E00FF" />}
                _hover={{
                  bg: "white",
                  color: "black",
                }}
              >
                Login
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default nav;
