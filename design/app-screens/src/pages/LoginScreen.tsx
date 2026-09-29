import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  Button,
  Image,
  Icon,
  InputGroup,
  InputLeftElement,
  Divider,
  HStack } from
'@chakra-ui/react';
import { Mail, Lock, Apple } from 'lucide-react';
export const LoginScreen = ({ onLogin }: {onLogin: () => void;}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Flex
      h="100vh"
      w="100vw"
      bgGradient="linear(to-br, #C600C6, #FAF84D)"
      align="center"
      justify="center"
      direction="row"
      px={16}
      gap={16}>
      
      {/* Mascot - always visible in landscape */}
      <VStack spacing={4} align="center" flexShrink={0}>
        <Image
          src="/turnipMascot.png"
          alt="Turnip mascot"
          w="300px"
          h="300px"
          objectFit="contain" />
        
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          color="white"
          textShadow="0 2px 8px rgba(0,0,0,0.15)">
          
          Welcome Back!
        </Text>
        <Text fontSize="xl" color="whiteAlpha.800" fontWeight="medium">
          Sign in to continue the fun
        </Text>
      </VStack>

      {/* Form Card */}
      <Box
        w="full"
        maxW="500px"
        bg="white"
        borderRadius="3xl"
        p={10}
        boxShadow="xl">
        
        <Text
          fontSize="3xl"
          fontWeight="extrabold"
          color="#73318f"
          mb={8}
          textAlign="center">
          
          Log In
        </Text>

        {/* Form */}
        <VStack spacing={5} w="full">
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" h="full">
              <Icon as={Mail} color="#ab73d1" boxSize={6} />
            </InputLeftElement>
            <Input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderRadius="xl"
              border="2px solid"
              borderColor="#E2E8F0"
              fontSize="lg"
              _focus={{
                borderColor: '#ab73d1',
                boxShadow: '0 0 0 1px #ab73d1'
              }}
              _placeholder={{
                color: 'gray.400'
              }}
              bg="gray.50" />
            
          </InputGroup>

          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" h="full">
              <Icon as={Lock} color="#ab73d1" boxSize={6} />
            </InputLeftElement>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              borderRadius="xl"
              border="2px solid"
              borderColor="#E2E8F0"
              fontSize="lg"
              _focus={{
                borderColor: '#ab73d1',
                boxShadow: '0 0 0 1px #ab73d1'
              }}
              _placeholder={{
                color: 'gray.400'
              }}
              bg="gray.50" />
            
          </InputGroup>

          <Flex w="full" justify="flex-end">
            <Text
              fontSize="md"
              color="#73318f"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                textDecoration: 'underline'
              }}>
              
              Forgot password?
            </Text>
          </Flex>

          <Button
            w="full"
            size="lg"
            bg="#73318f"
            color="white"
            borderRadius="xl"
            fontWeight="bold"
            fontSize="xl"
            h={14}
            _hover={{
              bg: '#5a2572'
            }}
            _active={{
              bg: '#4a1a6b'
            }}
            onClick={onLogin}>
            
            Log In
          </Button>

          <HStack w="full" spacing={4} my={2}>
            <Divider borderColor="gray.300" />
            <Text fontSize="sm" color="gray.400" whiteSpace="nowrap">
              or
            </Text>
            <Divider borderColor="gray.300" />
          </HStack>

          <Button
            w="full"
            size="lg"
            bg="black"
            color="white"
            borderRadius="xl"
            fontWeight="bold"
            fontSize="lg"
            h={14}
            _hover={{
              bg: 'gray.800'
            }}
            _active={{
              bg: 'gray.900'
            }}
            leftIcon={<Icon as={Apple} boxSize={6} />}
            onClick={onLogin}>
            
            Sign in with Apple
          </Button>
        </VStack>

        <Flex justify="center" mt={6}>
          <Text fontSize="md" color="gray.500">
            Don't have an account?{' '}
            <Text
              as="span"
              color="#73318f"
              fontWeight="bold"
              cursor="pointer"
              _hover={{
                textDecoration: 'underline'
              }}>
              
              Sign Up
            </Text>
          </Text>
        </Flex>
      </Box>
    </Flex>);

};