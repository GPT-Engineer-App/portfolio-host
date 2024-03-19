import React from "react";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaFolder, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <HStack spacing={4} justifyContent="center">
        <Link to="/">
          <IconButton icon={<FaHome />} aria-label="Home" />
        </Link>
        <Link to="/portfolio">
          <IconButton icon={<FaFolder />} aria-label="Portfolio" />
        </Link>
        <Link to="/about">
          <IconButton icon={<FaUser />} aria-label="About" />
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
