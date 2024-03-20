import React from "react";
import { Stack } from "@chakra-ui/react";
import Signupbanner from "../../components/Authcomponents/Signupbanner";
import SIgnupform from "../../components/Authcomponents/SIgnupform";

const Signup = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={0}
      bg="green.600"
      w="full"
      h="full"
    >
      <SIgnupform />
      <Signupbanner />
    </Stack>
  );
};

export default Signup;
