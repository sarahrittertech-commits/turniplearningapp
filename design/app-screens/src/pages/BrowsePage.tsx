import React, { Component } from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  Grid,
  GridItem,
  useBreakpointValue } from
'@chakra-ui/react';
import { Settings, Cast, Play, Star, Download } from 'lucide-react';
// Reusable Components
const ShowAvatar = ({
  emoji,
  image,
  name,
  bg





}: {emoji?: string;image?: string;name: string;bg: string;}) =>
<VStack spacing={2} flexShrink={0} w={24}>
    <Box
    w={20}
    h={20}
    bg={bg}
    borderRadius="2xl"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="md"
    border="4px solid white"
    overflow="hidden">
    
      {image ?
    <Image src={image} alt={name} w="full" h="full" objectFit="cover" /> :

    <Text fontSize="4xl">{emoji}</Text>
    }
    </Box>
    <Text
    color="#2D1050"
    fontSize="sm"
    fontWeight="bold"
    textAlign="center"
    lineHeight="tight">
    
      {name}
    </Text>
  </VStack>;

const VideoCard = ({
  bg,
  emoji,
  image,
  showName,
  episodeTitle,
  duration,
  isNew,
  isFullEpisode









}: {bg: string;emoji?: string;image?: string;showName: string;episodeTitle: string;duration: string;isNew?: boolean;isFullEpisode?: boolean;}) =>
<Box
  flexShrink={0}
  w={{
    base: '280px',
    md: '320px'
  }}>
  
    <Box
    w="full"
    h={{
      base: '160px',
      md: '180px'
    }}
    bg={bg}
    borderRadius="2xl"
    position="relative"
    overflow="hidden"
    boxShadow="md"
    mb={3}
    display="flex"
    alignItems="center"
    justifyContent="center">
    
      {/* Background Image or Emoji */}
      {image ?
    <Image src={image} alt={showName} w="full" h="full" objectFit="cover" /> :

    <Text fontSize="8xl" opacity={0.8}>
          {emoji}
        </Text>
    }

      {/* NEW Badge */}
      {isNew &&
    <Box
      position="absolute"
      top={-2}
      left={-2}
      bg="#FF4757"
      color="white"
      fontWeight="bold"
      fontSize="sm"
      px={3}
      py={4}
      borderRadius="full"
      transform="rotate(-15deg)"
      boxShadow="md"
      zIndex={2}>
      
          NEW
        </Box>
    }

      {/* Bottom Overlay Bar */}
      <Flex
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      p={2}
      justify="space-between"
      align="flex-end"
      bgGradient="linear(to-t, blackAlpha.700, transparent)">
      
        {isFullEpisode ?
      <HStack bg="#1DB954" px={2} py={1} borderRadius="md" spacing={1}>
            <Icon as={Star} color="white" boxSize={3} fill="white" />
            <Text color="white" fontSize="xs" fontWeight="bold">
              FULL EPISODE
            </Text>
          </HStack> :

      <Box />
      }
        <Box bg="blackAlpha.600" px={2} py={1} borderRadius="md">
          <Text color="white" fontSize="xs" fontWeight="bold">
            {duration}
          </Text>
        </Box>
      </Flex>
    </Box>
    <VStack align="center" spacing={0}>
      <Text color="#2D1050" fontSize="md" fontWeight="bold" textAlign="center">
        {showName}
      </Text>
      <Text color="#2D1050" fontSize="sm" textAlign="center">
        {episodeTitle}
      </Text>
    </VStack>
  </Box>;

const GameCard = ({
  bg,
  emoji,
  image,
  title,
  isLarge = false






}: {bg: string;emoji?: string;image?: string;title: string;isLarge?: boolean;}) =>
<Box
  w="full"
  h={
  isLarge ?
  {
    base: '200px',
    md: '100%'
  } :
  '140px'
  }
  bg={bg}
  borderRadius="2xl"
  position="relative"
  overflow="hidden"
  boxShadow="md"
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  p={4}>
  
    {image ?
  <Image
    src={image}
    alt={title}
    position="absolute"
    top={0}
    left={0}
    w="full"
    h="full"
    objectFit="cover" /> :


  <Text fontSize={isLarge ? '7xl' : '5xl'} mb={2}>
        {emoji}
      </Text>
  }
    <Text
    color="white"
    fontSize={isLarge ? '2xl' : 'lg'}
    fontWeight="bold"
    textAlign="center"
    textShadow="0 2px 4px rgba(0,0,0,0.5)"
    lineHeight="tight"
    position="relative"
    zIndex={2}>
    
      {title}
    </Text>
  </Box>;

export const BrowsePage = () => {
  const isLandscape = useBreakpointValue({
    base: false,
    md: true
  });
  return (
    <Box className="min-h-screen w-full bg-[#A2CE73] font-sans overflow-x-hidden">
      {/* Header */}
      <Box
        bgGradient="linear(to-r, #C39DC8, #D9BFE0)"
        pt={6}
        pb={4}
        px={4}
        borderBottomRadius={{
          base: '3xl',
          md: '0'
        }}
        position="relative"
        zIndex={10}
        boxShadow="sm">
        
        <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
          {/* Avatar */}
          <Box
            w={12}
            h={12}
            borderRadius="xl"
            overflow="hidden"
            bg="white"
            boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)"
            border="3px solid white">
            
            <Image
              src="/turnipMascot.png"
              alt="Turnip mascot"
              w="full"
              h="full"
              objectFit="cover" />
            
          </Box>

          {/* Right Icons */}
          <HStack spacing={3}>
            <Flex
              w={10}
              h={10}
              bg="#FF4757"
              borderRadius="xl"
              align="center"
              justify="center"
              cursor="pointer"
              boxShadow="sm">
              
              <Icon as={Download} color="white" boxSize={5} />
            </Flex>
            <Flex
              w={10}
              h={10}
              bg="#1DB954"
              borderRadius="xl"
              align="center"
              justify="center"
              cursor="pointer"
              boxShadow="sm">
              
              <Icon as={Settings} color="white" boxSize={5} />
            </Flex>
            <Flex
              w={10}
              h={10}
              bg="#4A90D9"
              borderRadius="xl"
              align="center"
              justify="center"
              cursor="pointer"
              boxShadow="sm">
              
              <Icon as={Cast} color="white" boxSize={5} />
            </Flex>
          </HStack>
        </Flex>
      </Box>

      <Box maxW="6xl" mx="auto" pb={12}>
        {/* Featured Hero Banner */}
        <Box px={4} mt={-4} position="relative" zIndex={5}>
          <Box
            w="full"
            h={{
              base: '220px',
              md: '320px'
            }}
            bgGradient="linear(to-br, #FF7E67, #FFB347)"
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            display="flex"
            alignItems="center"
            justifyContent="center">
            
            {/* Background Image */}
            <Image
              src="/fishes.jpg"
              alt="Marine Life"
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              objectFit="cover"
              opacity={0.85} />
            

            {/* Main Play Button */}
            <VStack spacing={4} zIndex={2}>
              <Flex
                w={16}
                h={16}
                bg="white"
                borderRadius="2xl"
                align="center"
                justify="center"
                boxShadow="lg"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Icon
                  as={Play}
                  color="#FF7E67"
                  boxSize={8}
                  fill="#FF7E67"
                  ml={1} />
                
              </Flex>
            </VStack>

            {/* Bottom Title Bar */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="whiteAlpha.900"
              py={3}
              px={6}
              textAlign="center"
              backdropFilter="blur(4px)">
              
              <Text color="#2D1050" fontSize="lg" fontWeight="extrabold">
                Marine Life Adventures
              </Text>
              <Text color="#2D1050" fontSize="sm" fontWeight="medium">
                Meet the Ocean Friends
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Shows Carousel */}
        <Box mt={8}>
          <Flex
            overflowX="auto"
            px={4}
            gap={6}
            pb={4}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none'
            }}>
            
            <ShowAvatar
              image="/claudia14-dolphin-203875_1280.jpg"
              name="Dolphin Discovery"
              bg="#4DD0E1" />
            
            <ShowAvatar
              image="/leeandron-whale-tail-3742307_1280_(1).jpg"
              name="Whale Tales"
              bg="#B8D8F0" />
            
            <ShowAvatar
              image="/cocoparisienne-frog-3428988_1920.jpg"
              name="Tree Frogs"
              bg="#A2CE73" />
            
            <ShowAvatar
              image="/arhnue-seahorse-1538016_1280.jpg"
              name="Seahorse Secrets"
              bg="#FFB347" />
            
            <ShowAvatar
              image="/clownfish.jpg"
              name="Clownfish Cove"
              bg="#8AB4F8" />
            
            <ShowAvatar
              image="/crab.jpg"
              name="Crabby's World"
              bg="#FF9A9E" />
            
            <ShowAvatar
              image="/fish-clipart-Fish_clip_art_1.jpg"
              name="Fishy Tales"
              bg="#D4F0C8" />
            
            <ShowAvatar
              image="/fishes.jpg"
              name="Marine Life"
              bg="#A2CE73" />
            
            <ShowAvatar
              image="/river_fishe_3.jpg"
              name="River Friends"
              bg="#B8E0F0" />
            
            <ShowAvatar emoji="☀️" name="Weather Hunters" bg="#B8E0F0" />
            <ShowAvatar emoji="🦓" name="Zoboomafoo" bg="#A78BFA" />
          </Flex>
        </Box>

        {/* Picks of the Week */}
        <Box mt={8} px={4}>
          <Text color="#2D1050" fontSize="2xl" fontWeight="extrabold" mb={4}>
            Picks of the Week
          </Text>

          {/* Featured Dolphin Card - Large */}
          <Box
            w="full"
            h={{
              base: '240px',
              md: '320px'
            }}
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            mb={6}>
            
            <Image
              src="/claudia14-dolphin-203875_1280.jpg"
              alt="Dolphin Discovery"
              w="full"
              h="full"
              objectFit="cover" />
            
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)" />
            
            {/* NEW Badge */}
            <Box
              position="absolute"
              top={3}
              left={3}
              bg="#FF4757"
              color="white"
              fontWeight="bold"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
              boxShadow="md"
              zIndex={2}>
              
              NEW
            </Box>
            {/* FULL EPISODE Badge */}
            <HStack
              position="absolute"
              bottom={16}
              left={4}
              bg="#1DB954"
              px={3}
              py={1}
              borderRadius="md"
              spacing={1}
              zIndex={2}>
              
              <Icon as={Star} color="white" boxSize={3} fill="white" />
              <Text color="white" fontSize="xs" fontWeight="bold">
                FULL EPISODE
              </Text>
            </HStack>
            {/* Duration Badge */}
            <Box
              position="absolute"
              bottom={16}
              right={4}
              bg="blackAlpha.600"
              px={3}
              py={1}
              borderRadius="md"
              zIndex={2}>
              
              <Text color="white" fontSize="sm" fontWeight="bold">
                15m
              </Text>
            </Box>
            {/* Bottom Info */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={4}
              pb={3}
              zIndex={2}>
              
              <Text color="white" fontSize="xl" fontWeight="extrabold">
                Dolphin Discovery
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm">
                Swimming with Smiles
              </Text>
            </Box>
          </Box>

          {/* Featured Whale Card - Large */}
          <Box
            w="full"
            h={{
              base: '240px',
              md: '320px'
            }}
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            mb={6}>
            
            <Image
              src="/leeandron-whale-tail-3742307_1280_(1).jpg"
              alt="Whale Tales"
              w="full"
              h="full"
              objectFit="cover" />
            
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)" />
            
            {/* FULL EPISODE Badge */}
            <HStack
              position="absolute"
              bottom={16}
              left={4}
              bg="#1DB954"
              px={3}
              py={1}
              borderRadius="md"
              spacing={1}
              zIndex={2}>
              
              <Icon as={Star} color="white" boxSize={3} fill="white" />
              <Text color="white" fontSize="xs" fontWeight="bold">
                FULL EPISODE
              </Text>
            </HStack>
            {/* Duration Badge */}
            <Box
              position="absolute"
              bottom={16}
              right={4}
              bg="blackAlpha.600"
              px={3}
              py={1}
              borderRadius="md"
              zIndex={2}>
              
              <Text color="white" fontSize="sm" fontWeight="bold">
                18m
              </Text>
            </Box>
            {/* Bottom Info */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={4}
              pb={3}
              zIndex={2}>
              
              <Text color="white" fontSize="xl" fontWeight="extrabold">
                Whale Tales
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm">
                The Great Migration
              </Text>
            </Box>
          </Box>

          {/* Featured Tree Frog Card - Large */}
          <Box
            w="full"
            h={{
              base: '240px',
              md: '320px'
            }}
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            mb={6}>
            
            <Image
              src="/cocoparisienne-frog-3428988_1920.jpg"
              alt="Tree Frog Adventures"
              w="full"
              h="full"
              objectFit="cover" />
            
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)" />
            
            {/* NEW Badge */}
            <Box
              position="absolute"
              top={3}
              left={3}
              bg="#FF4757"
              color="white"
              fontWeight="bold"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
              boxShadow="md"
              zIndex={2}>
              
              NEW
            </Box>
            {/* FULL EPISODE Badge */}
            <HStack
              position="absolute"
              bottom={16}
              left={4}
              bg="#1DB954"
              px={3}
              py={1}
              borderRadius="md"
              spacing={1}
              zIndex={2}>
              
              <Icon as={Star} color="white" boxSize={3} fill="white" />
              <Text color="white" fontSize="xs" fontWeight="bold">
                FULL EPISODE
              </Text>
            </HStack>
            {/* Duration Badge */}
            <Box
              position="absolute"
              bottom={16}
              right={4}
              bg="blackAlpha.600"
              px={3}
              py={1}
              borderRadius="md"
              zIndex={2}>
              
              <Text color="white" fontSize="sm" fontWeight="bold">
                10m
              </Text>
            </Box>
            {/* Bottom Info */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={4}
              pb={3}
              zIndex={2}>
              
              <Text color="white" fontSize="xl" fontWeight="extrabold">
                Tree Frog Adventures
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm">
                Leap into the Rainforest
              </Text>
            </Box>
          </Box>

          {/* Featured Seahorse Card - Large */}
          <Box
            w="full"
            h={{
              base: '240px',
              md: '320px'
            }}
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            mb={6}>
            
            <Image
              src="/arhnue-seahorse-1538016_1280.jpg"
              alt="Seahorse Secrets"
              w="full"
              h="full"
              objectFit="cover" />
            
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)" />
            
            {/* FULL EPISODE Badge */}
            <HStack
              position="absolute"
              bottom={16}
              left={4}
              bg="#1DB954"
              px={3}
              py={1}
              borderRadius="md"
              spacing={1}
              zIndex={2}>
              
              <Icon as={Star} color="white" boxSize={3} fill="white" />
              <Text color="white" fontSize="xs" fontWeight="bold">
                FULL EPISODE
              </Text>
            </HStack>
            {/* Duration Badge */}
            <Box
              position="absolute"
              bottom={16}
              right={4}
              bg="blackAlpha.600"
              px={3}
              py={1}
              borderRadius="md"
              zIndex={2}>
              
              <Text color="white" fontSize="sm" fontWeight="bold">
                11m
              </Text>
            </Box>
            {/* Bottom Info */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={4}
              pb={3}
              zIndex={2}>
              
              <Text color="white" fontSize="xl" fontWeight="extrabold">
                Seahorse Secrets
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm">
                Tiny Dancers of the Sea
              </Text>
            </Box>
          </Box>

          {/* Featured Science Experiments Card - Large */}
          <Box
            w="full"
            h={{
              base: '240px',
              md: '320px'
            }}
            borderRadius="3xl"
            position="relative"
            overflow="hidden"
            boxShadow="xl"
            mb={6}>
            
            <Image
              src="/sunriseforever-study-6597766_1280.jpg"
              alt="Kids Science Experiments"
              w="full"
              h="full"
              objectFit="cover" />
            
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)" />
            
            {/* NEW Badge */}
            <Box
              position="absolute"
              top={3}
              left={3}
              bg="#FF4757"
              color="white"
              fontWeight="bold"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="full"
              boxShadow="md"
              zIndex={2}>
              
              NEW
            </Box>
            {/* FULL EPISODE Badge */}
            <HStack
              position="absolute"
              bottom={16}
              left={4}
              bg="#1DB954"
              px={3}
              py={1}
              borderRadius="md"
              spacing={1}
              zIndex={2}>
              
              <Icon as={Star} color="white" boxSize={3} fill="white" />
              <Text color="white" fontSize="xs" fontWeight="bold">
                FULL EPISODE
              </Text>
            </HStack>
            {/* Duration Badge */}
            <Box
              position="absolute"
              bottom={16}
              right={4}
              bg="blackAlpha.600"
              px={3}
              py={1}
              borderRadius="md"
              zIndex={2}>
              
              <Text color="white" fontSize="sm" fontWeight="bold">
                13m
              </Text>
            </Box>
            {/* Bottom Info */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              px={4}
              pb={3}
              zIndex={2}>
              
              <Text color="white" fontSize="xl" fontWeight="extrabold">
                Kids Science Lab
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm">
                Microscope Mysteries
              </Text>
            </Box>
          </Box>

          <Flex
            overflowX="auto"
            gap={6}
            pb={4}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none'
            }}>
            
            <VideoCard
              bg="#4DD0E1"
              image="/claudia14-dolphin-203875_1280.jpg"
              showName="Dolphin Discovery"
              episodeTitle="Ocean Acrobats"
              duration="14m"
              isFullEpisode />
            
            <VideoCard
              bg="#B8D8F0"
              image="/leeandron-whale-tail-3742307_1280_(1).jpg"
              showName="Whale Tales"
              episodeTitle="Songs of the Deep"
              duration="16m"
              isFullEpisode />
            
            <VideoCard
              bg="#A2CE73"
              image="/cocoparisienne-frog-3428988_1920.jpg"
              showName="Tree Frog Adventures"
              episodeTitle="Sticky Fingers"
              duration="9m"
              isNew
              isFullEpisode />
            
            <VideoCard
              bg="#FFB347"
              image="/arhnue-seahorse-1538016_1280.jpg"
              showName="Seahorse Secrets"
              episodeTitle="Hide & Seek"
              duration="11m"
              isFullEpisode />
            
            <VideoCard
              bg="#8AB4F8"
              image="/coralReef.jpg"
              showName="Coral Reef Adventures"
              episodeTitle="The Hidden Garden"
              duration="12m"
              isFullEpisode />
            
            <VideoCard
              bg="#FF9A9E"
              image="/clownfish.jpg"
              showName="Clownfish Cove"
              episodeTitle="Finding Friends"
              duration="8m"
              isNew
              isFullEpisode />
            
            <VideoCard
              bg="#D4F0C8"
              image="/crab.jpg"
              showName="Crabby's World"
              episodeTitle="Pinch Perfect"
              duration="5m"
              isFullEpisode />
            
            <VideoCard
              bg="#A78BFA"
              emoji="🚀"
              showName="Cyberchase"
              episodeTitle="Space Adventure"
              duration="11m"
              isFullEpisode />
            
          </Flex>
        </Box>

        {/* Do the Math! Section (Games) */}
        <Box mt={8} px={4}>
          <Text color="#2D1050" fontSize="2xl" fontWeight="extrabold" mb={4}>
            Do the Math!
          </Text>
          <Grid
            templateColumns={{
              base: '1fr',
              md: '2fr 1fr'
            }}
            templateRows={{
              base: 'auto auto auto',
              md: '1fr 1fr'
            }}
            gap={4}
            h={{
              base: 'auto',
              md: '300px'
            }}>
            
            <GridItem
              rowSpan={{
                base: 1,
                md: 2
              }}
              colSpan={1}>
              
              <GameCard
                bg="#4A90D9"
                image="/coralReef.jpg"
                title="REEF EXPLORER"
                isLarge />
              
            </GridItem>
            <GridItem colSpan={1}>
              <GameCard
                bg="#FDE047"
                image="/coralreefwhite.jpg"
                title="Coral Counter" />
              
            </GridItem>
            <GridItem colSpan={1}>
              <GameCard
                bg="#A2CE73"
                image="/coralreefwhite.jpg"
                title="Coral Counter" />
              
            </GridItem>
          </Grid>
        </Box>

        {/* Explore by Topic */}
        <Box mt={8} px={4}>
          <Text color="#2D1050" fontSize="2xl" fontWeight="extrabold" mb={4}>
            Explore by Topic
          </Text>
          <Flex
            overflowX="auto"
            gap={4}
            pb={4}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none'
            }}>
            
            {/* Planets */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#8AB4F8"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Text fontSize="7xl" mb={1}>
                  🪐
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.3)">
                  
                  Planets
                </Text>
              </Box>
            </Box>

            {/* Coral Reef */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#4DD0E1"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Text fontSize="7xl" mb={1}>
                  🪸
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.3)">
                  
                  Coral Reef
                </Text>
              </Box>
            </Box>

            {/* Animals */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#FFE0A0"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Text fontSize="7xl" mb={1}>
                  🦁
                </Text>
                <Text color="#2D1050" fontSize="md" fontWeight="bold">
                  Animals
                </Text>
              </Box>
            </Box>

            {/* Whales */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#B8D8F0"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                overflow="hidden"
                position="relative"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Image
                  src="/leeandron-whale-tail-3742307_1280_(1).jpg"
                  alt="Whales"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  objectFit="cover"
                  opacity={0.6} />
                
                <Text fontSize="7xl" mb={1} position="relative" zIndex={2}>
                  🐋
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.5)"
                  position="relative"
                  zIndex={2}>
                  
                  Whales
                </Text>
              </Box>
            </Box>

            {/* Dolphins */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#4DD0E1"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                overflow="hidden"
                position="relative"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Image
                  src="/claudia14-dolphin-203875_1280.jpg"
                  alt="Dolphins"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  objectFit="cover"
                  opacity={0.6} />
                
                <Text fontSize="7xl" mb={1} position="relative" zIndex={2}>
                  🐬
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.5)"
                  position="relative"
                  zIndex={2}>
                  
                  Dolphins
                </Text>
              </Box>
            </Box>

            {/* Tree Frogs */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#A2CE73"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                overflow="hidden"
                position="relative"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Image
                  src="/cocoparisienne-frog-3428988_1920.jpg"
                  alt="Tree Frogs"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  objectFit="cover"
                  opacity={0.6} />
                
                <Text fontSize="7xl" mb={1} position="relative" zIndex={2}>
                  🐸
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.5)"
                  position="relative"
                  zIndex={2}>
                  
                  Tree Frogs
                </Text>
              </Box>
            </Box>

            {/* Seahorses */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#FFB347"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                overflow="hidden"
                position="relative"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Image
                  src="/arhnue-seahorse-1538016_1280.jpg"
                  alt="Seahorses"
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  objectFit="cover"
                  opacity={0.6} />
                
                <Text fontSize="6xl" mb={1} position="relative" zIndex={2}>
                  🦈
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.5)"
                  position="relative"
                  zIndex={2}>
                  
                  Seahorses
                </Text>
              </Box>
            </Box>

            {/* Elephants */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#D4F0C8"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Text fontSize="7xl" mb={1}>
                  🐘
                </Text>
                <Text color="#2D1050" fontSize="md" fontWeight="bold">
                  Elephants
                </Text>
              </Box>
            </Box>

            {/* Science Experiment */}
            <Box flexShrink={0}>
              <Box
                w={36}
                h={36}
                bg="#A78BFA"
                borderRadius="2xl"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)'
                }}
                transition="transform 0.2s">
                
                <Text fontSize="7xl" mb={1}>
                  🧪
                </Text>
                <Text
                  color="white"
                  fontSize="md"
                  fontWeight="bold"
                  textShadow="0 1px 3px rgba(0,0,0,0.3)">
                  
                  Science
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>);

};