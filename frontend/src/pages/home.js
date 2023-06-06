import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Dashinfo from "../components/dash_info";
import Mandate from "../components/mandate";
import Appointment from "../components/appointment";
import { Box } from "@chakra-ui/react";

const home = () => {
  return (
    <Box backgroundColor="black">
      <Nav />
      <Hero />
      <Dashinfo />
      <Mandate />
      <Appointment />
    </Box>
  );
};

export default home;
