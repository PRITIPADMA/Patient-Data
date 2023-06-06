import React from "react";
import {
  Box,
  Image,
  Text,
  Container,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";

function appointment() {
  return (
    <Container maxW="container.xl" padding={10}>
      <Box position="relative">
        <Image
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="My Image"
          objectFit="cover"
          height={496}
          width={1236}
        />
        <Stack>
          <Text
            position="absolute"
            top="30%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="24"
            color="white"
            zIndex="1"
            fontWeight="medium"
          >
            Get Your Data Secured
          </Text>
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            fontSize="40"
            color="white"
            zIndex="1"
            fontWeight="medium"
            justifyContent={"center"}
            textAlign={"center"}
          >
            Looking a Doctors to Get Your Services
          </Text>
          <Flex>
            <Button
              colorScheme="black"
              variant="solid"
              color="black"
              bg="white"
              size="lg"
              position="absolute"
              top="75%"
              left="50%"
              transform="translate(-100%, -50%)"
              _hover={{
                bg: "transparent",
                color: "white",
                borderColor: "white",
              }}
            >
              Book Appointment
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              color="white"
              size="lg"
              ml="4"
              position="absolute"
              top="75%"
              left="50%"
              transform="translate(0%, -50%)"
              _hover={{ bg: "white", color: "black" }}
            >
              Check Dashboard
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
}

export default appointment;
