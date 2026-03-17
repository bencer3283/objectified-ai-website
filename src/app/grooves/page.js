'use client'

import { Box, Flex, Text, Span, VStack, HStack, Grid, GridItem, Carousel, IconButton, CloseButton } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const SectionRowBig = ({ label, items, images, ...props }) => {
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
          fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
          lineHeight="1.2"
          whiteSpace="nowrap"
        >
          {label}
        </Text>
        <Box height={{ base: "40px", md: "65px", lg: "105px" }} position="relative" overflow="hidden">
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
                fontSize={{ base: "3xl", md: "5xl", lg: "84px" }}
                lineHeight='1.2'
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
    const labelOpacity = useTransform(scrollYProgress, [0.84, 0.88, 0.92, 0.94], [0, 1, 1, 0])
    const labelY = useTransform(scrollYProgress, [0.84, 0.88], [8, 0])

    return(
        <div ref={containerRef} style={{ height: '1200vh', width: '100%'}}>
            <div style={{position: 'sticky', display: 'flex', alignItems: 'center', zIndex: 10, top: '8vh', height: '90vh', width: '100%',}}>
                <VStack w="full">
                    <SectionRowBig label={"AI that is"} items={["small", "mechanized", "informative", "user-owned", "configurable", "modular", "context-specific", "personal", "local", "intentional", "erasable"]} />
                    <Box position="relative" w="full" mt={8}>
                        <Box
                            ref={videoRef}
                            as="video"
                            src="/videos/animation.61.mp4"
                            preload="auto"
                            muted
                            playsInline
                            width="100%"
                            borderRadius="3xl"
                            boxShadow="2xl"
                        />
                <Box position="absolute" inset={0} pointerEvents="none" w={'100%'}>
                  <motion.div style={{ opacity: embeddingOpacity, translateY: embeddingY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="15%"
                          left="38%"
                          transform="translateX(-100%)"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
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
                          top="33%"
                          left="33%"
                          transform="translateX(-100%)"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
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
                          top="65%"
                          left="59%"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
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
                          top="73%"
                          left="55%"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          ↑ Adaptive Cooling Vents
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: nfcOpacity, translateY: nfcY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="31%"
                          left="60%"
                          transform="translateX(-100%)"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          color='gray.700'
                          textShadow="0px 2px 4px rgba(0,0,0,0.2)"
                          pointerEvents="auto"
                      >
                          Secure Near Field Communication ↓
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: batteryOpacity, translateY: batteryY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="68%"
                          left="62%"
                          transform="translateX(-100%)"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          color='gray.700'
                          pointerEvents="auto"
                      >
                          Swappable Battery ↑
                      </Text>
                  </motion.div>
                </Box>
                <Box position="absolute" inset={0} pointerEvents="none">
                  <motion.div style={{ opacity: labelOpacity, translateY: labelY , width: '100%', height: '100%' }}>
                      <Text
                          position="absolute"
                          top="41%"
                          left="43%"
                          transform="translateX(-100%)"
                          whiteSpace="nowrap"
                          fontFamily="var(--font-space-grotesk)"
                          fontWeight="semibold"
                          fontSize={{ base: "md", md: "2xl", lg: "32px" }}
                          lineHeight="1"
                          color='gray.700'
                          textShadow="0px 2px 4px rgba(0,0,0,0.2)"
                          pointerEvents="auto"
                      >
                          Programmable E-Ink Label ↓
                      </Text>
                  </motion.div>
                </Box>
                
                    </Box>
                </VStack>
            </div>
        </div>
    )
}

const ExpandableCard = ({ title, images = [], texts = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isExpanded) {
    return (
      <GridItem
        colSpan={{ base: 1, lg: 2 }}
        w="full"
        h="70vh"
        bg="white"
        borderRadius="36px"
        p={10}
        display="flex"
        flexDirection="column"
        gap={6}
        overflow="hidden"
      >
        <Flex justify="space-between" align="center">
          <Text
            fontFamily="var(--font-space-grotesk)"
            fontWeight="semibold"
            fontSize={{ base: "1xl", md: "3xl", lg: "48px" }}
            color="black"
            lineHeight="normal"
            cursor="pointer"
            onClick={() => setIsExpanded(false)}
          >
            {title}
          </Text>
          <CloseButton onClick={() => setIsExpanded(false)} colorPalette={"gray"} size="lg" variant="subtle" />
        </Flex>
        <Box flex={1} overflow="hidden" position="relative" onClick={(e) => e.stopPropagation()} cursor="default">
            <Carousel.Root slideCount={images.length} h="100%" w="full">
              <Carousel.ItemGroup h="100%">
                {images.map((src, index) => (
                  <Carousel.Item key={index} index={index} h="100%">
                    <Flex h="100%" direction={{ base: "column", md: "row" }} gap={8}>
                        <Box flex={{ base: 1, md: 2 }} position="relative" borderRadius="24px" overflow="hidden" h="100%">
                            <Image
                                src={src}
                                alt={title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                        <Box flex={{ base: 1, md: 1 }} display="flex" alignItems="center" pb={{ base: 12, md: 0 }}>
                            <Text
                                fontFamily="var(--font-ibm-plex-serif)"
                                fontStyle="normal"
                                fontWeight="regular"
                                fontSize={{ base: "s", md: "s", lg: "24px" }}
                                color="black"
                                lineHeight="normal"
                                whiteSpace="pre-wrap"
                            >
                                {texts[index] || ""}
                            </Text>
                        </Box>
                    </Flex>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>
              <Carousel.Control gap="4" zIndex={10} p={2} borderRadius="full" backgroundColor="gray.200">
                <Carousel.PrevTrigger asChild>
                  <IconButton size="sm" variant="outline" color="black" bg="gray.200" rounded="full">
                    <LuChevronLeft />
                  </IconButton>
                </Carousel.PrevTrigger>
                <Carousel.Indicators />
                <Carousel.NextTrigger asChild>
                  <IconButton size="sm" variant="outline" color="black" bg="gray.200" rounded="full">
                    <LuChevronRight />
                  </IconButton>
                </Carousel.NextTrigger>
              </Carousel.Control>
            </Carousel.Root>
        </Box>
      </GridItem>
    );
  }

  return (
    <GridItem
      colSpan={1}
      w="full"
      h={"35vh"}
      bg="white"
      borderRadius="36px"
      p={6}
      cursor="pointer"
      onClick={() => setIsExpanded(true)}
      display="flex"
      flexDirection="column"
      gap={6}
      overflow="hidden"
    >
      <Box flex={1} position="relative" borderRadius="24px" overflow="hidden">
        {images[0] && (
            <Image
                src={images[0]}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
            />
        )}
      </Box>
      <Text
        fontFamily="var(--font-space-grotesk)"
        fontWeight="semibold"
        fontSize={{ base: "l", md: "2xl", lg: "36px" }}
        color="black"
        lineHeight="normal"
      >
        {title}
      </Text>
    </GridItem>
  );
};

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
                    src="/videos/groove_adjust_web.mp4"
                    preload="auto"
                    autoPlay
                    controls
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
                    src="/videos/groove_swap_web.mp4"
                    preload="auto"
                    autoPlay
                    controls
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
                    controls
                    loop
                    muted
                    playsInline
                    maxH={"80vh"}
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
                    paddingBottom={8}
                >
                    Case Studies
                </Text>
                <Grid 
                    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} 
                    gap={8} 
                    w="full" 
                    maxW="1600px"
                    mx="auto"
                >
                    <ExpandableCard 
                        title="National Security"
                        images={["/images/security-1.png", "/images/security-2.png"]}
                        texts={[
                            "Officials from two different countries are negotiating a Free Trade Agreement in a meeting.  They are using this AI tool to take notes from the meeting and also to quickly browse through piles of highly secretive data about their own country's economy.",
                            "After the meeting, they destroy the physical device on-site to make sure no classified information leaves the room or is compromised by the other party. No digital traces of any kind are left."
                        ]}
                    />
                    <ExpandableCard 
                        title="Community Culture"
                        images={["/images/culture-1.png", "/images/culture-2.png", "/images/culture-3.png"]}
                        texts={[
                            "Local communities can use their data to train models so that models understands the cultural background of the communities. It becomes useful for models to engage with cultural materials, to behave according to community guidelines and to preserve important knowledge. ",
                            "Compare to could-based foundation models, these small models can be fine-tuned and steered much more easily. The data stays owned and controlled by the community, without being significantly diluted by foundational datasets.",
                            "They can also retains a repository of models/modules specific to different aspect or realm of their culture, say one for textiles, one for graphical patterns and one for music, essentially becoming a library of models that can be provided to members of the community or licensed to external institutions."
                        ]}
                    />
                    <ExpandableCard 
                        title="Trades"
                        images={["/images/trade-1.png", "/images/trade-2.png", "/images/trade-3.png"]}
                        texts={[
                            "Experienced woodworkers practices making as an art, they have their own unique techniques, approaches and logics to making. They prefer a certain set of tools, and use them in a highly individualized way.",
                            "They can now use the AI device to record how their personal processes and train the model to understand their unique preference for woodworking. The AI becomes a truly personal collaboration and brainstorming tool instead of just reporting generic summarization of instruction manual from the internet.",
                            "Users can also easily share their special techniques from years of experiences to other people just by share the model. They can also license their unique knowledge to other entities. By giving the model their personal training data, they also don’t have to worry about the model responding with untrustworthy data source."
                        ]}
                    />
                    <ExpandableCard 
                        title="Healthcare"
                        images={["/images/healthcare-1.png", "/images/healthcare-2.png", "/images/healthcare-3.png"]}
                        texts={[
                            "You are at work and the school of your 10-year-old daughter called because the school nurse found out that she needs to go to the dentist asap. You need to figure out whether you can book an appointment with your dentist or otherwise your daughter might have to go to the ER.",
                            "You can quickly swap the embedding module you are using at work to the one that you've been using for parenting, which also knows personal information about your daughter. The model can now help with the reservation or even find some back-up options that suit your daughter's need. Once it reports clearer path forward, you can switch back to the work module.",
                            "At the dentist appointment, you can share the embedding module which has the knowledge of your daughter's healthcare record with the practitioner so they can quickly understand what's going on. While they are doing additional tests and diagnosis for your daughter, these new data can also be loaded to the module. The healthcare data stays owned and controlled by you. It is not shared with others without your explicit consent, and it becomes something you use utilize independently yourself."
                        ]}
                    />
                </Grid>
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
            </VStack>
            
        </div>
    )
}