'use client'

import { Box, Flex, Span, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { Words } from "@/components/Words";
import { WordsInterface } from "@/components/WordsInterface";
import { ObjScene } from "@/components/ObjScene";

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
        position="relative"
      >
        <Flex direction={{base: 'column', md: 'row'}} position="absolute" alignSelf={'center'} mt={{base:"5vh", md: "32vh"}} top={0} left={0} w="full" h="full" zIndex={0}>
          <ObjScene obj={"motorized-6col"} scale={0.35}/>
          <ObjScene obj={"cd_player"} scale={0.15}/>
          <ObjScene obj={"frame"} scale={0.08}/>
        </Flex>
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
          zIndex={10}
          pointerEvents="none"
        >
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            alignSelf={{ base: "flex-start", lg: "flex-start" }}
            ml={{ base: "8%", lg: "5%" }}
          >
            Design for the AI{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontWeight="semibold" fontStyle='italic'>
              we have
            </Span>
            ,
          </Text>
          
          <motion.div initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.25,
            ease: 'easeInOut'
          }}>
            <Text
              fontFamily="var(--font-space-grotesk)"
              fontWeight="bold"
              alignSelf={{ base: "flex-start", lg: "flex-end" }} // Align right on large screens
              textAlign={{ base: "left", lg: "right" }}
              mr={{ base: "8%", lg: "5%" }}
            >
              not the one{" "}
              <Span fontFamily="var(--font-ibm-plex-serif)" fontWeight="semibold" fontStyle="italic">
                we envision.
              </Span>
            </Text>
          </motion.div>
        </Flex>
      </Box>
      <Words />
      <WordsInterface />
    </>
  );
}