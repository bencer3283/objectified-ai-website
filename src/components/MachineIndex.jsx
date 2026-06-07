import { Link as ChakraLink, Box, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const IndexItem = ({ children, top, left, dest="/", displayMobile = true }) => (
  <ChakraLink
    asChild
    position={{ base: "static", md: "absolute" }}
    top={top}
    left={left}
    color="black"
    fontFamily="var(--font-ibm-plex-mono)"
    fontWeight="semibold"
    fontSize={{ base: "16px", md: "24px", lg: "36px" }}
    textTransform="uppercase"
    textDecoration="underline"
    _hover={{ textDecoration: "none", bg: "rgba(255, 255, 255, 0.8)" }}
    zIndex={20}
    bg="rgba(255, 255, 255, 0.5)"
    backdropFilter="blur(10px)"
    px={4}
    py={2}
    borderRadius="xl"
    transition="all 0.2s"
    display={displayMobile ? "inline-flex" : { base: "none", md: "inline-flex" }}
    alignItems="center"
    justifyContent="center"
    w={{ base: "full", md: "auto" }}
    textAlign="center"
  >
    <Link href={dest}>{children}</Link>
  </ChakraLink>
);

export default function MachineIndex() {
  return (
    <Box w="full" bg="white" py="10vh" px="4.45%" position="relative">
      <Box 
        position="relative" 
        w="full" 
        maxW="2140px" 
        mx="auto" 
        aspectRatio={2140 / 1204}
      >
        {/* Background Image */}
        <Box position="absolute" inset={0} zIndex={0}>
          <Image
            src="/images/machine/DSC_3290.jpg"
            alt="Archive Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Precise Positioning based on 2560px Figma Width and 1600px Figma Height for the container */}
        <Box display={{ base: "none", md: "block" }}>
          <IndexItem top="23%" left="21%" dest="/mailbox" displayMobile={false}>mailbox</IndexItem>
          <IndexItem top="23%" left="50.9%" dest="/clamp" displayMobile={false}>clamp</IndexItem>
          <IndexItem top="23%" left="70.2%" dest="/slider" displayMobile={false}>slider</IndexItem>
          <IndexItem top="64.4%" left="36.4%" dest="/scrollwheel" displayMobile={false}>scroll wheel</IndexItem>
          <IndexItem top="64.4%" left="68%" dest="/slot" displayMobile={false}>slot machine</IndexItem>
        </Box>
      </Box>

      {/* Mobile Vertical Stack */}
      <VStack 
        display={{ base: "flex", md: "none" }} 
        gap={3} 
        w="full" 
        mt={6}
        align="stretch"
      >
        <IndexItem dest="/mailbox">mailbox</IndexItem>
        <IndexItem dest="/clamp">clamp</IndexItem>
        <IndexItem dest="/slider">slider</IndexItem>
        <IndexItem dest="/scrollwheel">scroll wheel</IndexItem>
        <IndexItem dest="/slot">slot machine</IndexItem>
      </VStack>
    </Box>
  );
}
