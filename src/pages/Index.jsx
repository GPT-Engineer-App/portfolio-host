import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Link, Card, CardBody, Stack, Divider, CardFooter, Button, Center } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://images.unsplash.com/photo-1667709525632-ca0ce065951d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwODc1MDk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwODc1MDk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    githubLink: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const Index = () => {
  return (
    <Box>
      <Center bg="gray.100" py={12}>
        <VStack spacing={6}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndWlsbGF1bWUlMjBsZWZlYnZyZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDg3NTA5OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Guillaume Lefebvre" />
          <Heading>Guillaume Lefebvre</Heading>
          <Text>Software Developer</Text>
          <HStack spacing={4}>
            <Link href="https://github.com/yourusername" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="mailto:youremail@example.com" isExternal>
              <FaEnvelope size={24} />
            </Link>
          </HStack>
        </VStack>
      </Center>

      <Box py={12}>
        <Heading textAlign="center" mb={8}>
          Portfolio
        </Heading>
        <Center>
          <HStack spacing={8}>
            {projects.map((project, index) => (
              <Card key={index} maxW="sm">
                <CardBody>
                  <Image src={project.image} alt={project.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{project.title}</Heading>
                    <Text>{project.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button as={Link} href={project.githubLink} isExternal leftIcon={<FaGithub />} colorScheme="blue">
                    View on GitHub
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Index;
