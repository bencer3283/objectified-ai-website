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
                pb={{ base: "6vh", lg: "12vh" }}
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
            <div style={{ width: '100%', marginTop: '64px'}}>
                <ComputeElementSection />
            </div>

            {/* Product 2 Section */}
            <Box w="full" display="flex" justifyContent="center" mt={16} position="relative">
                <Box position="relative" w="full" maxW="calc(95vh * (2033 / 1355))" aspectRatio={2033 / 1355}>
                    <Image
                        src="/images/product-2.PNG"
                        alt="Physical Shape Changes"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <Box position="absolute" inset={0} pointerEvents="none">
                         <Text
                            position="absolute"
                            top="6.6%"
                            left="4.8%"
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="semibold"
                            fontSize={{ base: "2xl", md: "4xl", lg: "64px" }}
                            lineHeight="1"
                            maxW="59%"
                            color="black"
                        >
                            the physical shape changes to reflect the configured size of each layer
                        </Text>
                         <Text
                            position="absolute"
                            top="66.3%"
                            left="45.1%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            lineHeight="1"
                            maxW="48%"
                            color="black"
                        >
                            more cooling and computation capacity is activated to support bigger models on demand
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Product 3 Section */}
            <Box w="full" display="flex" justifyContent="center" mt={16} position="relative">
                <Box position="relative" w="full" maxW="calc(95vh * (2033 / 1355))" aspectRatio={2033 / 1355}>
                    <Image
                        src="/images/product-3.PNG"
                        alt="Swappable Compute Element"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <Box position="absolute" inset={0} pointerEvents="none">
                         <Text
                            position="absolute"
                            top="8.9%"
                            left="6.0%"
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="semibold"
                            fontSize={{ base: "2xl", md: "4xl", lg: "64px" }}
                            lineHeight="1"
                            maxW="70%"
                            color="black"
                        >
                            swappable compute element for compartmentalized knowledge
                        </Text>
                        
                        {/* Labels */}
                         <Text
                            position="absolute"
                            top="88.8%"
                            left="51.5%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            color="black"
                        >
                            life
                        </Text>
                         <Text
                            position="absolute"
                            top="88.8%"
                            left="62.9%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            color="black"
                        >
                            work
                        </Text>
                         <Text
                            position="absolute"
                            top="88.8%"
                            left="73.9%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            color="black"
                        >
                            writing
                        </Text>
                         <Text
                            position="absolute"
                            top="88.8%"
                            left="86.8%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            color="black"
                        >
                            image
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Product 5 Section */}
            <Box w="full" display="flex" justifyContent="center" mt={16} mb={16} position="relative">
                <Box position="relative" w="full" maxW="calc(95vh * (2033 / 1355))" aspectRatio={2033 / 1355}>
                    <Image
                        src="/images/product-5.PNG"
                        alt="Data Exchange"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <Box position="absolute" inset={0} pointerEvents="none">
                         <Text
                            position="absolute"
                            top="10.0%"
                            left="6.9%"
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="semibold"
                            fontSize={{ base: "2xl", md: "4xl", lg: "64px" }}
                            lineHeight="1"
                            maxW="90%"
                            color="black"
                        >
                            optional compute boost element
                        </Text>
                         <Text
                            position="absolute"
                            top="65%"
                            left="78%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            lineHeight="1"
                            maxW="33%"
                            color="black"
                        >
                            for even larger model
                        </Text>
                    </Box>
                </Box>
            </Box>

             {/* Product 4 Section */}
            <Box w="full" display="flex" justifyContent="center" mt={16} mb={16} position="relative">
                <Box position="relative" w="full" maxW="calc(95vh * (2033 / 1355))" aspectRatio={2033 / 1355}>
                    <Image
                        src="/images/product-4.PNG"
                        alt="Data Exchange"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <Box position="absolute" inset={0} pointerEvents="none">
                         <Text
                            position="absolute"
                            top="10.0%"
                            left="6.9%"
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="semibold"
                            fontSize={{ base: "2xl", md: "4xl", lg: "64px" }}
                            lineHeight="1"
                            maxW="52%"
                            color="black"
                        >
                            secure, intentional data exchange
                        </Text>
                         <Text
                            position="absolute"
                            top="79.9%"
                            left="6.9%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            lineHeight="1"
                            maxW="33%"
                            color="black"
                        >
                            to access personal information like email, calendar or internet search
                        </Text>
                    </Box>
                </Box>
            </Box>

            {/* Product 6 Section */}
            <Box w="full" display="flex" justifyContent="center" mt={16} mb={16} position="relative">
                <Box position="relative" w="full" maxW="calc(95vh * (2033 / 1355))" aspectRatio={2033 / 1355}>
                    <Image
                        src="/images/product-6.PNG"
                        alt="Data Exchange"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '12px' }}
                    />
                    <Box position="absolute" inset={0} pointerEvents="none">
                         <Text
                            position="absolute"
                            top="9.0%"
                            left="6.9%"
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="semibold"
                            fontSize={{ base: "2xl", md: "4xl", lg: "64px" }}
                            lineHeight="1"
                            maxW="65%"
                            color="black"
                        >
                            fully local training station 
                        </Text>
                         <Text
                            position="absolute"
                            top="83%"
                            left="6.9%"
                            fontFamily="var(--font-ibm-plex-serif)"
                            fontStyle="italic"
                            fontWeight="semibold"
                            fontSize={{ base: "sm", md: "2xl" }}
                            lineHeight="1"
                            maxW="40%"
                            color="black"
                        >
                            record conversation or upload custom data to fine-tune your own unique model 
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box w='full' h={'90vh'} my={'5vh'} justifyContent={'center'} display={'flex'}>
                <iframe style={{"border": "1px solid rgba(0, 0, 0, 0.1)"}} width="1200" height="750" src="https://embed.figma.com/proto/pk8O9rZYgYicQK6Mp9C8zk/Triangular-Frame-UX?page-id=0%3A1&node-id=2-80&viewport=50%2C182%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80&embed-host=share" allowFullScreen></iframe>
            </Box>

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