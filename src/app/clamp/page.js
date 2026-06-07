'use client'

import MachineIndex from "@/components/MachineIndex";
import { Box, Text, VStack, Span } from "@chakra-ui/react";
import Image from "next/image";

const DetailSection = ({ imageSrc, alt, caption }) => {
  return (
    <Box 
      position="relative" 
      my={{ base: "8vh", md: "20vh" }}
      left="50%" 
      transform="translateX(-50%)"
      w={{ base: "90vw", md: "83.6vw" }} // 2140 / 2560
    >
      <Box position="relative" w="full" h={{ base: "40vh", md: "89vh" }}>
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
    <Box bg="white" minH="100vh" w="full" position="relative" color="black" paddingBottom={{ base: "10vh", md: "20vh" }}>
      {/* Section 1: Hero */}
      <Box h={{ base: "auto", md: "100vh" }} w="full" position="relative" pt={{ base: "120px", md: "0" }} pb={{ base: "40px", md: "0" }}>
        <Box 
          position={{ base: "relative", md: "absolute" }} 
          top={{ base: "auto", md: "50%" }} 
          left={{ base: "5.74%", md: "5.74%" }} // 147 / 2560
          transform={{ base: "none", md: "translateY(-50%)" }}
          w={{ base: "90vw", md: "42.6vw" }} // 1091 / 2560
          mb={{ base: "32px", md: "0" }}
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
              clamp
            </Text>
            <Text
              fontFamily="var(--font-ibm-plex-mono)"
              fontWeight="regular"
              fontSize={{ base: "14px", md: "16px", lg: "24px" }}
              lineHeight="normal"
            >
              resource management
              <br />
              configurability
              <br />
              <Span textDecoration="line-through">magical black box</Span>
            </Text>
          </VStack>
        </Box>

        <Box 
          position={{ base: "relative", md: "absolute" }} 
          top={{ base: "auto", md: "50%" }} 
          left={{ base: "auto", md: "40.27%" }} // 1031 / 2560
          transform={{ base: "none", md: "translateY(-50%)" }}
          w={{ base: "90vw", md: "54vw" }} // 1383 / 2560
          h={{ base: "40vh", md: "58vh" }}
          mx={{ base: "auto", md: "0" }}
          zIndex={0}
        >
          <Box position="relative" w="full" h="full">
            <Image
              src="/images/machine/DSC_3324.jpg"
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
        my={{ base: "8vh", md: "20vh" }}
        left="50%" 
        transform="translateX(-50%)"
        w={{ base: "90vw", md: "83.6vw" }} // 2140 / 2560
        h={{ base: "auto", md: "89vh" }}
        aspectRatio={{ base: "16/9", md: "unset" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KcGXrPQvDIE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ borderRadius: "24px", aspectRatio: "16/9" }}
        ></iframe>
      </Box>

      {/* Section 2: Image 1 + Caption */}
      <DetailSection 
        imageSrc="/images/machine/DSC_3327.jpg"
        alt="Mailbox Detail 1"
        caption="the design of the clamp uses a common compression mechanism as a metaphor for embedding -- where the meaning of natural language words is compressed into a fixed dimension"
      />
      <MachineIndex/>
    </Box>
  );
}
