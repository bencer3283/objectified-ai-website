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
      color="black"
      fontFamily="var(--font-ibm-plex-mono)"
      fontSize="m"
      fontWeight={"semibold"}
      textDecoration={isActive ? "underline" : "none"}
      _hover={{ textDecoration: "underline" }}
      whiteSpace="nowrap"
    >
      <Link href={href}>{children}</Link>
    </ChakraLink>
  );
};

export const NavBar = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isMachineOpen, setIsMachineOpen] = useState(false);

  return (
    <Box
      position="fixed"
      top={8}
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      w="fit-content"
      maxW="95vw"
    >
      <Box
        bg="rgba(97,97,97,0.3)"
        backdropFilter="blur(10px)"
        px={{ base: 6, lg: 16 }}
        py={'1.5vh'}
        borderRadius="2xl"
        boxShadow="4px 4px 32px 0px rgba(0,0,0,0.25)"
      >
        <Flex
          gap={{ base: 4, lg: 12 }}
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <NavItem href="/">synopsis</NavItem>
          
          {/* Machine Dropdown */}
          <Box
            position="relative"
            onMouseEnter={() => setIsMachineOpen(true)}
            onMouseLeave={() => setIsMachineOpen(false)}
          >
            <Text
              color="black"
              fontFamily="var(--font-ibm-plex-mono)"
              fontSize="m"
              fontWeight={"semibold"}
              cursor="pointer"
              textDecoration={isMachineOpen ? "underline" : "none"}
              _hover={{ textDecoration: "underline" }}
              whiteSpace="nowrap"
              onClick={() => setIsMachineOpen(!isMachineOpen)}
            >
              machine ▾
            </Text>

            {isMachineOpen && (
              <Box
                position="absolute"
                top="100%"
                left="50%"
                transform="translateX(-50%)"
                pt={4}
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
                  <NavItem href="/mailbox">mailbox</NavItem>
                  <NavItem href="/scrollwheel">scroll wheel</NavItem>
                  <NavItem href="/clamp">clamp</NavItem>
                  <NavItem href="/slider">slider</NavItem>
                  <NavItem href="/slot">slot machine</NavItem>
                </Flex>
              </Box>
            )}
          </Box>

          {/* Archive Dropdown */}
          <Box
            position="relative"
            onMouseEnter={() => setIsArchiveOpen(true)}
            onMouseLeave={() => setIsArchiveOpen(false)}
          >
            <Text
              color="black"
              fontFamily="var(--font-ibm-plex-mono)"
              fontSize="m"
              fontWeight={"semibold"}
              cursor="pointer"
              textDecoration={isArchiveOpen ? "underline" : "none"}
              _hover={{ textDecoration: "underline" }}
              whiteSpace="nowrap"
              onClick={() => setIsArchiveOpen(!isArchiveOpen)}
            >
              archive ▾
            </Text>

            {isArchiveOpen && (
              <Box
                position="absolute"
                top="100%"
                left="50%"
                transform="translateX(-50%)"
                pt={4}
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
                  <NavItem href="/synopsis">synopsis</NavItem>
                  <NavItem href="/grooves">concept product</NavItem>
                  <NavItem href="/abacus">internal representation</NavItem>
                  <NavItem href="/cd">compartmentalization</NavItem>
                  <NavItem href="/matrix">matrix</NavItem>
                  <NavItem href="/product">frame</NavItem>
                </Flex>
              </Box>
            )}
          </Box>

          <NavItem href={'https://bencer3283.github.io/portfolio/thesis/'}>process documentation</NavItem>
        </Flex>
      </Box>
    </Box>
  );
};
