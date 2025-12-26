'use client'

import { Box, Flex, Span, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { Words } from "@/components/Words";

export default function Home() {
  return (
    <>
      <Box
        bg="#545252"
        minH="100vh"
        w="full"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        overflow="hidden"
        p={4}
      >
        <Flex
          direction="column"
          color="white"
          fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
          lineHeight="1.1"
          w="full"
          maxW="1600px"
          gap={{ base: 8, lg: 16 }} // Gap between the two lines
          position="relative"
          pt={{ base: "8vh", lg: "16vh" }}
        >
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            alignSelf={{ base: "flex-start", lg: "flex-start" }}
            ml={{ base: "8%", lg: "5%" }}
          >
            Design for the AI{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontWeight="semibold" fontStyle="normal">
              we have
            </Span>
            ,
          </Text>
          
          <motion.div initial={{
            opacity: 0,
            y: 120
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.33,
            ease: "backIn"
          }}>
            <Text
              fontFamily="var(--font-space-grotesk)"
              fontWeight="bold"
              alignSelf={{ base: "flex-start", lg: "flex-end" }} // Align right on large screens
              textAlign={{ base: "left", lg: "right" }}
              mr={{ base: "8%", lg: "5%" }}
            >
              not the one{" "}
              <Span fontFamily="var(--font-ibm-plex-serif)" fontWeight="semibold" fontStyle="normal">
                we envision.
              </Span>
            </Text>
          </motion.div>
          
        </Flex>
      </Box>
      <Words />
    </>
  );
}