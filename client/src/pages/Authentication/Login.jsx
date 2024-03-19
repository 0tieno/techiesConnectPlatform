import React from "react";
import { Stack } from "@chakra-ui/react";
import LoginBanner from "../../components/Authcomponents/LoginBanner";
import LoginForm from "../../components/Authcomponents/LoginForm";

const Login = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg="yellow"
      w="full"
      h="full"
    >
      <LoginBanner />

      <LoginForm />
    </Stack>
  );
};

export default Login;
