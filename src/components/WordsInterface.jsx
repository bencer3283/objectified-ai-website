import { Box, Flex, Text, Span, VStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionSimpleGrid = motion.create(SimpleGrid);
const MotionText = motion.create(Text);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const WordsInterface = () => {
  return (
    <Box
      bg="#545252"
      color="white"
      py={20}
      px={{ base: 4, lg: 20 }}
      w="full"
      overflow="hidden"
    >
      <VStack spacing={{ base: 16, lg: 32 }} align="flex-start" w="full" mx="auto">
        
        {/* Paragraph 1 */}
        <Box minH={'80vh'}>
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
        >
          human interface finds a middle ground between{" "}
          <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic">what the user wants</Span>
          {" "}to do and{" "}
          <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic">what the technology can</Span>
          {" "}do
        </Text>
        </Box>
        {/* Paragraph 2 & List */}
        <Box w="full" minH={'80vh'}>
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="semibold"
            fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
            lineHeight="1.1"
            mb={12}
          >
            a good human interface informs the user
          </Text>
          
          <MotionSimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={'2vw'}
            w="full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <MotionText
              variants={itemVariants}
              fontFamily="var(--font-space-grotesk)"
              fontWeight="semibold"
              fontSize={{ base: "xl", md: "2xl", lg: "48px" }}
              lineHeight="1.1"
            >
              the limitation/capability of the technology
            </MotionText>
            <MotionText
              variants={itemVariants}
              fontFamily="var(--font-space-grotesk)"
              fontWeight="semibold"
              fontSize={{ base: "xl", md: "2xl", lg: "48px" }}
              lineHeight="1.1"
            >
              best operational practices
            </MotionText>
            <MotionText
              variants={itemVariants}
              fontFamily="var(--font-space-grotesk)"
              fontWeight="semibold"
              fontSize={{ base: "xl", md: "2xl", lg: "48px" }}
              lineHeight="1.1"
            >
              potential means of trouble-shooting
            </MotionText>
          </MotionSimpleGrid>
        </Box>

        {/* Paragraph 3 */}
        <Box minH={'80vh'}>
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
        >
          the primary interface for LLMs is{" "}
          <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic">chatbot,</Span>
          <br />
          which achieves none of the above
        </Text>
        </Box>
        {/* Paragraph 4 */}
        <Box minH={'80vh'}>
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
        >
          instead, the interface of chatbot assumes that we can interact with LLMs as if we are interacting with humans
          <br />
          <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.25, delay: 1.33}}>
          <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic">chatbot is a human-human interface</Span>
          , not a human-computer interface
          </motion.div>
        </Text>
        </Box>
        {/* Paragraph 5 */}
        <Box minH={'80vh'}>
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
        >
          if LLMs can converse like humans, chatbot makes sense.
          <br />
          <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic">But the technology is just not there yet.</Span>
        </Text>
        </Box>
        {/* Paragraph 6 */}
        <Box minH={'80vh'}>
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
        >
          so I designed a few small objects to illustrate some alternative ways we can interact with LLMs......
        </Text>
        
        {/* Call to Action */}
        <motion.div
           whileHover={{ x: 10 }}
           transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Text
              fontFamily="var(--font-ibm-plex-serif)"
              fontWeight="semibold"
              fontStyle="italic"
              fontSize={{ base: "4xl", md: "6xl", lg: "96px" }}
              lineHeight="1.1"
              cursor="pointer"
              display="inline-block"
            >
              explore the first object →
            </Text>
        </motion.div>
        </Box>
      </VStack>
    </Box>
  );
};
