import { Flex, Stack, Text, Image, Container, Button } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function hero() {
  return (
    <Container maxW="container.xl" padding={10}>
      <Flex justifyContent="space-between">
        <Stack>
          <Text
            color="white"
            fontSize="112"
            maxW="xl"
            pt={15}
            fontWeight="regular"
            lineHeight="1"
          >
            We Care for Medical & Health
          </Text>
          <Text
            color="white"
            fontWeight="regular"
            fontSize="24"
            pt={15}
            pb={15}
            maxW="xl"
            lineHeight="1"
          >
            Dolor sit amet consectetur adipiscing elitsedes eiusmod tempor
            incididunt utlabore Lorem
          </Text>
          <Button
            rightIcon={<BsArrowRight />}
            borderWidth="2px"
            mt={10}
            w="365px"
            h="63px"
            bg="black"
            color="white"
            border="2px solid white"
            borderRadius={10}
            _hover={{ bg: "white", color: "black" }}
            fontSize={24}
          >
            Stay Healthy
          </Button>
        </Stack>
        <Image
          width={588}
          height={603}
          borderTopLeftRadius="153px"
          borderBottomRightRadius="153px"
          borderTopRightRadius="10px"
          borderBottomLeftRadius="10px"
          src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="Doctors"
          objectFit="cover"
        />
      </Flex>
    </Container>
  );
}

export default hero;
