import React, { useState, Component } from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  Divider,
  Icon,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  Grid,
  GridItem } from
'@chakra-ui/react';
import {
  Search,
  Users,
  Music,
  Play,
  Pause,
  ChevronLeft,
  Volume2,
  Subtitles,
  SkipBack,
  SkipForward,
  MessageCircle,
  Home as HomeIcon,
  Mail,
  Lock,
  Apple,
  Star,
  Download,
  Settings,
  Cast,
  Compass,
  PlayCircle,
  Palette } from
'lucide-react';
import { keyframes } from '@emotion/react';
// --- Animations ---
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;
// --- Reusable Components for Previews ---
const SpotifyBadge = () =>
<Box
  position="absolute"
  top={2}
  left={2}
  bg="#1DB954"
  borderRadius="full"
  w={4}
  h={4}
  display="flex"
  alignItems="center"
  justifyContent="center"
  boxShadow="sm">
  
    <Box
    w={2}
    h={2}
    border="2px solid white"
    borderRadius="full"
    borderTopColor="transparent"
    borderRightColor="transparent"
    transform="rotate(-45deg)" />
  
  </Box>;

const VideoBadge = () =>
<Box
  position="absolute"
  top={2}
  left={2}
  bg="#FF4757"
  borderRadius="full"
  w={5}
  h={5}
  display="flex"
  alignItems="center"
  justifyContent="center"
  boxShadow="sm"
  zIndex={3}>
  
    <Icon as={Play} color="white" boxSize={3} fill="white" />
  </Box>;

const ColorSwatch = ({ color, label }: {color: string;label: string;}) =>
<VStack spacing={2} align="center">
    <Box
    w={16}
    h={16}
    bg={color}
    borderRadius="lg"
    boxShadow="md"
    border="1px solid"
    borderColor="whiteAlpha.200" />
  
    <VStack spacing={0}>
      <Text color="white" fontSize="sm" fontWeight="medium" textAlign="center">
        {label}
      </Text>
      <Text color="whiteAlpha.600" fontSize="xs">
        {color}
      </Text>
    </VStack>
  </VStack>;

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
    color="white"
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
<Box flexShrink={0} w="280px">
    <Box
    w="full"
    h="160px"
    bg={bg}
    borderRadius="2xl"
    position="relative"
    overflow="hidden"
    boxShadow="md"
    mb={3}
    display="flex"
    alignItems="center"
    justifyContent="center">
    
      {image ?
    <Image src={image} alt={showName} w="full" h="full" objectFit="cover" /> :

    <Text fontSize="8xl" opacity={0.8}>
          {emoji}
        </Text>
    }
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
      <Text color="white" fontSize="md" fontWeight="bold" textAlign="center">
        {showName}
      </Text>
      <Text color="whiteAlpha.800" fontSize="sm" textAlign="center">
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
  h={isLarge ? '200px' : '140px'}
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

const ControlIcon = ({
  icon,
  label,
  isActive = false




}: {icon: any;label: string;isActive?: boolean;}) =>
<VStack spacing={1} cursor="pointer">
    <Flex
    w={12}
    h={12}
    bg={isActive ? '#73318f' : '#4A90D9'}
    borderRadius="xl"
    align="center"
    justify="center"
    boxShadow="md">
    
      <Icon as={icon} color="white" boxSize={6} />
    </Flex>
    <Text color="white" fontSize="xs" fontWeight="bold" textAlign="center">
      {label}
    </Text>
  </VStack>;

// --- Main Design System Component ---
export const DesignSystem = () => {
  // State for Typography
  const [headingFont, setHeadingFont] = useState('sans-serif');
  const [bodyFont, setBodyFont] = useState('sans-serif');
  // State for Icon Card Builder
  const [iconCardEmoji, setIconCardEmoji] = useState('🐋');
  const [iconCardLabel, setIconCardLabel] = useState('Whales');
  const [iconCardBg, setIconCardBg] = useState('#B8D8F0');
  const [iconCardCircleBg, setIconCardCircleBg] = useState('#4A90D9');
  // State for Feature Card Builder
  const [featureCardTitle, setFeatureCardTitle] = useState('Road Trip Playlist');
  const [featureCardSubtitle, setFeatureCardSubtitle] =
  useState('Available offline');
  const [featureCardEmoji, setFeatureCardEmoji] = useState('🚗');
  const [featureCardBg, setFeatureCardBg] = useState('#FFE0A0');
  const SectionHeader = ({ title, desc }: {title: string;desc?: string;}) =>
  <Box mb={6}>
      <Text color="white" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      {desc &&
    <Text color="whiteAlpha.700" fontSize="md" mt={1}>
          {desc}
        </Text>
    }
    </Box>;

  const ComponentBox = ({
    title,
    props,
    children




  }: {title: string;props?: string;children: React.ReactNode;}) =>
  <Box bg="whiteAlpha.50" p={6} borderRadius="xl">
      <Text color="whiteAlpha.800" fontSize="sm" mb={4} fontWeight="bold">
        {title}
      </Text>
      <Box mb={4}>{children}</Box>
      {props &&
    <Text color="whiteAlpha.500" fontSize="xs" fontFamily="mono">
          Props: {props}
        </Text>
    }
    </Box>;

  return (
    <Box minH="screen" w="full" bg="#1a1a2e" py={12} px={4} overflowY="auto">
      <Box maxW="5xl" mx="auto">
        <VStack align="stretch" spacing={16}>
          {/* Header */}
          <Box>
            <Text color="white" fontSize="4xl" fontWeight="bold" mb={2}>
              Design System
            </Text>
            <Text color="whiteAlpha.700" fontSize="lg">
              Interactive component library and design tokens for the Spotify
              Kids clone.
            </Text>
          </Box>

          {/* 1. Color Palette */}
          <Box>
            <SectionHeader
              title="1. Color Palette"
              desc="Core brand colors and card backgrounds." />
            
            <VStack align="stretch" spacing={8}>
              <Box>
                <Text
                  color="whiteAlpha.800"
                  fontSize="md"
                  mb={4}
                  fontWeight="medium">
                  
                  Backgrounds & Brand
                </Text>
                <SimpleGrid
                  columns={{
                    base: 3,
                    md: 6
                  }}
                  spacing={6}>
                  
                  <ColorSwatch color="#A2CE73" label="Main Green" />
                  <ColorSwatch color="#ab73d1" label="Page Purple" />
                  <ColorSwatch color="#73318f" label="Dark Purple" />
                  <ColorSwatch color="#C39DC8" label="Header Purple" />
                  <ColorSwatch color="#FF4757" label="Red Accent" />
                  <ColorSwatch color="#1a1a2e" label="Dark Bg" />
                  <ColorSwatch color="#1DB954" label="Spotify Green" />
                  <ColorSwatch color="#C600C6" label="Login Magenta" />
                  <ColorSwatch color="#FAF84D" label="Login Yellow" />
                </SimpleGrid>
              </Box>

              <Box>
                <Text
                  color="whiteAlpha.800"
                  fontSize="md"
                  mb={4}
                  fontWeight="medium">
                  
                  Card Backgrounds
                </Text>
                <SimpleGrid
                  columns={{
                    base: 3,
                    md: 6
                  }}
                  spacing={6}>
                  
                  <ColorSwatch color="#B8D8F0" label="Whales" />
                  <ColorSwatch color="#D4F0C8" label="Butterfly" />
                  <ColorSwatch color="#F5E0C0" label="Cheetah" />
                  <ColorSwatch color="#E0F4E8" label="Science" />
                  <ColorSwatch color="#FFE0A0" label="Road Trip" />
                  <ColorSwatch color="#FFD166" label="Recent" />
                  <ColorSwatch color="#8AB4F8" label="Rec 1" />
                  <ColorSwatch color="#B8E0F0" label="Rec 2" />
                  <ColorSwatch color="#FFB347" label="Seahorse" />
                  <ColorSwatch color="#4DD0E1" label="Dolphin" />
                  <ColorSwatch color="#FF9A9E" label="Crab" />
                </SimpleGrid>
              </Box>

              <Box>
                <Text
                  color="whiteAlpha.800"
                  fontSize="md"
                  mb={4}
                  fontWeight="medium">
                  
                  Accents & Circles
                </Text>
                <SimpleGrid
                  columns={{
                    base: 3,
                    md: 6
                  }}
                  spacing={6}>
                  
                  <ColorSwatch color="#4A90D9" label="Whales Inner" />
                  <ColorSwatch color="#A78BFA" label="Butterfly Inner" />
                  <ColorSwatch color="#F59E0B" label="Cheetah Inner" />
                  <ColorSwatch color="#34D399" label="Science Inner" />
                </SimpleGrid>
              </Box>

              <Box>
                <Text
                  color="whiteAlpha.800"
                  fontSize="md"
                  mb={4}
                  fontWeight="medium">
                  
                  Gradients
                </Text>
                <HStack spacing={6}>
                  <VStack spacing={2} align="center">
                    <Box
                      w={32}
                      h={16}
                      bgGradient="linear(to-br, #C600C6, #FAF84D)"
                      borderRadius="lg"
                      boxShadow="md"
                      border="1px solid"
                      borderColor="whiteAlpha.200" />
                    
                    <VStack spacing={0}>
                      <Text
                        color="white"
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center">
                        
                        Login Gradient
                      </Text>
                      <Text color="whiteAlpha.600" fontSize="xs">
                        #C600C6 → #FAF84D
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
              </Box>
            </VStack>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 2. Typography Scale */}
          <Box>
            <SectionHeader title="2. Typography Scale" />
            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={8}
              mb={8}>
              
              <FormControl>
                <FormLabel color="whiteAlpha.800">
                  Heading Font Family
                </FormLabel>
                <Input
                  value={headingFont}
                  onChange={(e) => setHeadingFont(e.target.value)}
                  color="white"
                  bg="whiteAlpha.100"
                  border="none"
                  _focus={{
                    ring: 2,
                    ringColor: '#1DB954'
                  }} />
                
              </FormControl>
              <FormControl>
                <FormLabel color="whiteAlpha.800">Body Font Family</FormLabel>
                <Input
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  color="white"
                  bg="whiteAlpha.100"
                  border="none"
                  _focus={{
                    ring: 2,
                    ringColor: '#1DB954'
                  }} />
                
              </FormControl>
            </SimpleGrid>

            <VStack
              align="stretch"
              spacing={6}
              bg="whiteAlpha.50"
              p={6}
              borderRadius="xl">
              
              <Flex
                justify="space-between"
                align="center"
                borderBottom="1px solid"
                borderColor="whiteAlpha.200"
                pb={4}>
                
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    Section Heading
                  </Text>
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="bold"
                    fontFamily={headingFont}>
                    
                    Recently played
                  </Text>
                </Box>
                <Text color="whiteAlpha.500" fontSize="sm" fontFamily="mono">
                  xl / bold / white
                </Text>
              </Flex>
              <Flex
                justify="space-between"
                align="center"
                borderBottom="1px solid"
                borderColor="whiteAlpha.200"
                pb={4}>
                
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    Card Label
                  </Text>
                  <Text
                    color="white"
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily={headingFont}>
                    
                    Whales
                  </Text>
                </Box>
                <Text color="whiteAlpha.500" fontSize="sm" fontFamily="mono">
                  lg / bold / white
                </Text>
              </Flex>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text color="whiteAlpha.600" fontSize="sm" mb={1}>
                    Feature Card Title
                  </Text>
                  <Box
                    bg="#FFE0A0"
                    p={2}
                    borderRadius="md"
                    display="inline-block">
                    
                    <Text
                      color="#2D1050"
                      fontSize="xl"
                      fontWeight="bold"
                      fontFamily={headingFont}>
                      
                      Road Trip Playlist
                    </Text>
                  </Box>
                </Box>
                <Text color="whiteAlpha.500" fontSize="sm" fontFamily="mono">
                  xl / bold / #2D1050
                </Text>
              </Flex>
            </VStack>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 3. Badges */}
          <Box>
            <SectionHeader
              title="3. Badges"
              desc="Small indicators used on cards and avatars." />
            
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 3
              }}
              spacing={6}>
              
              <ComponentBox
                title="Spotify Badge"
                props="None (fixed size w=4, h=4)">
                
                <Box
                  position="relative"
                  w={16}
                  h={16}
                  bg="whiteAlpha.200"
                  borderRadius="lg">
                  
                  <SpotifyBadge />
                </Box>
              </ComponentBox>

              <ComponentBox
                title="Video Badge"
                props="None (fixed size w=5, h=5)">
                
                <Box
                  position="relative"
                  w={16}
                  h={16}
                  bg="whiteAlpha.200"
                  borderRadius="lg">
                  
                  <VideoBadge />
                </Box>
              </ComponentBox>

              <ComponentBox
                title="NEW Badge"
                props="Text only, positioned absolute">
                
                <Box
                  position="relative"
                  w={24}
                  h={16}
                  bg="whiteAlpha.200"
                  borderRadius="lg">
                  
                  <Box
                    position="absolute"
                    top={2}
                    left={2}
                    bg="#FF4757"
                    color="white"
                    fontWeight="bold"
                    fontSize="sm"
                    px={3}
                    py={4}
                    borderRadius="full"
                    transform="rotate(-15deg)"
                    boxShadow="md">
                    
                    NEW
                  </Box>
                </Box>
              </ComponentBox>

              <ComponentBox
                title="FULL EPISODE Badge"
                props="HStack with Star icon">
                
                <HStack
                  bg="#1DB954"
                  px={2}
                  py={1}
                  borderRadius="md"
                  spacing={1}
                  display="inline-flex">
                  
                  <Icon as={Star} color="white" boxSize={3} fill="white" />
                  <Text color="white" fontSize="xs" fontWeight="bold">
                    FULL EPISODE
                  </Text>
                </HStack>
              </ComponentBox>

              <ComponentBox
                title="Duration Badge"
                props="Box with blackAlpha.600">
                
                <Box
                  bg="blackAlpha.600"
                  px={2}
                  py={1}
                  borderRadius="md"
                  display="inline-block">
                  
                  <Text color="white" fontSize="xs" fontWeight="bold">
                    12m
                  </Text>
                </Box>
              </ComponentBox>
            </SimpleGrid>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 4. Buttons & Icon Buttons */}
          <Box>
            <SectionHeader
              title="4. Buttons & Icon Buttons"
              desc="Interactive elements for navigation and actions." />
            
            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={6}>
              
              <ComponentBox
                title="Primary Button (Login)"
                props="size='lg', bg='#73318f', borderRadius='xl'">
                
                <Button
                  w="full"
                  size="lg"
                  bg="#73318f"
                  color="white"
                  borderRadius="xl"
                  fontWeight="bold"
                  _hover={{
                    bg: '#5a2572'
                  }}>
                  
                  Log In
                </Button>
              </ComponentBox>

              <ComponentBox
                title="Apple Sign-In Button"
                props="size='lg', bg='black', leftIcon={<Apple />}">
                
                <Button
                  w="full"
                  size="lg"
                  bg="black"
                  color="white"
                  borderRadius="xl"
                  fontWeight="bold"
                  leftIcon={<Icon as={Apple} boxSize={5} />}>
                  
                  Sign in with Apple
                </Button>
              </ComponentBox>

              <ComponentBox
                title="Colored Icon Buttons (Header)"
                props="w=10, h=10, borderRadius='xl', bg={color}">
                
                <HStack spacing={4}>
                  <Flex
                    w={10}
                    h={10}
                    bg="#FF4757"
                    borderRadius="xl"
                    align="center"
                    justify="center"
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
                    boxShadow="sm">
                    
                    <Icon as={Cast} color="white" boxSize={5} />
                  </Flex>
                </HStack>
              </ComponentBox>

              <ComponentBox
                title="Back Button (Player)"
                props="w=12, h=12, bg='#FF4757', borderRadius='xl'">
                
                <Flex
                  w={12}
                  h={12}
                  bg="#FF4757"
                  borderRadius="xl"
                  align="center"
                  justify="center"
                  boxShadow="lg">
                  
                  <Icon as={ChevronLeft} color="white" boxSize={7} />
                </Flex>
              </ComponentBox>
            </SimpleGrid>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 5. Form Elements */}
          <Box>
            <SectionHeader
              title="5. Form Elements"
              desc="Inputs and dividers used in the Login screen." />
            
            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={6}>
              
              <ComponentBox
                title="Input with Icon"
                props="InputGroup, InputLeftElement, focusBorderColor='#ab73d1'">
                
                <VStack spacing={4}>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none" h="full">
                      <Icon as={Mail} color="#ab73d1" boxSize={5} />
                    </InputLeftElement>
                    <Input
                      placeholder="Email address"
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="#E2E8F0"
                      bg="white"
                      color="black" />
                    
                  </InputGroup>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none" h="full">
                      <Icon as={Lock} color="#ab73d1" boxSize={5} />
                    </InputLeftElement>
                    <Input
                      placeholder="Password"
                      type="password"
                      borderRadius="xl"
                      border="2px solid"
                      borderColor="#E2E8F0"
                      bg="white"
                      color="black" />
                    
                  </InputGroup>
                </VStack>
              </ComponentBox>

              <ComponentBox
                title="Divider with Text"
                props="HStack, Divider, Text">
                
                <Box bg="white" p={4} borderRadius="xl">
                  <HStack w="full" spacing={4}>
                    <Divider borderColor="gray.300" />
                    <Text fontSize="sm" color="gray.400" whiteSpace="nowrap">
                      or
                    </Text>
                    <Divider borderColor="gray.300" />
                  </HStack>
                </Box>
              </ComponentBox>
            </SimpleGrid>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 6. Avatars & Thumbnails */}
          <Box>
            <SectionHeader
              title="6. Avatars & Thumbnails"
              desc="Circular and rounded square elements for shows and topics." />
            
            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={6}>
              
              <ComponentBox title="ShowAvatar" props="emoji, image, name, bg">
                <HStack spacing={6} align="flex-start">
                  <ShowAvatar
                    image="/clownfish.jpg"
                    name="Clownfish Cove"
                    bg="#8AB4F8" />
                  
                  <ShowAvatar emoji="☀️" name="Weather Hunters" bg="#B8E0F0" />
                </HStack>
              </ComponentBox>

              <ComponentBox
                title="TopicCard"
                props="w=36, h=36, borderRadius='2xl', fontSize='7xl'">
                
                <HStack spacing={6}>
                  <Box
                    w={36}
                    h={36}
                    bg="#8AB4F8"
                    borderRadius="2xl"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="md">
                    
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
                  <Box
                    w={36}
                    h={36}
                    bg="#FFE0A0"
                    borderRadius="2xl"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="md">
                    
                    <Text fontSize="7xl" mb={1}>
                      🦁
                    </Text>
                    <Text color="#2D1050" fontSize="md" fontWeight="bold">
                      Animals
                    </Text>
                  </Box>
                </HStack>
              </ComponentBox>

              <ComponentBox
                title="Photo TopicCard"
                props="image, emoji, label, bg">
                
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
                  overflow="hidden"
                  position="relative">
                  
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
              </ComponentBox>
            </SimpleGrid>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 7. Cards & Banners */}
          <Box>
            <SectionHeader
              title="7. Cards & Banners"
              desc="Main content containers used across Browse and Home." />
            
            <VStack spacing={8} align="stretch">
              <SimpleGrid
                columns={{
                  base: 1,
                  md: 2
                }}
                spacing={6}>
                
                <ComponentBox
                  title="VideoCard"
                  props="bg, emoji, image, showName, episodeTitle, duration, isNew, isFullEpisode">
                  
                  <VideoCard
                    bg="#8AB4F8"
                    image="/coralReef.jpg"
                    showName="Coral Reef Adventures"
                    episodeTitle="The Hidden Garden"
                    duration="12m"
                    isFullEpisode
                    isNew />
                  
                </ComponentBox>

                <ComponentBox
                  title="GameCard"
                  props="bg, emoji, image, title, isLarge">
                  
                  <VStack spacing={4}>
                    <GameCard
                      bg="#4A90D9"
                      image="/coralReef.jpg"
                      title="REEF EXPLORER"
                      isLarge />
                    
                    <GameCard bg="#FDE047" title="Coral Counter" />
                  </VStack>
                </ComponentBox>
              </SimpleGrid>

              <ComponentBox
                title="Hero Banner"
                props="w='full', h='220px', borderRadius='3xl', bgGradient">
                
                <Box
                  w="full"
                  h="220px"
                  bgGradient="linear(to-br, #FF7E67, #FFB347)"
                  borderRadius="3xl"
                  position="relative"
                  overflow="hidden"
                  boxShadow="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  
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
                  
                  <VStack spacing={4} zIndex={2}>
                    <Flex
                      w={16}
                      h={16}
                      bg="white"
                      borderRadius="2xl"
                      align="center"
                      justify="center"
                      boxShadow="lg">
                      
                      <Icon
                        as={Play}
                        color="#FF7E67"
                        boxSize={8}
                        fill="#FF7E67"
                        ml={1} />
                      
                    </Flex>
                  </VStack>
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
              </ComponentBox>

              {/* Interactive Builders */}
              <ComponentBox
                title="Interactive Icon Card Builder"
                props="Used in Home page 'Recently Played'">
                
                <Flex
                  direction={{
                    base: 'column',
                    md: 'row'
                  }}
                  gap={8}
                  align={{
                    base: 'center',
                    md: 'flex-start'
                  }}>
                  
                  <Box flexShrink={0}>
                    <Box
                      w={40}
                      h={40}
                      bg={iconCardBg}
                      borderRadius="2xl"
                      position="relative"
                      mb={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden"
                      boxShadow="xl">
                      
                      <SpotifyBadge />
                      <Box
                        w={32}
                        h={32}
                        bg={iconCardCircleBg}
                        borderRadius="2xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        
                        <Text fontSize="7xl">{iconCardEmoji}</Text>
                      </Box>
                    </Box>
                    <Text
                      color="white"
                      fontSize="lg"
                      fontWeight="bold"
                      textAlign="center"
                      fontFamily={headingFont}>
                      
                      {iconCardLabel}
                    </Text>
                  </Box>
                  <SimpleGrid columns={2} spacing={4} flex={1}>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Emoji</FormLabel>
                      <Input
                        value={iconCardEmoji}
                        onChange={(e) => setIconCardEmoji(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Label</FormLabel>
                      <Input
                        value={iconCardLabel}
                        onChange={(e) => setIconCardLabel(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Card Bg</FormLabel>
                      <Input
                        value={iconCardBg}
                        onChange={(e) => setIconCardBg(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Inner Bg</FormLabel>
                      <Input
                        value={iconCardCircleBg}
                        onChange={(e) => setIconCardCircleBg(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                  </SimpleGrid>
                </Flex>
              </ComponentBox>

              <ComponentBox
                title="Interactive Feature Card Builder"
                props="Used in Home page 'Your Stuff'">
                
                <Flex
                  direction={{
                    base: 'column',
                    md: 'row'
                  }}
                  gap={8}
                  align={{
                    base: 'center',
                    md: 'flex-start'
                  }}>
                  
                  <Box
                    flexShrink={0}
                    w={{
                      base: 'full',
                      md: '300px'
                    }}>
                    
                    <Box
                      bg={featureCardBg}
                      borderRadius="2xl"
                      p={5}
                      position="relative"
                      overflow="hidden"
                      minH="120px"
                      boxShadow="xl">
                      
                      <VStack
                        align="flex-start"
                        spacing={1}
                        position="relative"
                        zIndex={2}
                        w="60%">
                        
                        <Text
                          color="#2D1050"
                          fontSize="xl"
                          fontWeight="bold"
                          fontFamily={headingFont}>
                          
                          {featureCardTitle}
                        </Text>
                        <Text
                          color="#2D1050"
                          fontSize="sm"
                          fontFamily={bodyFont}>
                          
                          {featureCardSubtitle}
                        </Text>
                      </VStack>
                      <Box
                        position="absolute"
                        right={-2}
                        bottom={-4}
                        fontSize="7xl"
                        transform="rotate(-10deg)">
                        
                        <Box position="relative">
                          {featureCardEmoji}
                          <Box
                            position="absolute"
                            top={-2}
                            right={8}
                            fontSize="xl">
                            
                            🎶
                          </Box>
                          <Box
                            position="absolute"
                            top={2}
                            left={0}
                            fontSize="2xl">
                            
                            🛣️
                          </Box>
                          <Box
                            position="absolute"
                            bottom={4}
                            left={-4}
                            fontSize="lg">
                            
                            ☀️
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <SimpleGrid columns={2} spacing={4} flex={1}>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Title</FormLabel>
                      <Input
                        value={featureCardTitle}
                        onChange={(e) => setFeatureCardTitle(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Subtitle</FormLabel>
                      <Input
                        value={featureCardSubtitle}
                        onChange={(e) => setFeatureCardSubtitle(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Emoji</FormLabel>
                      <Input
                        value={featureCardEmoji}
                        onChange={(e) => setFeatureCardEmoji(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                    <FormControl>
                      <FormLabel color="whiteAlpha.800">Bg Color</FormLabel>
                      <Input
                        value={featureCardBg}
                        onChange={(e) => setFeatureCardBg(e.target.value)}
                        color="white"
                        bg="whiteAlpha.100"
                        border="none" />
                      
                    </FormControl>
                  </SimpleGrid>
                </Flex>
              </ComponentBox>
            </VStack>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 8. Player Controls */}
          <Box>
            <SectionHeader
              title="8. Player Controls"
              desc="Large, kid-friendly controls from the Video Player." />
            
            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={6}
              mb={6}>
              
              <ComponentBox
                title="Play/Pause Control"
                props="w=140-280px, bg='#A2CE73', borderRadius='2xl'">
                
                <VStack spacing={3}>
                  <Flex
                    w="180px"
                    h="150px"
                    bg="#A2CE73"
                    borderRadius="2xl"
                    align="center"
                    justify="center"
                    boxShadow="xl">
                    
                    <Icon
                      as={Play}
                      color="white"
                      boxSize={16}
                      fill="white"
                      ml={1} />
                    
                  </Flex>
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="extrabold"
                    textShadow="0 2px 4px rgba(0,0,0,0.5)">
                    
                    PLAY
                  </Text>
                </VStack>
              </ComponentBox>

              <ComponentBox
                title="Go Home Control"
                props="w=140-280px, bg='#FF4757', borderRadius='2xl'">
                
                <VStack spacing={3}>
                  <Flex
                    w="180px"
                    h="150px"
                    bg="#FF4757"
                    borderRadius="2xl"
                    align="center"
                    justify="center"
                    boxShadow="xl">
                    
                    <Icon as={HomeIcon} color="white" boxSize={16} />
                  </Flex>
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="extrabold"
                    textShadow="0 2px 4px rgba(0,0,0,0.5)">
                    
                    GO HOME
                  </Text>
                </VStack>
              </ComponentBox>
            </SimpleGrid>

            <ComponentBox
              title="Control Toolbar & Progress Bar"
              props="HStack with ControlIcon components">
              
              <VStack
                align="stretch"
                spacing={6}
                bg="#1a1a2e"
                p={4}
                borderRadius="xl">
                
                <Box>
                  <Box
                    w="full"
                    h={2}
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    overflow="hidden">
                    
                    <Box h="full" w="35%" bg="#A2CE73" borderRadius="full" />
                  </Box>
                  <Flex justify="space-between" mt={1}>
                    <Text color="whiteAlpha.600" fontSize="xs">
                      4:12
                    </Text>
                    <Text color="whiteAlpha.600" fontSize="xs">
                      12:00
                    </Text>
                  </Flex>
                </Box>
                <Box bg="#A2CE73" px={4} py={4} borderRadius="2xl">
                  <HStack justify="center" spacing={8}>
                    <ControlIcon icon={Volume2} label="SOUND" isActive />
                    <ControlIcon icon={Subtitles} label="CAPTIONS" />
                    <ControlIcon icon={SkipBack} label="REWIND" />
                    <ControlIcon icon={SkipForward} label="SKIP" />
                    <ControlIcon icon={MessageCircle} label="DIALOG" />
                  </HStack>
                </Box>
              </VStack>
            </ComponentBox>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 9. Splash & Loading */}
          <Box>
            <SectionHeader
              title="9. Splash & Loading"
              desc="Animated mascot display used on app launch." />
            
            <ComponentBox
              title="Mascot Display"
              props="animation={fadeIn}, animation={pulse}">
              
              <Flex
                w="full"
                h="400px"
                bg="#A2CE73"
                borderRadius="xl"
                align="center"
                justify="center">
                
                <Flex
                  w="260px"
                  h="260px"
                  bg="rgba(0,0,0,0.08)"
                  borderRadius="3xl"
                  align="center"
                  justify="center"
                  animation={`${fadeIn} 0.8s ease-out`}>
                  
                  <Image
                    src="/turnipMascot.png"
                    alt="Turnip mascot"
                    w="200px"
                    h="200px"
                    objectFit="contain"
                    animation={`${pulse} 2.5s ease-in-out infinite`} />
                  
                </Flex>
              </Flex>
            </ComponentBox>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 10. Layout & Navigation */}
          <Box>
            <SectionHeader
              title="10. Layout & Navigation"
              desc="iPad landscape targets and global navigation." />
            
            <VStack spacing={8} align="stretch">
              <ComponentBox
                title="iPad Landscape Targets"
                props="20pt safe area on all edges, 40pt bottom for home indicator">
                
                <HStack spacing={8} align="flex-end">
                  <VStack spacing={2}>
                    <Box
                      w="256px"
                      h="192px"
                      border="2px dashed"
                      borderColor="whiteAlpha.400"
                      borderRadius="md"
                      bg="whiteAlpha.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center">
                      
                      <Text color="whiteAlpha.600" fontSize="sm">
                        1024 × 768pt
                      </Text>
                    </Box>
                    <Text color="white" fontSize="sm" fontWeight="bold">
                      Standard iPad
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Box
                      w="341px"
                      h="256px"
                      border="2px dashed"
                      borderColor="whiteAlpha.400"
                      borderRadius="md"
                      bg="whiteAlpha.50"
                      display="flex"
                      alignItems="center"
                      justifyContent="center">
                      
                      <Text color="whiteAlpha.600" fontSize="sm">
                        1366 × 1024pt
                      </Text>
                    </Box>
                    <Text color="white" fontSize="sm" fontWeight="bold">
                      iPad Pro 13"
                    </Text>
                  </VStack>
                </HStack>
              </ComponentBox>

              <ComponentBox
                title="Nav Rail"
                props="w=100px, bg=#1a1a2e, icons from lucide-react">
                
                <Flex
                  w="100px"
                  h="400px"
                  bg="#1a1a2e"
                  direction="column"
                  align="center"
                  pt="20px"
                  pb="40px"
                  borderRight="1px solid"
                  borderColor="whiteAlpha.200"
                  borderRadius="xl">
                  
                  <Box
                    w={12}
                    h={12}
                    borderRadius="xl"
                    overflow="hidden"
                    bg="white"
                    mb={8}
                    boxShadow="md"
                    flexShrink={0}>
                    
                    <Image
                      src="/turnipMascot.png"
                      alt="Mascot"
                      w="full"
                      h="full"
                      objectFit="cover" />
                    
                  </Box>
                  <VStack spacing={2} w="full" px={2} flex={1}>
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      w="full"
                      py={3}
                      px={2}
                      borderRadius="xl"
                      bg="whiteAlpha.200"
                      gap={1}>
                      
                      <Icon as={HomeIcon} color="white" boxSize={6} />
                      <Text color="white" fontSize="xs" fontWeight="bold">
                        Home
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      w="full"
                      py={3}
                      px={2}
                      borderRadius="xl"
                      bg="transparent"
                      gap={1}>
                      
                      <Icon as={Compass} color="white" boxSize={6} />
                      <Text color="white" fontSize="xs" fontWeight="medium">
                        Browse
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      w="full"
                      py={3}
                      px={2}
                      borderRadius="xl"
                      bg="transparent"
                      gap={1}>
                      
                      <Icon as={PlayCircle} color="white" boxSize={6} />
                      <Text color="white" fontSize="xs" fontWeight="medium">
                        Player
                      </Text>
                    </Flex>
                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      w="full"
                      py={3}
                      px={2}
                      borderRadius="xl"
                      bg="transparent"
                      gap={1}>
                      
                      <Icon as={Palette} color="white" boxSize={6} />
                      <Text color="white" fontSize="xs" fontWeight="medium">
                        Design
                      </Text>
                    </Flex>
                  </VStack>
                </Flex>
              </ComponentBox>
            </VStack>
          </Box>

          <Divider borderColor="whiteAlpha.200" />

          {/* 11. Featured Cards */}
          <Box>
            <SectionHeader
              title="11. Featured Cards"
              desc="Large, full-width content cards used in Browse." />
            
            <ComponentBox
              title="Featured Card"
              props="image, title, subtitle, duration, isNew, isFullEpisode">
              
              <Box
                w="full"
                maxW="800px"
                h="240px"
                borderRadius="3xl"
                position="relative"
                overflow="hidden"
                boxShadow="xl">
                
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
            </ComponentBox>
          </Box>
        </VStack>
      </Box>
    </Box>);

};