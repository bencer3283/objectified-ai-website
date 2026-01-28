'use client'

import { Flex, Text, Box, Span, SimpleGrid, VStack, HStack } from "@chakra-ui/react"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);
const MotionBox = motion.create(Box);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const StatsBlock = ({ stats }) => (
    <VStack align="start" spacing={0} fontFamily="var(--font-space-grotesk)" fontWeight="semibold" fontSize={{ base: "xl", lg: "32px" }} color="whiteAlpha.900">
        {stats.map((stat, index) => (
            <Text key={index}>{stat}</Text>
        ))}
    </VStack>
);

const MatrixSection = ({ title, stats, paramSize, imageSrc, imageAlt, reverse = false }) => (
    <MotionFlex
        direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
        w="full"
        gap={10}
        align={{ base: "stretch", md: "center" }}
        py={20}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
    >
        <Flex direction="column" flex={1} gap={10} align="flex-start" h="full" justify="space-between">
            <MotionText
                variants={itemVariants}
                fontFamily="var(--font-space-grotesk)"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "5xl", lg: "80px" }}
                lineHeight="1"
            >
                {title}
            </MotionText>
            
            <MotionBox py={10} variants={itemVariants}>
                <StatsBlock stats={stats} />
            </MotionBox>

            <MotionText
                variants={itemVariants}
                fontFamily="var(--font-space-grotesk)"
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "5xl", lg: "80px" }}
                lineHeight="1"
            >
                {paramSize}
            </MotionText>
        </Flex>

        <MotionBox 
            flex={{ base: "none", md: 1 }}
            w="full"
            position="relative" 
            h={{ base: "60vh", md: '90vh' }} 
            overflow='visible'
            borderRadius="2xl"
            variants={itemVariants}
        >
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill 
                style={{ objectFit: 'contain' }}
            />
        </MotionBox>
    </MotionFlex>
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
            overflow="visible"
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

                <Box minH={'80vh'} position="relative" w="full" borderRadius="3xl" overflow="visible">
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
                                <Box mt={'8vh'}>
                                <Text
                                    fontFamily="var(--font-space-grotesk)"
                                    fontWeight="bold"
                                    fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                                    lineHeight="1"
                                >
                                    192B parameters
                                </Text>
                                </Box>
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
                        
                        <Box w="80vw" h={{ base: "50vh", md: "70vh"}} position="relative" borderRadius="2xl" overflow="visible">
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
                            <Link href="/product">see how they come together as a concept product →</Link>
                        </Text>
                    </Box>
                </motion.div>

            </Flex>
        </Box>
    )
}
