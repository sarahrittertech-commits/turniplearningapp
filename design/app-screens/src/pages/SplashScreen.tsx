import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;
export const SplashScreen = () => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="#A2CE73"
      align="center"
      justify="center"
      direction="row"
      gap={12}>
      
      {/* Darker shape behind mascot */}
      <Flex
        w="420px"
        h="420px"
        bg="rgba(0,0,0,0.08)"
        borderRadius="3xl"
        align="center"
        justify="center"
        animation={`${fadeIn} 0.8s ease-out`}>
        
        <Image
          src="/turnipMascot.png"
          alt="Turnip mascot"
          w="340px"
          h="340px"
          objectFit="contain"
          animation={`${pulse} 2.5s ease-in-out infinite`} />
        
      </Flex>
    </Flex>);

};