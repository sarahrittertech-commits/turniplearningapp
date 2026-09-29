import React, { useState } from 'react';
import { Box, Flex, VStack, HStack, Text, Icon, Image } from '@chakra-ui/react';
import {
  Play,
  Pause,
  ChevronLeft,
  Volume2,
  Subtitles,
  Music,
  Sparkles,
  MessageCircle,
  SkipBack,
  SkipForward,
  Home } from
'lucide-react';
interface VideoPlayerScreenProps {
  onGoBack: () => void;
  showName?: string;
  episodeTitle?: string;
  thumbnailUrl?: string;
}
const ControlIcon = ({
  icon,
  label,
  onClick,
  isActive = false





}: {icon: any;label: string;onClick?: () => void;isActive?: boolean;}) =>
<VStack spacing={1} cursor="pointer" onClick={onClick}>
    <Flex
    w={{
      base: 12,
      lg: 16,
      xl: 20
    }}
    h={{
      base: 12,
      lg: 16,
      xl: 20
    }}
    bg={isActive ? '#73318f' : '#4A90D9'}
    borderRadius="xl"
    align="center"
    justify="center"
    boxShadow="md"
    _hover={{
      transform: 'scale(1.05)'
    }}
    transition="transform 0.2s">
    
      <Icon
      as={icon}
      color="white"
      boxSize={{
        base: 6,
        lg: 8,
        xl: 10
      }} />
    
    </Flex>
    <Text
    color="white"
    fontSize={{
      base: 'xs',
      lg: 'sm',
      xl: 'md'
    }}
    fontWeight="bold"
    textAlign="center">
    
      {label}
    </Text>
  </VStack>;

export const VideoPlayerScreen = ({
  onGoBack,
  showName = 'Coral Reef Adventures',
  episodeTitle = 'The Hidden Garden',
  thumbnailUrl
}: VideoPlayerScreenProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="#1a1a2e"
      direction="column"
      position="relative"
      overflow="hidden">
      
      {/* Video Area */}
      <Box flex={1} position="relative">
        {/* Video Background */}
        {thumbnailUrl ?
        <Image
          src={thumbnailUrl}
          alt={showName}
          w="full"
          h="full"
          objectFit="cover"
          position="absolute"
          top={0}
          left={0} /> :


        <Box
          w="full"
          h="full"
          position="absolute"
          top={0}
          left={0}
          bgGradient="linear(to-br, #4A90D9, #73318f)">
          
            <Text
            position="absolute"
            top="20%"
            left="15%"
            fontSize="8xl"
            opacity={0.3}>
            
              🪸
            </Text>
            <Text
            position="absolute"
            bottom="25%"
            right="20%"
            fontSize="7xl"
            opacity={0.3}>
            
              🐠
            </Text>
            <Text
            position="absolute"
            top="40%"
            right="10%"
            fontSize="6xl"
            opacity={0.2}>
            
              🐙
            </Text>
          </Box>
        }

        {/* Overlay for controls visibility */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.300" />
        

        {/* Back Button (top-left) */}
        <Flex
          position="absolute"
          top={6}
          left={6}
          w={16}
          h={16}
          bg="#FF4757"
          borderRadius="xl"
          align="center"
          justify="center"
          cursor="pointer"
          boxShadow="lg"
          zIndex={10}
          onClick={onGoBack}
          _hover={{
            transform: 'scale(1.05)'
          }}
          transition="transform 0.2s">
          
          <Icon as={ChevronLeft} color="white" boxSize={9} />
        </Flex>

        {/* Center Play/Pause Controls */}
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          align="center"
          justify="center"
          zIndex={5}
          gap={16}>
          
          {/* Play / Resume Button */}
          <VStack
            spacing={3}
            cursor="pointer"
            onClick={() => setIsPlaying(!isPlaying)}
            _hover={{
              transform: 'scale(1.05)'
            }}
            transition="transform 0.2s">
            
            <Flex
              w="240px"
              h="200px"
              bg="#A2CE73"
              borderRadius="2xl"
              align="center"
              justify="center"
              direction="column"
              boxShadow="xl"
              gap={2}>
              
              <Icon
                as={isPlaying ? Pause : Play}
                color="white"
                boxSize={20}
                fill="white"
                ml={isPlaying ? 0 : 1} />
              
            </Flex>
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="extrabold"
              textShadow="0 2px 4px rgba(0,0,0,0.5)">
              
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </Text>
          </VStack>

          {/* Leave / Go Home Button */}
          <VStack
            spacing={3}
            cursor="pointer"
            onClick={onGoBack}
            _hover={{
              transform: 'scale(1.05)'
            }}
            transition="transform 0.2s">
            
            <Flex
              w="240px"
              h="200px"
              bg="#FF4757"
              borderRadius="2xl"
              align="center"
              justify="center"
              direction="column"
              boxShadow="xl"
              gap={2}>
              
              <Icon as={Home} color="white" boxSize={20} />
            </Flex>
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="extrabold"
              textShadow="0 2px 4px rgba(0,0,0,0.5)">
              
              GO HOME
            </Text>
          </VStack>
        </Flex>
      </Box>

      {/* Bottom Section: Progress + Info + Toolbar */}
      <Box>
        {/* Progress Bar */}
        <Box px={8} py={2} bg="#1a1a2e">
          <Box
            w="full"
            h={3}
            bg="whiteAlpha.200"
            borderRadius="full"
            overflow="hidden">
            
            <Box
              h="full"
              w={`${progress}%`}
              bg="#A2CE73"
              borderRadius="full"
              transition="width 0.3s" />
            
          </Box>
          <Flex justify="space-between" mt={1}>
            <Text color="whiteAlpha.600" fontSize="sm">
              4:12
            </Text>
            <Text color="whiteAlpha.600" fontSize="sm">
              12:00
            </Text>
          </Flex>
        </Box>

        {/* Episode Info + Toolbar in a row */}
        <Flex
          bg="#A2CE73"
          px={8}
          py={4}
          borderTopRadius="2xl"
          align="center"
          justify="space-between">
          
          <Box>
            <Text color="white" fontSize="xl" fontWeight="extrabold">
              {showName}
            </Text>
            <Text color="whiteAlpha.800" fontSize="md">
              {episodeTitle}
            </Text>
          </Box>
          <HStack spacing={10}>
            <ControlIcon icon={Volume2} label="SOUND" isActive />
            <ControlIcon icon={Subtitles} label="CAPTIONS" />
            <ControlIcon icon={SkipBack} label="REWIND" />
            <ControlIcon icon={SkipForward} label="SKIP" />
            <ControlIcon icon={MessageCircle} label="DIALOG" />
          </HStack>
        </Flex>
      </Box>
    </Flex>);

};