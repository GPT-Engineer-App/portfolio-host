import React from "react";
import { Box, Heading, Image, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box py={12}>
      <Center>
        <Box maxW="xl" textAlign="center">
          <Heading mb={8}>Welcome to My Portfolio</Heading>
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcxMDg3NTA5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Artificial Intelligence" borderRadius="lg" />
        </Box>
      </Center>
    </Box>
  );
};

export default Home;
