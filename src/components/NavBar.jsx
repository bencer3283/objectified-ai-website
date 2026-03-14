'use client'

import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ChakraLink
      asChild
      color="white"
      fontFamily="var(--font-ibm-plex-serif)"
      fontSize="m"
      textDecoration={isActive ? "underline" : "none"}
      _hover={{ textDecoration: "underline" }}
      whiteSpace="nowrap"
    >
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};

export const NavBar = () => {
  return (
    <Box
      position="fixed"
      top={8}
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      w="fit-content"
      maxW="90vw"
    >
      <Box
        bg="rgba(97,97,97,0.3)"
        backdropFilter="blur(10px)"
        px={{ base: 8, lg: 24 }}
        py={'1.5vh'}
        borderRadius="2xl"
        boxShadow="4px 4px 32px 0px rgba(0,0,0,0.25)"
        overflow="hidden"
      >
        <Flex
          gap={{ base: 8, lg: 32 }}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <NavItem href="/">synopsis</NavItem>
          <NavItem href="/abacus">internal representation</NavItem>
          <NavItem href="/cd">compartmentalization</NavItem>
          <NavItem href="/matrix">matrix</NavItem>
          <NavItem href="/grooves">concept product</NavItem>
        </Flex>
      </Box>
    </Box>
  );
};
