import React from "react";
import { Box, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoginBanner = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Box w={{ base: "100%" }}>
        <Img src="/connectLogin.jpg" alt="people_connecting_image" />
      </Box>
    </motion.div>
  );
};

export default LoginBanner;
