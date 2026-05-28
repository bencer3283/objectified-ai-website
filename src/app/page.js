'use client'

import { Box, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Section = ({ title, body, opacity, y, top, left, width }) => {
  return (
    <Box position="absolute" top={top} left={left} w={width} pointerEvents="none">
      <motion.div style={{ opacity, y }}>
        <VStack align="start" gap="84px">
          <Text
            fontFamily="var(--font-ibm-plex-mono)"
            fontWeight="semibold"
            fontSize={{ base: "21px", md: "24px", lg: "36px" }}
            color="black"
            lineHeight="1"
            textTransform="uppercase"
            pointerEvents="auto"
          >
            {title}
          </Text>
          <Text
            fontFamily="var(--font-ibm-plex-serif)"
            fontWeight="regular"
            fontSize={{ base: "15px", md: "18px", lg: "24px" }}
            color="black"
            lineHeight="normal"
            whiteSpace="pre-wrap"
            pointerEvents="auto"
          >
            {body}
          </Text>
        </VStack>
      </motion.div>
    </Box>
  );
};

const ArchiveItem = ({ children, top, left, dest="/" }) => (
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

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation transforms
  // Progress ranges are calibrated for h="400vh"
  const section1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.23, 0.33], [0, 1, 1, 0]);
  const section1Y = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  const section2Opacity = useTransform(scrollYProgress, [0.33, 0.43, 0.56, 0.66], [0, 1, 1, 0]);
  const section2Y = useTransform(scrollYProgress, [0.33, 0.43], [20, 0]);

  const section3Opacity = useTransform(scrollYProgress, [0.66, 0.76, 0.9, 1.0], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.66, 0.76], [20, 0]);

  return (
    <Box bg="white" w="full">
      {/* Hero Section - Scrolls Normally */}
      <Box h="100vh" w="full" position="relative" overflow="hidden">
        {/* Top Image */}
        <Box 
          position="absolute" 
          top="96px" 
          left="50%" 
          transform="translateX(-50%)" 
          w="75vw" 
          h="70vh" 
          maxW="2140px"
          zIndex={0}
        >
          <Box height="100%" width="100%">
            <Image
              src="/images/machine/DSC_3373.jpg"
              alt="Objectified AI Product"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        </Box>

        {/* Motto Text */}
        <Box position="absolute" top="84vh" left="4.45%" w="90vw" zIndex={10}>
          <Text
            fontFamily="var(--font-ibm-plex-mono)"
            fontWeight="semibold"
            fontSize={{ base: "21px", md: "24px", lg: "36px" }}
            color="black"
            lineHeight="1"
            textTransform="uppercase"
          >
            AI should be a configurable machine,
            <br />
            not a magical black box.
          </Text>
        </Box>
      </Box>

      {/* Animation Section - Sticky Container */}
      <Box ref={containerRef} h="400vh" w="full" position="relative">
        <Box position="sticky" top="0" h="100vh" w="full" overflow="hidden">
          
          <Section
            title="Against Anthropomorphism"
            body={`Throughout the history of computing, the design of human-computer interfaces has been an endless pursuit of seamlessly intuitive user experiences. This desire of making technology human-like has been taken to new heights with LLM-based chatbots. LLMs stormed the world by finally fulfilling the promise of a computer being able to converse with us.\n\nHowever, the chatbot interface encourages cognitive surrender, implies moral status of the machine and obscures the probabilistic nature of LLMs. It uses authoritative language to be overly believable and sometimes manipulative.\n\nAs an user interface design paradigm, anthropomorphism takes away agency from the human operator and ask us to trust the machine even when the outcome should be critically examined by the user.`}
            opacity={section1Opacity}
            y={section1Y}
            top="20vh"
            left="4.45%"
            width="90vw"
          />

          <Section
            title="Machine-like Interfaces"
            body={`This project aims to challenge anthropomorphism in human-ai interaction by using machine-like interfaces to emphasize the importance of human agency, deliberation and literacy. Human should control the machine, not instead being led by a predictive algorithm.\n\nInspired by the knobs, gear selectors and clutches of machineries, I designed several interfaces for LLMs that are frictional, attention-seeking and informative. They are directly connected to the internal parameters of models and hence make them truly understandable and configurable. They call for examination and decision-making from the human operator. They are clunkier to operate but increases human deliberation. These machine interfaces are intentionally less intuitive, less trustworthy and less impenetrable.`}
            opacity={section2Opacity}
            y={section2Y}
            top="20vh"
            left="4.45%"
            width="90vw"
          />

          <Section
            title="Humans are Tool-building Animals"
            body={`We build tools to increase our productivity. That says a lot about who we are and what technology is. The prevailing paradigm of AI tries too hard to deviate from that and confuses an (arguably very powerful) predictive algorithm with a God-like cognitive entity. By presenting LLM in tangible ways that stay true to its intrinsic technical affordances, this work not only informs the public what LLM is but also sparks a radically different imagination of what AI should be.\n\nObscured by the conversational interface, there are so many issues around LLMs that should be addressed, like interpretability, resource consumption and data ownership. However, we are constantly being sold the popular opinions of either an utopian picture of AI solving cancer and climate or a science-fiction-like dystopian world taken over by intelligent robots.\n\nLLM is a piece of transformative technology, which means it is also no more than a statistical prediction model for language tokens.`}
            opacity={section3Opacity}
            y={section3Y}
            top="20vh"
            left="4.45%"
            width="90vw"
          />

        </Box>
      </Box>

      {/* Archive Section */}
      <Box w="full" bg="white" py="20vh" px="4.45%" position="relative">
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
          <ArchiveItem top="29.6%" left="21%" dest="/mailbox">mailbox</ArchiveItem>
          <ArchiveItem top="29.6%" left="50.9%">clamp</ArchiveItem>
          <ArchiveItem top="29.6%" left="70.2%">slider</ArchiveItem>
          <ArchiveItem top="62.2%" left="36.4%">scroll wheel</ArchiveItem>
          <ArchiveItem top="64.4%" left="75.7%">slot machine</ArchiveItem>

        </Box>
      </Box>
    </Box>
  );
}
