import React from "react";
import {
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignupForm = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(10px)"
      p={8} // Padding
      borderRadius="lg"
      boxShadow="md"
      w={{ base: "100%", md: "60%" }}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading as={"h1"} fontFamily={"poppins"} textAlign={"center"}>
        Signup
      </Heading>
      <SimpleGrid columns={2} spacing={4}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Enter your first name" />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Enter your last name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <Box gridColumn="span 1">
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input type="text" placeholder="Enter your location" />
          </FormControl>
        </Box>
        <Box gridColumn="span 2">
          <FormControl>
            <FormLabel>Create New Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
        </Box>
        <Box gridColumn="span 2">
          <FormControl>
            <FormLabel>Confirm New Password</FormLabel>
            <Input type="password" placeholder="Confirm your password" />
          </FormControl>
        </Box>
      </SimpleGrid>
      <Button mt={4} w={"300px"} colorScheme="whiteAlpha" type="submit">
        Submit
      </Button>
      <Button mt={4} w={"300px"} colorScheme="green" leftIcon={<FaGoogle />}>
        Sign up with Google
      </Button>
      <Text>
        Already have an account? <Link to="/login">Login</Link>
      </Text>
    </Box>
  );
};

export default SignupForm;
