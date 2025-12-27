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
    const obj = useLoader(OBJLoader, "/objs/cd_player.obj");
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
    return <primitive object={obj} scale={0.35} position={[-1, -1.5, -4.5]} rotation={[-1, 0, -0.8]} ref={myObj} />;
};

export default function Cd() {
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
                        <Environment preset="city" />

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
                        Compartmentalized LLMs

                    </Text>
                    <Box mt={'40vh'}>


                        <Text
                            fontFamily="var(--font-space-grotesk)"
                            fontWeight="bold"
                            alignSelf={{ base: "flex-start", lg: "flex-start" }}
                            ml={{ base: "8%", lg: "5%" }}
                            fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                        >What if every model is small, efficient and very application-specific?</Text>
                    </Box>

                    <Box mt={'10vh'} minH={'80vh'} position="relative" display="flex" justifyContent="center" alignItems="center" zIndex={1}>
                        <Box
                            as="video"
                            src="/videos/discman-1.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            borderRadius="3xl"
                            boxShadow="2xl"
                        />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
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
                                    They all live on a CD disc and is loaded by the user depending on the task.
                                </Text></Flex>
                        </motion.div>

                    </Box>
                    <Box mt={'10vh'} minH={'80vh'} position="relative" display="flex" justifyContent="center" alignItems="center" zIndex={1}>
                        <Box
                            as="video"
                            src="/videos/discman-2.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="100%"
                            borderRadius="3xl"
                            boxShadow="2xl"
                        />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
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
                                    even within one task, you may need to swap several models
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
                        Some of them can stay completely offline and private, others can be exposed to the internet.
                    </Text>
                    
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