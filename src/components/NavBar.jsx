'use client'

import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      >
        <Flex
          gap={{ base: 8, lg: 32 }}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <NavItem href="/">synopsis</NavItem>

          <NavItem href="https://posheng1.substack.com">project updates</NavItem>

          <NavItem href="/grooves">concept design</NavItem>
          
          <Box
            position="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Text
              color="white"
              fontFamily="var(--font-ibm-plex-serif)"
              fontSize="m"
              cursor="pointer"
              textDecoration={isDropdownOpen ? "underline" : "none"}
              _hover={{ textDecoration: "underline" }}
              whiteSpace="nowrap"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              objects archive ▾
            </Text>

            {isDropdownOpen && (
              <Box
                position="absolute"
                top="100%"
                left="50%"
                transform="translateX(-50%)"
                pt={4} // Adds invisible padding to act as a hover bridge
              >
                <Flex
                  direction="column"
                  bg="rgba(97,97,97,0.8)"
                  backdropFilter="blur(10px)"
                  px={8}
                  py={4}
                  borderRadius="xl"
                  boxShadow="4px 4px 32px 0px rgba(0,0,0,0.25)"
                  gap={4}
                  alignItems="center"
                >
                  <NavItem href="/abacus">internal representation</NavItem>
                  <NavItem href="/cd">compartmentalization</NavItem>
                  <NavItem href="/matrix">matrix</NavItem>
                  <NavItem href="/product">frame</NavItem>
                </Flex>
              </Box>
            )}
          </Box>

          
        </Flex>
      </Box>
    </Box>
  );
};
