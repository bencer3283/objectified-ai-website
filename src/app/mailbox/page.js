'use client'

import { Box, Text, VStack, Span } from "@chakra-ui/react";
import Image from "next/image";

const DetailSection = ({ imageSrc, alt, caption }) => {
  return (
    <Box 
      position="relative" 
      my={"20vh"}
      left="50%" 
      transform="translateX(-50%)"
      w="83.6vw" // 2140 / 2560
    >
      <Box position="relative" w="full" h="89vh">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      {caption && (
        <Box bg="#434343" p="18px" w="full">
          <Text
            fontFamily="var(--font-ibm-plex-serif)"
            fontWeight="regular"
            fontSize={{ base: "12px", md: "15px", lg: "18px" }}
            color="white"
            lineHeight="normal"
            whiteSpace="pre-wrap"
          >
            {caption}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default function Mailbox() {
  return (
    <Box bg="white" minH="100vh" w="full" position="relative" color="black" paddingBottom={"20vh"}>
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
              src="/images/machine/DSC_3282.jpg"
              alt="Mailbox Hero"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
      </Box>

    <Box 
      position="relative" 
      my={"20vh"}
      left="50%" 
      transform="translateX(-50%)"
      w="83.6vw" // 2140 / 2560
      h="89vh"
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/jovjSFKvUxI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ borderRadius: "24px" }}
      ></iframe>
    </Box>

      {/* Section 2: Image 1 + Caption */}
      <DetailSection 
        imageSrc="/images/machine/DSC_3274.jpg"
        alt="Mailbox Detail 1"
        caption="the physical size limitation of the mailbox is an indication of the context window of LLMs"
      />
    </Box>
  );
}
