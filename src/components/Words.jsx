import { Box, Flex, Text, Span, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const SectionRow = ({ label, items, images, ...props }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <Box w="full" {...props}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "flex-start" }}
        gap={{ base: 2, lg: 8 }}
        w="full"
      >
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="bold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1"
          whiteSpace="nowrap"
        >
          {label}
        </Text>
        <Box height={{ base: "40px", md: "60px", lg: "70px" }} position="relative" overflow="hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Text
                fontFamily="var(--font-ibm-plex-serif)"
                fontWeight="semibold"
                fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                lineHeight="1"
              >
                {items[index]}
              </Text>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Flex>
      
      {images && (
        <Box 
          mt={10}
          ml={'auto'}
          height={{ base: "300px", md: "400px", lg: "500px" }} // Fixed height to avoid layout shift
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <AnimatePresence mode="wait">
            {images[index] && (
              <motion.div
                key={images[index]}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                
                  <Image
                    src={images[index]}
                    alt={items[index]}
                    width={800}
                    height={600}
                    style={{ 
                      borderRadius: '16px', 
                      objectFit: 'contain', 
                      height: '100%', 
                      width: 'auto',
                      maxWidth: '100%' 
                    }}
                  />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      )}
    </Box>
  );
};

export const Words = () => {
  return (
    <Box
      bg="#545252"
      color="white"
      py={20}
      px={{ base: 4, lg: 20 }}
      w="full"
      overflow="hidden"
    >
      <VStack spacing={{ base: 16, lg: 32 }} align="flex-start" w="full" maxW="1800px" mx="auto">
        {/* Intro */}
        <Text
          fontFamily="var(--font-space-grotesk)"
          fontWeight="bold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1.1"
          maxW="1650px"
        >
          the AI we have now is dictated by the paradigm of{" "}
          <Span fontFamily="var(--font-ibm-plex-serif)">foundational LLMs</Span>,
        </Text>

        {/* Section 1 */}
        <SectionRow
          label="they are"
          items={["general-purpose", "language-centric", "BIG"]}
        />

        {/* Section 2 */}
        <SectionRow
          label="they lack"
          items={["internal representation", "common sense", "sensory experience"]}
        />

        <Box pt={"40vh"}>
        {/* Section 3 */}
          <SectionRow
            label="they consume humongous"
            items={["energy", "water", "labor", "land", "capital", "data"]}
            images={[
              "/images/energy.jpg",
              "/images/water.jpg",
              "/images/labor.jpeg",
              "/images/land.jpg",
              null, // No image for capital
              "/images/data.jpg"
            ]}
          />
        </Box>
        
        
         {/* Section 4 */}
         <SectionRow pt={"6vh"}
            label="they also"
            items={["reinforce stereotypes", "exacerbate inequality", "consolidate power"]}
        />

        {/* Conclusion */}
        <Box pt={"40vh"} pb={"40vh"}>
           <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
            lineHeight="1.1"
          >
            people don't seem to realize the{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">limitations</Span>
            {" "}and{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">issues</Span>
            {" "}of LLMs,
          </Text>
          <motion.div initial={{
            opacity: 0,
            y: 120
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1.33,
            ease: "backIn"
          }}>
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
            lineHeight="1.1"
            mt={4}
            pt={{base: "4vh", lg: "6vh"}}
          >
            and I think it’s because we are designing the{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">wrong interface</Span>
          </Text>
          </motion.div>
        </Box>
      </VStack>
    </Box>
  );
};
