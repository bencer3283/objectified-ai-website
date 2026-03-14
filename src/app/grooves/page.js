'use client'

import { Box, Flex, Text, Span, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";

const SectionRow = ({ label, items, images, ...props }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 1350);
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
                fontStyle={'italic'}
                fontSize={{ base: "3xl", md: "5xl", lg: "64px" }}
                lineHeight='1'
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

const Walkaround = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    
    // Track scroll progress relative to this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log(latest);
        if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
            videoRef.current.currentTime = latest * videoRef.current.duration;
        }
    });

    const embeddingOpacity = useTransform(scrollYProgress, [0.03, 0.07, 0.13, 0.1861], [0, 1, 1, 0])
    const embeddingY = useTransform(scrollYProgress, [0.03, 0.07], [8, 0])
    const attentionOpacity = useTransform(scrollYProgress, [0.055, 0.1, 0.13, 0.1861], [0, 1, 1, 0])
    const attentionY = useTransform(scrollYProgress, [0.055, 0.01], [8, 0])
    const perceptronOpacity = useTransform(scrollYProgress, [0.068, 0.1, 0.13, 0.1861], [0, 1, 1, 0])
    const perceptronY = useTransform(scrollYProgress, [0.068, 0.012], [8, 0])
    const ventsOpacity = useTransform(scrollYProgress, [0.20, 0.24, 0.32, 0.35], [0, 1, 1, 0])
    const ventsY = useTransform(scrollYProgress, [0.20, 0.24], [8, 0])
    const nfcOpacity = useTransform(scrollYProgress, [0.36, 0.39, 0.44, 0.47], [0, 1, 1, 0])
    const nfcY = useTransform(scrollYProgress, [0.36, 0.39], [8, 0])
    const batteryOpacity = useTransform(scrollYProgress, [0.58, 0.61, 0.68, 0.72], [0, 1, 1, 0])
    const batteryY = useTransform(scrollYProgress, [0.58, 0.61], [8, 0])

    return(
        <div ref={containerRef} style={{ height: '1200vh', width: '100%'}}>
            <div style={{position: 'sticky', display: 'flex', alignItems: 'center', zIndex: 10, top: '8vh', height: '90vh', width: '100%',}}>
                <VStack>
                    <SectionRow label={"AI that is"} items={["small", "mechanized", "informative", "user-owned", "configurable", "modular", "context-specific", "personal", "local", "intentional"]} />
                    <Box
                        ref={videoRef}
                        mt={8}
                        as="video"
                        src="/videos/animation.61.mp4"
                        preload="auto"
                        muted
                        playsInline
                        width="100%"
                        borderRadius="3xl"
                        boxShadow="2xl"
                    />
                </VStack>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: embeddingOpacity, translateY: embeddingY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="33%"
                          left="12%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.800'
                          pointerEvents="auto"
                      >
                          Embedding Compute →
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: attentionOpacity, translateY: attentionY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="45%"
                          left="8%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          Attention Compute →
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: perceptronOpacity, translateY: perceptronY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="70%"
                          left="59%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          ← Perceptron Compute
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: ventsOpacity, translateY: ventsY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="70%"
                          left="51%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          ↑ Adaptable Cooling Vents
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: nfcOpacity, translateY: nfcY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="43%"
                          left="26%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          Near Field Communication ↓
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: batteryOpacity, batteryY: nfcY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="71%"
                          left="39%"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "m", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          maxW="80%"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          Swappable Battery ↑
                      </Text>
                  </motion.div>
                </Box>
            </div>
        </div>
    )
}

export default function Grooves() {
    return(
        <div style={{ backgroundColor: '#545252', minHeight: '100vh', width: '100%', padding: '16px', color: 'white'}}>
            <VStack pt={'10vh'} px={'16'} alignItems={'center'}>
                <Walkaround />
                <Text
                    fontFamily="var(--font-space-grotesk)"
                    fontWeight="semibold"
                    fontSize={{ base: "1xl", md: "3xl", lg: "48px" }}
                    lineHeight="1"
                    color="white"
                    paddingTop={16}
                >
                    Adjustable compute power allocation for customized model size
                </Text>
                <Box
                    mt={8}
                    as="video"
                    src="/videos/groove_adjust.mov"
                    preload="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    maxH={'80vh'}
                    borderRadius="3xl"
                    boxShadow="2xl"
                />
                <Text
                    fontFamily="var(--font-space-grotesk)"
                    fontWeight="semibold"
                    fontSize={{ base: "1xl", md: "3xl", lg: "48px" }}
                    lineHeight="1"
                    color="white"
                    paddingTop={16}
                >
                    Modular configuration for different tasks and context
                </Text>
                <Box
                    mt={8}
                    as="video"
                    src="/videos/groove_swap.mov"
                    preload="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    maxH={'80vh'}
                    borderRadius="3xl"
                    boxShadow="2xl"
                />
                <Text
                    fontFamily="var(--font-space-grotesk)"
                    fontWeight="semibold"
                    fontSize={{ base: "1xl", md: "3xl", lg: "48px" }}
                    lineHeight="1"
                    color="white"
                    paddingTop={16}
                >
                    Intentional, secure and off-grid communications
                </Text>
                <Box
                    mt={8}
                    as="video"
                    src="/videos/animation_tap.69.mp4"
                    preload="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    maxH={"80vh"}
                    borderRadius="3xl"
                    boxShadow="2xl"
                />
            </VStack>
            
        </div>
    )
}