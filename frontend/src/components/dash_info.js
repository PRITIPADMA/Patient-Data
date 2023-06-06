import React from "react";
import { Flex, Stack, Text, Image, Container, Button } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";

function dash_info() {
  return (
    <Container maxW="container.xl" padding={10}>
      <Flex justifyContent="space-between">
        <Image
          width={588}
          height={603}
          borderTopLeftRadius="153px"
          borderBottomRightRadius="153px"
          borderTopRightRadius="10px"
          borderBottomLeftRadius="10px"
          src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Doctors"
          objectFit="cover"
        />
        <Stack mt="lg">
          <Text
            color="white"
            fontSize="60"
            maxW="xl"
            pt="20"
            fontWeight="medium"
            lineHeight="1"
          >
            We take for your health and your data
          </Text>
          <Text
            py="10"
            color="white"
            fontWeight="regular"
            fontSize="20"
            maxW="xl"
            lineHeight="1"
          >
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperieaqueys epsa quae
            abillo inventore veritatis et quase
          </Text>
          <Button
            leftIcon={<RxDashboard />}
            borderWidth="2px"
            mt={10}
            w="365px"
            h="63px"
            bg="black"
            color="white"
            border="2px solid white"
            borderRadius={10}
            _hover={{ bg: "white", color: "black" }}
            fontSize={20}
          >
            Go To Dashboard
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default dash_info;
