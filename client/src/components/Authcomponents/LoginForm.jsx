import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(10px)"
      p={8}
      borderRadius="lg"
      boxShadow="md"
      w={{ base: "100%", md: "60%" }}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Heading as={"h1"} fontFamily={"poppins"} textAlign={"center"} mb={10}>
        Login
      </Heading>
      <Box>
        <Button
          colorScheme="red"
          leftIcon={<FaGoogle color="white" />} // Set the color of the icon to white
          mb={4}
          width={"300px"}
        >
          Login with google
        </Button>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="Enter your username" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button mt={4} colorScheme="blackAlpha" w="100%">
          Login
        </Button>
        <Text textAlign={"center"} mt={10}>
          Don't have an account?<Link to={"/signup"}>Signup</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default LoginForm;
