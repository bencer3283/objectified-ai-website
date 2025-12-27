'use client'

import { Flex, Text, Box, Span } from "@chakra-ui/react"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from '@react-three/fiber';
import { Canvas, useFrame } from "@react-three/fiber";
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
                child.material = new THREE.MeshStandardMaterial({
                    color: "#13393bff",
                    metalness: 0.1,
                    roughness: 0.6,
                });
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
                <Box w='full' m={'2vw'} position="absolute" alignSelf={'center'} top={0} left={0} zIndex={0} h={{ base: "30vh", md: "80vh" }}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        {/* Lights */}
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
                        <pointLight position={[-5, -5, -5]} intensity={0.5} />
                        <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} penumbra={1} />

                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                    </Canvas>
                </Box>
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
                        alignSelf={{ base: "flex-start", lg: "flex-start" }}
                        ml={{ base: "8%", lg: "5%" }}
                        textShadow="0 2px 10px rgba(0,0,0,0.8)"
                    >
                        Giving LLM internal representation<br /><Span fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}>via embedding</Span>

                    </Text>
                    <Box mt={'40vh'}>


                        <Text
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="bold"
                            alignSelf={{ base: "flex-start", lg: "flex-start" }}
                            ml={{ base: "8%", lg: "5%" }}
                            fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                        >Embedding is the numerical representation of the meaning of tokens (words).</Text>
                    </Box>

                    <Box mt={'10vh'} minH={'80vh'} position="relative" display="flex" justifyContent="center" alignItems="center" zIndex={1}>
                        <Box
                            as="video"
                            src="/videos/abacus-1.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            borderRadius="3xl"
                            boxShadow="2xl"
                        />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }}>
                            <Flex
                                position="absolute"
                                top={0}
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
                                    What if we give users an interface to adjust the embedding of each word to their unique internal representation?
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
                    
                </Flex>

            </Box>
        </>
    )
}