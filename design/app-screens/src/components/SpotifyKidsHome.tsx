import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Image,
  SimpleGrid } from
'@chakra-ui/react';
import { Search, Users, Music, Play } from 'lucide-react';
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

const ContentCard = ({
  bg,
  innerBg,
  emoji,
  label





}: {bg: string;innerBg: string;emoji: string;label: string;}) =>
<Box flexShrink={0}>
    <Box
    w={44}
    h={44}
    bg={bg}
    borderRadius="2xl"
    position="relative"
    mb={2}
    display="flex"
    alignItems="center"
    justifyContent="center"
    overflow="hidden">
    
      <VideoBadge />
      <Box
      w={36}
      h={36}
      bg={innerBg}
      borderRadius="2xl"
      display="flex"
      alignItems="center"
      justifyContent="center">
      
        <Text fontSize="7xl">{emoji}</Text>
      </Box>
    </Box>
    <Text color="white" fontSize="lg" fontWeight="bold">
      {label}
    </Text>
  </Box>;

export const SpotifyKidsHome = () => {
  return (
    <Box w="full" bg="#ab73d1" minH="100vh">
      {/* Header Area */}
      <Box bg="#73318f" pt={6} pb={4} px={8}>
        <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
          <HStack spacing={4}>
            <Box
              w={12}
              h={12}
              borderRadius="xl"
              overflow="hidden"
              bg="white"
              boxShadow="0 2px 10px rgba(29, 185, 84, 0.4)">
              
              <Image
                src="/turnipMascot.png"
                alt="Turnip mascot"
                w="full"
                h="full"
                objectFit="cover" />
              
            </Box>
            <Text color="white" fontSize="2xl" fontWeight="bold">
              Home
            </Text>
          </HStack>

          <Flex
            w={12}
            h={12}
            bg="whiteAlpha.200"
            borderRadius="xl"
            align="center"
            justify="center"
            cursor="pointer"
            _hover={{
              bg: 'whiteAlpha.300'
            }}
            transition="background 0.2s">
            
            <Icon as={Search} color="white" boxSize={6} />
          </Flex>
        </Flex>
      </Box>

      <Box maxW="7xl" mx="auto" px={8} py={8}>
        {/* Recently Played Section */}
        <Box mb={10}>
          <Text color="white" fontSize="2xl" fontWeight="bold" mb={6}>
            Recently played
          </Text>
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
            
            <ContentCard
              bg="#B8D8F0"
              innerBg="#4A90D9"
              emoji="🐋"
              label="Whales" />
            
            <ContentCard
              bg="#D4F0C8"
              innerBg="#A78BFA"
              emoji="🦋"
              label="Butterflies" />
            
            <ContentCard
              bg="#F5E0C0"
              innerBg="#F59E0B"
              emoji="🐆"
              label="Cheetah" />
            
            <ContentCard
              bg="#E0F4E8"
              innerBg="#34D399"
              emoji="🧪"
              label="Science Lab" />
            
            <ContentCard
              bg="#FFD166"
              innerBg="#FF7E67"
              emoji="🎵"
              label="Music Time" />
            
          </Flex>
        </Box>

        {/* Your Stuff + Recommended - Side by Side */}
        <Flex gap={8} mb={10} direction="row">
          {/* Your Stuff */}
          <Box flex={1}>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={6}>
              Your stuff
            </Text>
            <VStack spacing={4} align="stretch">
              <Box
                bg="#FFE0A0"
                borderRadius="2xl"
                p={6}
                position="relative"
                overflow="hidden"
                minH="140px">
                
                <VStack
                  align="flex-start"
                  spacing={1}
                  position="relative"
                  zIndex={2}
                  w="60%">
                  
                  <Text color="#2D1050" fontSize="2xl" fontWeight="bold">
                    Road Trip Playlist
                  </Text>
                  <Text color="#2D1050" fontSize="md">
                    Available offline
                  </Text>
                </VStack>
                <Box
                  position="absolute"
                  right={-2}
                  bottom={-4}
                  fontSize="8xl"
                  transform="rotate(-10deg)">
                  
                  <Box position="relative">
                    🚗
                    <Box position="absolute" top={-2} right={8} fontSize="xl">
                      🎶
                    </Box>
                    <Box position="absolute" top={2} left={0} fontSize="2xl">
                      🛣️
                    </Box>
                    <Box position="absolute" bottom={4} left={-4} fontSize="lg">
                      ☀️
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                bgGradient="linear(to-r, #5A2D82, #4A1A6B)"
                borderRadius="2xl"
                p={6}
                position="relative"
                overflow="hidden"
                minH="140px"
                display="flex"
                alignItems="center">
                
                <HStack spacing={3} position="relative" zIndex={2}>
                  <Icon as={Users} color="white" boxSize={7} />
                  <Text color="white" fontSize="2xl" fontWeight="bold">
                    Shared with you
                  </Text>
                </HStack>
                <Box
                  position="absolute"
                  right={-4}
                  top={-8}
                  transform="rotate(15deg)"
                  opacity={0.8}>
                  
                  <Box
                    w={36}
                    h={44}
                    bg="#4A1A6B"
                    borderRadius="xl"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="lg">
                    
                    <Icon as={Music} color="whiteAlpha.400" boxSize={20} />
                  </Box>
                </Box>
              </Box>
            </VStack>
          </Box>

          {/* Recommended */}
          <Box flex={1}>
            <Text color="white" fontSize="2xl" fontWeight="bold" mb={6}>
              Recommended for you
            </Text>
            <SimpleGrid columns={2} spacing={4}>
              <Box
                h="180px"
                bg="#8AB4F8"
                borderRadius="2xl"
                position="relative"
                overflow="hidden">
                
                <VideoBadge />
                <Box
                  position="absolute"
                  bottom={-4}
                  left={4}
                  w={24}
                  h={24}
                  bg="#1DB954"
                  borderRadius="2xl"
                  opacity={0.9} />
                
                <Box
                  position="absolute"
                  top={4}
                  right={4}
                  w={12}
                  h={12}
                  bg="#FDE047"
                  borderRadius="xl" />
                
                <Box
                  position="absolute"
                  top={8}
                  left={8}
                  w={16}
                  h={8}
                  bg="white"
                  borderRadius="xl"
                  opacity={0.8} />
                
              </Box>

              <Box
                h="180px"
                bg="#B8E0F0"
                borderRadius="2xl"
                position="relative"
                overflow="hidden">
                
                <VideoBadge />
                <Box
                  position="absolute"
                  bottom={-8}
                  right={2}
                  w={24}
                  h={24}
                  bg="#3B82F6"
                  borderRadius="2xl"
                  border="4px solid white" />
                
                <HStack
                  position="absolute"
                  top={8}
                  left={6}
                  spacing={1}
                  transform="rotate(-20deg)">
                  
                  <Box w={6} h={6} bg="#F472B6" borderRadius="lg" />
                  <Box w={6} h={6} bg="#4ADE80" borderRadius="lg" />
                  <Box w={6} h={6} bg="#A78BFA" borderRadius="lg" />
                </HStack>
              </Box>

              <Box
                h="180px"
                bg="#D4F0C8"
                borderRadius="2xl"
                position="relative"
                overflow="hidden">
                
                <VideoBadge />
                <Box
                  position="absolute"
                  bottom={-2}
                  right={-2}
                  w={28}
                  h={28}
                  bg="#A78BFA"
                  borderRadius="full"
                  opacity={0.7} />
                
                <Box
                  position="absolute"
                  top={6}
                  left={6}
                  w={10}
                  h={10}
                  bg="#FDE047"
                  borderRadius="full" />
                
              </Box>

              <Box
                h="180px"
                bg="#FFE0A0"
                borderRadius="2xl"
                position="relative"
                overflow="hidden">
                
                <VideoBadge />
                <Box
                  position="absolute"
                  bottom={-4}
                  left={-4}
                  w={20}
                  h={20}
                  bg="#FF7E67"
                  borderRadius="full"
                  opacity={0.8} />
                
                <Box
                  position="absolute"
                  top={4}
                  right={6}
                  w={14}
                  h={14}
                  bg="#34D399"
                  borderRadius="xl" />
                
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>);

};