'use client'

import { Flex, Text, Box, Span, SimpleGrid, VStack, HStack } from "@chakra-ui/react"
import { motion } from "motion/react";
import Image from "next/image";

const StatsBlock = ({ stats }) => (
    <VStack align="start" spacing={0} fontFamily="var(--font-space-grotesk)" fontWeight="semibold" fontSize={{ base: "xl", lg: "32px" }} color="whiteAlpha.900">
        {stats.map((stat, index) => (
            <Text key={index}>{stat}</Text>
        ))}
    </VStack>
);

const MatrixSection = ({ title, stats, paramSize, imageSrc, imageAlt, reverse = false }) => (
    <Flex direction={{ base: "column", xl: reverse ? "row-reverse" : "row" }} w="full" gap={10} align="center" py={20}>
        <Flex direction="column" flex={1} gap={10} align="flex-start" h="full" justify="space-between">
            <Text
                fontFamily="var(--font-space-grotesk)"
                fontWeight="bold"
                fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                lineHeight="1"
            >
                {title}
            </Text>
            
            <Box py={10}>
                <StatsBlock stats={stats} />
            </Box>

            <Text
                fontFamily="var(--font-space-grotesk)"
                fontWeight="bold"
                fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                lineHeight="1"
            >
                {paramSize}
            </Text>
        </Flex>

        <Box flex={1} w="full" position="relative" h={{ base: "400px", lg: "800px" }} overflow="hidden" borderRadius="2xl">
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill 
                style={{ objectFit: "cover" }}
            />
        </Box>
    </Flex>
);

export default function Matrix() {
    return (
        <Box
            bg="#545252"
            minH="100vh"
            w="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            overflow="hidden"
            p={4}
            color="white"
        >
            <Flex
                direction="column"
                w="full"
                maxW="1600px"
                gap={{ base: 8, lg: 16 }}
                pt={{ base: "8vh", lg: "16vh" }}
            >
                <Text
                    fontFamily="var(--font-space-grotesk)"
                    fontWeight="bold"
                    fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
                    lineHeight="1.1"
                    p={4}
                >
                    The Growing Matrix
                </Text>

                <Box minH={'80vh'} position="relative" w="full" borderRadius="3xl" overflow="hidden">
                     <Box
                            as="video"
                            src="/videos/matrix.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                        <Flex
                            position="absolute"
                            top={0}
                            left={0}
                            w="full"
                            h="full"
                            alignItems="center"
                            p={8}
                            bg="blackAlpha.300"
                        >
                            <Text
                                fontFamily="var(--font-space-grotesk)"
                                fontWeight="bold"
                                fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                                maxW="1000px"
                                textShadow="0 2px 10px rgba(0,0,0,0.8)"
                            >
                                a personal computing device that grows its size to activate bigger models
                            </Text>
                        </Flex>
                    </motion.div>
                </Box>

                <VStack spacing={32} w="full" mt={20}>
                    {/* Section 1 */}
                    <MatrixSection 
                        title="navigating public transit"
                        stats={[
                            "context window: 1024",
                            "embedding: 8192",
                            "attention key-query: 256",
                            "attention value: 48",
                            "feed-forward layer: 96"
                        ]}
                        paramSize="17B parameters"
                        imageSrc="/images/matrix-1.png"
                        imageAlt="Navigating public transit"
                    />

                    {/* Section 2 */}
                    <MatrixSection 
                        title="helping with physics homework"
                        stats={[
                            "context window: 768",
                            "embedding: 32768",
                            "attention key-query: 128",
                            "attention value: 48",
                            "feed-forward layer: 128"
                        ]}
                        paramSize="67B parameters"
                        imageSrc="/images/matrix-2.png"
                        imageAlt="Physics homework"
                    />

                    {/* Section 3 - Custom Layout */}
                    <Box w="full" py={20}>
                        <Flex direction={{ base: "column", xl: "row" }} justify="space-between" align="flex-start" mb={10} gap={10}>
                            <VStack align="start" spacing={4}>
                                <Text
                                    fontFamily="var(--font-space-grotesk)"
                                    fontWeight="bold"
                                    fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                                    lineHeight="1"
                                >
                                    debugging software project
                                </Text>
                                <Text
                                    fontFamily="var(--font-space-grotesk)"
                                    fontWeight="bold"
                                    fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                                    lineHeight="1"
                                >
                                    192B parameters
                                </Text>
                            </VStack>
                            
                            <Box pt={2}>
                                <StatsBlock stats={[
                                    "context window: 8192",
                                    "embedding: 32768",
                                    "attention key-query: 2048",
                                    "attention value: 768",
                                    "feed-forward layer: 512"
                                ]} />
                            </Box>
                        </Flex>
                        
                        <Box w="full" h={{ base: "300px", md: "600px", lg: "900px" }} position="relative" borderRadius="2xl" overflow="hidden">
                            <Image 
                                src="/images/matrix-3.png" 
                                alt="Debugging software" 
                                fill 
                                style={{ objectFit: "cover" }}
                            />
                        </Box>
                    </Box>
                </VStack>

                {/* Call to Action */}
                <motion.div
                    style={{ display: 'inline-block', pointerEvents: 'auto' }}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Box mt={'10vh'} mb={'10vh'}>
                        <Text
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontWeight="semibold"
                            fontStyle="italic"
                            fontSize={{ base: "4xl", md: "6xl", lg: "96px" }}
                            lineHeight="1.1"
                            cursor="pointer"
                            display="inline-block"
                        >
                            explore the next object →
                        </Text>
                    </Box>
                </motion.div>

            </Flex>
        </Box>
    )
}
