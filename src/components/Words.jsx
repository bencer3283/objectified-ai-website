import { Box, Flex, Text, Span, VStack } from "@chakra-ui/react";

const SectionRow = ({ label, items, labelWidth }) => (
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
      minW={labelWidth}
    >
      {label}
    </Text>
    <VStack align="flex-start" spacing={0}>
      {items.map((item, index) => (
        <Text
          key={index}
          fontFamily="var(--font-ibm-plex-serif)"
          fontWeight="semibold"
          fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
          lineHeight="1"
        >
          {item}
        </Text>
      ))}
    </VStack>
  </Flex>
);

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
          items={["general-purpose", "language-centric", "and BIG"]}
        />

        {/* Section 2 */}
        <SectionRow
          label="they lack"
          items={["internal representation", "common sense", "and sensory experience"]}
        />

        {/* Section 3 */}
        <SectionRow
          label="they consume humongous"
          items={["energy", "water", "labor", "land", "capital", "data"]}
        />

         {/* Section 4 */}
         <SectionRow
          label="they"
          items={["reinforces stereotypes", "exacerbate inequality", "consolidates power"]}
        />

        {/* Conclusion */}
        <Box pt={20}>
           <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "6xl", lg: "96px" }}
            lineHeight="1.1"
          >
            people doesn’t seem to realize the{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">limitations</Span>
            {" "}and{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">issues</Span>
            {" "}of LLMs,
          </Text>
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "6xl", lg: "96px" }}
            lineHeight="1.1"
            mt={4}
          >
            and I think it’s because we are designing the{" "}
            <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle="normal">wrong interface</Span>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
