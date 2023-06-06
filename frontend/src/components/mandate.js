import React from "react";
import { Flex, Stack, Text, Image, Container } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

function mandate() {
  return (
    <Container maxW="container.xl" padding={10}>
      <Flex justifyContent="space-between">
        <Stack mt="lg">
          <Text
            color="white"
            fontSize="60"
            maxW="xl"
            pt="20"
            fontWeight="medium"
            lineHeight="1"
          >
            We follow the HIPPA Health care data mandates
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
          <Stack color="white" fontSize="20" maxW="xl">
            <Flex>
              <FaCheck />
              <Text ml={5}>
                25-30% estimated savings in implementation when using Mobile
                Health Clinics
              </Text>
            </Flex>
            <Flex>
              <FaCheck />
              <Text ml={5}>Activate Mobile Health Clinics in just weeks</Text>
            </Flex>
            <Flex>
              <FaCheck />
              <Text ml={5}>Flexible, on-demand access to care services</Text>
            </Flex>
            <Flex>
              <FaCheck />
              <Text ml={5}>
                Supports referrals to provider networks and care management
                programs
              </Text>
            </Flex>
          </Stack>
        </Stack>
        <Image
          width={588}
          height={720}
          src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Doctors"
          objectFit="cover"
        />
      </Flex>
    </Container>
  );
}

export default mandate;
