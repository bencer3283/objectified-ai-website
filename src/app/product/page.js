'use client'

import { Text, Box } from "@chakra-ui/react"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";
import ComputeElementSection from "@/components/ComputeElementSection";

export default function Product() {
    return (
        <div style={{ backgroundColor: '#545252', minHeight: '100vh', width: '100%', padding: '16px', color: 'white' }}>
            <Box
                w="full"
                maxW="1600px"
                mx="auto"
                pt={{ base: "8vh", lg: "16vh" }}
            >
                <Text
                    fontFamily="var(--font-space-grotesk)"
                    fontWeight="bold"
                    fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
                    lineHeight="1.1"
                    p={4}
                >
                    A Personal Computing Device for LLM Work
                </Text>
            </Box>

            {/* New Section: Individual compute element - Outside the constrained maxW container */}
            <div style={{ width: '100%', marginTop: '64px' }}>
                <ComputeElementSection />
            </div>

            <Box
                w="full"
                maxW="1600px"
                mx="auto"
            >
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
                            <a href="https://bencer3283.github.io/art/" target="_blank">learn more about me →</a>
                        </Text>
                    </Box>
                </motion.div>
            </Box>
        </div>
    )
}