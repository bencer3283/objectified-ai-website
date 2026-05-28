import { Link as ChakraLink, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const IndexItem = ({ children, top, left, dest="/" }) => (
  <ChakraLink
    asChild
    position="absolute"
    top={top}
    left={left}
    color="black"
    fontFamily="var(--font-ibm-plex-mono)"
    fontWeight="semibold"
    fontSize={{ base: "21px", md: "24px", lg: "36px" }}
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
        {/* Background Image Placeholder */}
        <Box position="absolute" inset={0} zIndex={0}>
          <Image
            src="/images/machine/DSC_3290.jpg"
            alt="Archive Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* Precise Positioning based on 2560px Figma Width and 1600px Figma Height for the container (estimated from absolute tops) */}
        <IndexItem top="23%" left="21%" dest="/mailbox">mailbox</IndexItem>
        <IndexItem top="23%" left="50.9%" dest="/clamp">clamp</IndexItem>
        <IndexItem top="23%" left="70.2%" dest="/slider">slider</IndexItem>
        <IndexItem top="64.4%" left="36.4%" dest="/scrollwheel">scroll wheel</IndexItem>
        <IndexItem top="64.4%" left="68%" dest="/slot">slot machine</IndexItem>
      </Box>
    </Box>
  );
}
