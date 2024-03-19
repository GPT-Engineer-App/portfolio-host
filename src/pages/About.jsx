import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";

const About = () => {
  return (
    <Box py={12}>
      <Center>
        <Box maxW="xl">
          <Heading mb={4}>About Me</Heading>
          <Text>Hi, I'm Guillaume Lefebvre, a software developer with a PhD in Artificial Intelligence. My research focused on developing advanced AI algorithms and techniques to solve complex problems. I'm passionate about leveraging my expertise in AI to create innovative solutions and push the boundaries of what's possible with technology.</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default About;
