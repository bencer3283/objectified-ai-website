'use client'

import { Box, Text, VStack, Span } from "@chakra-ui/react";
import Image from "next/image";

export default function Mailbox() {
  return (
    <Box bg="white" minH="5000px" w="full" position="relative" color="black">
      {/* Section 1: Hero */}
      <Box h="100vh" w="full" position="relative">
        <Box 
          position="absolute" 
          top="50%" 
          left="5.74%" // 147 / 2560
          transform="translateY(-50%)"
          w="42.6vw" // 1091 / 2560
          zIndex={10}
        >
          <VStack align="start" gap="48px">
            <Text
              fontFamily="var(--font-ibm-plex-mono)"
              fontWeight="semibold"
              fontSize={{ base: "21px", md: "24px", lg: "36px" }}
              textTransform="uppercase"
              lineHeight="normal"
            >
              mailbox
            </Text>
            <Text
              fontFamily="var(--font-ibm-plex-mono)"
              fontWeight="regular"
              fontSize={{ base: "14px", md: "16px", lg: "24px" }}
              lineHeight="normal"
            >
              deliberative engagement
              <br />
              <Span textDecoration="line-through">casual conversation</Span>
            </Text>
          </VStack>
        </Box>

        <Box 
          position="absolute" 
          top="50%" 
          left="40.27%" // 1031 / 2560
          transform="translateY(-50%)"
          w="54vw" // 1383 / 2560
          h="58vh"
          zIndex={0}
        >
          <Box position="relative" w="full" h="full">
            <Image
              src="/images/machine/DSc_3282.jpg"
              alt="Mailbox Hero"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
      </Box>

      {/* Section 2: Image 1 */}
      <Box 
        position="absolute" 
        top="1710px" 
        left="50%" 
        transform="translateX(-50%)"
        w="83.6vw" // 2140 / 2560
        h="1427px"
      >
        <Box position="relative" w="full" h="full">
          <Image
            src="/images/product-4.PNG"
            alt="Mailbox Detail 1"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Box>

      {/* Section 3: Image 2 */}
      <Box 
        position="absolute" 
        top="3247px" 
        left="50%" 
        transform="translateX(-50%)"
        w="83.6vw" // 2140 / 2560
        h="1427px"
      >
        <Box position="relative" w="full" h="full">
          <Image
            src="/images/machine/DSC_3274.jpg"
            alt="Mailbox Detail 2"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
