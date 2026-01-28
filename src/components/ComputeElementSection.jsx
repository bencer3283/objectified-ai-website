'use client';

import { useRef } from 'react';
import { Flex, Text, Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { BsArrowUp } from "react-icons/bs";

export default function ComputeElementSection() {
    const containerRef = useRef(null);

    // Track scroll progress relative to this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animation sequences
    const headingOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
    const attentionOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const embeddingOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const perceptronOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

    return (
        // The "track" that dictates the duration of the scroll section
        <div
            ref={containerRef}
            style={{
                height: '400vh',
                width: '100%',
                backgroundColor: '#545252'
            }}
        >
            {/* The sticky container that holds the visual content */}
            <div
                style={{
                    position: 'sticky',
                    top: '5vh',
                    height: '90vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}
            >
                {/* Content Container */}
                <Box position="relative" w="full" maxW="2033px" mx="auto" px={4} h="full" display="flex" alignItems="center" justifyContent="center">
                    <Box position="relative" w="full" aspectRatio={2033 / 1600} maxHeight="100vh">
                        <Image
                            src="/images/product-1.PNG"
                            alt="Compute Element"
                            fill
                            style={{ objectFit: 'contain', borderRadius: '12px' }}
                            priority
                        />
                        
                        {/* Overlay Content */}
                        <Box position="absolute" inset={0} pointerEvents="none">
                            {/* Main Heading - Fades Out */}
                            <motion.div style={{ opacity: headingOpacity, width: '100%', height: '100%' }}>
                                <Text
                                    position="absolute"
                                    top="62.5%"
                                    left="7%"
                                    fontFamily="var(--font-space-grotesk)"
                                    fontWeight="semibold"
                                    fontSize={{ base: "xl", md: "4xl", lg: "64px" }}
                                    lineHeight="1"
                                    maxW="62.5%"
                                    color="black"
                                    pointerEvents="auto"
                                >
                                    Individual compute element for each layer of LLM
                                </Text>
                            </motion.div>

                            {/* Attention - Fades In */}
                            <motion.div style={{ opacity: attentionOpacity, width: '100%', height: '100%' }}>
                                <Box position="absolute" top="14%" left="54.8%" pointerEvents="auto">
                                    <Text fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic" fontWeight="semibold" fontSize={{ base: "sm", md: "2xl" }} color="black">
                                        attention
                                    </Text>
                                    <Box mt={2} ml={10}>
                                        <BsArrowUp size={36} color="black" style={{ transform: 'rotate(180deg)' }} />
                                    </Box>
                                </Box>
                            </motion.div>

                            {/* Embedding - Fades In */}
                            <motion.div style={{ opacity: embeddingOpacity, width: '100%', height: '100%' }}>
                                <Box position="absolute" top="57.2%" left="83.2%" pointerEvents="auto" display={'flex'} flexDirection={'row'}>
                                    <Box mt={0} ml={2} mr={3} style={{ transform: 'rotate(-90deg)' }}>
                                        <BsArrowUp size={36} color="black" />
                                    </Box>
                                    <Text fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic" fontWeight="semibold" fontSize={{ base: "sm", md: "2xl" }} color="black">
                                        embedding
                                    </Text>
                                </Box>
                            </motion.div>

                            {/* Perceptron - Fades In */}
                            <motion.div style={{ opacity: perceptronOpacity, width: '100%', height: '100%' }}>
                                <Box position="absolute" top="77.8%" left="44.2%" pointerEvents="auto">
                                    <Box mt={2} ml={10} style={{ transform: 'rotate(32deg)' }}>
                                        <BsArrowUp size={36} color="black" />
                                    </Box>
                                    <Text fontFamily="var(--font-ibm-plex-serif)" fontStyle="italic" fontWeight="semibold" fontSize={{ base: "sm", md: "2xl" }} color="black">
                                        perceptron
                                    </Text>
                                </Box>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
}