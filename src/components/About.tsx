// About.js
// import React from 'react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const About = () => {
  const navigation = useNavigate();
  return (
    <Box>
      <Button colorScheme="gray" size="sm" onClick={() => navigation(-1)}>
        <ArrowBackIcon />
      </Button>
      <Heading>About Us</Heading>
      <Text mt={4}>
        This project is created to demonstrate a React application with multiple
        features including a to-do list, shopping cart, and API integration.
      </Text>
    </Box>
  );
};

export default About;
