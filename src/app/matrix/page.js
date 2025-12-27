'use client'

import { Flex, Text, Box, Span } from "@chakra-ui/react"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useRef, useEffect, useMemo } from "react";
import { motion } from "motion/react";

const Model = () => {
    const obj = useLoader(OBJLoader, "/objs/motorized-6col.obj");
    const myObj = useRef();

    // Apply material to all meshes in the OBJ
    useEffect(() => {
        obj.traverse((child) => {
            if (child.isMesh) {
                // Ensure a fresh material is applied
                child.material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#13393b"),
                    metalness: 0.1,
                    roughness: 0.6,
                });
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [obj]);

    console.log(obj);
    return <primitive object={obj} scale={0.7} position={[-2, -0.6, -4]} rotation={[-0.8, 0, 0]} ref={myObj} />;
};

export default function Abacus() {
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

                <Flex
                    direction="column"
                    color='white'
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
                        textAlign="left"
                        color="white"
                        p={8}
                    >
                        The Growing Matrix
                    </Text>
                    <Box minH={'80vh'} position="relative" display="flex" justifyContent="center" alignItems="center" zIndex={1}>
                        <Box
                            as="video"
                            src="/videos/matrix.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"

                        />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
                            <Flex
                                position="absolute"
                                top={'auto'}
                                left={0}
                                w="full"
                                h="full"
                                justifyContent="left"
                                alignItems="top"
                                zIndex={10}
                                p={4}
                            >

                                <Text
                                    fontFamily="var(--font-space-grotesk)"
                                    fontWeight="bold"
                                    fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                                    textAlign="left"
                                    color="white"
                                    textShadow="0 2px 10px rgba(0,0,0,0.8)"
                                    p={8}
                                >
                                    a personal computing device that grows its size to activate bigger models
                                </Text></Flex>
                        </motion.div>

                    </Box>
                    <Text
                        fontFamily="var(--font-space-grotesk)"
                        fontWeight="bold"
                        fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                        textAlign="left"
                        color="white"
                        p={8}
                    >
                        Models can start to actually understand us human. If they are smaller and can be run locally, it also represent a more personal, intimate human-AI relationship.
                    </Text>
                    <Box mt={'20vh'}>
                        <Text
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="bold"
                            fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                            textAlign="left"
                            color="white"
                            p={8}
                        >
                            the interface also shows something physically making computations, showing the <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle={'italic'}>tangible</Span> aspect of AI as opposed to a invisible, digital process and making the interaction more <Span fontFamily="var(--font-ibm-plex-serif)" fontStyle={'italic'}>intentional</Span>.
                        </Text>
                    </Box>
                    <Box
                        as="video"
                        src="/videos/abacus-2.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        borderRadius="3xl"
                        boxShadow="2xl"
                        mt={'20vh'}
                    />
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
        </>
    )
}