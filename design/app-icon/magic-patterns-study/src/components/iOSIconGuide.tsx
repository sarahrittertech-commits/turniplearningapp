import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Badge,
  VStack,
  HStack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Code,
  SimpleGrid } from
'@chakra-ui/react';
const MASCOT_URL = "/turnipMascot.png";

const THEME_COLOR = '#ab73d1';
export function iOSIconGuide() {
  return (
    <Box bg="#110B1F" py={16} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl">
        {/* 1. Hero Section */}
        <VStack spacing={8} textAlign="center" mb={20}>
          <Box>
            <Heading
              as="h1"
              size="2xl"
              color="white"
              mb={3}
              fontWeight="extrabold">

              Your iOS App Icon
            </Heading>
            <Text fontSize="xl" color="gray.400">
              Medium Purple • {THEME_COLOR}
            </Text>
          </Box>

          <Flex gap={8} align="flex-end" justify="center" wrap="wrap">
            {/* 256px Preview */}
            <VStack spacing={4}>
              <Box
                w="256px"
                h="256px"
                bg={THEME_COLOR}
                borderRadius="22.5%"
                shadow="2xl"
                p={4}
                border="1px solid rgba(255,255,255,0.1)">

                <Image
                  src={MASCOT_URL}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.2))" />

              </Box>
              <Text color="gray.400" fontSize="sm">
                256px (Preview)
              </Text>
            </VStack>

            {/* 120px Preview */}
            <VStack spacing={4}>
              <Box
                w="120px"
                h="120px"
                bg={THEME_COLOR}
                borderRadius="22.5%"
                shadow="xl"
                p={2}
                border="1px solid rgba(255,255,255,0.1)">

                <Image
                  src={MASCOT_URL}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" />

              </Box>
              <Text color="gray.400" fontSize="sm">
                120px (@2x)
              </Text>
            </VStack>

            {/* 60px Preview */}
            <VStack spacing={4}>
              <Box
                w="60px"
                h="60px"
                bg={THEME_COLOR}
                borderRadius="22.5%"
                shadow="md"
                p={1}
                border="1px solid rgba(255,255,255,0.1)">

                <Image
                  src={MASCOT_URL}
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.2))" />

              </Box>
              <Text color="gray.400" fontSize="sm">
                60px (@1x)
              </Text>
            </VStack>
          </Flex>
        </VStack>

        <Divider borderColor="rgba(171, 115, 209, 0.2)" mb={16} />

        {/* 2. Required Sizes Table */}
        <Box mb={16}>
          <Heading as="h2" size="lg" color="white" mb={2}>
            Required iOS Sizes
          </Heading>
          <Text fontSize="md" color="gray.400" mb={8}>
            A complete list of sizes needed for your Xcode Assets.xcassets
            folder.
          </Text>

          <TableContainer
            bg="rgba(255,255,255,0.06)"
            rounded="2xl"
            borderWidth="1px"
            borderColor="rgba(255,255,255,0.08)">

            <Table
              variant="simple"
              sx={{
                'th, td': {
                  borderColor: 'rgba(255,255,255,0.08)'
                }
              }}>

              <Thead bg="rgba(0,0,0,0.2)">
                <Tr>
                  <Th
                    color="gray.400"
                    borderBottom="1px solid rgba(255,255,255,0.08)">

                    Preview
                  </Th>
                  <Th
                    color="gray.400"
                    borderBottom="1px solid rgba(255,255,255,0.08)">

                    Size & Scale
                  </Th>
                  <Th
                    color="gray.400"
                    borderBottom="1px solid rgba(255,255,255,0.08)">

                    Purpose
                  </Th>
                  <Th
                    color="gray.400"
                    borderBottom="1px solid rgba(255,255,255,0.08)">

                    Filename
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* 20x20 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="40px"
                      h="40px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={0.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    20x20 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (40px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Notification</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-20@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 20x20 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="60px"
                      h="60px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    20x20 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (60px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Notification</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-20@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 29x29 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="58px"
                      h="58px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    29x29 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (58px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Settings</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-29@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 29x29 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    29x29 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (87px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Settings</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-29@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 38x38 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="76px"
                      h="76px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    38x38 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (76px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Spotlight</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-38@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 38x38 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    38x38 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (114px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Spotlight</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-38@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 40x40 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    40x40 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (80px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Spotlight</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-40@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 40x40 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    40x40 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (120px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone Spotlight</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-40@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 60x60 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    60x60 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (120px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-60@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 60x60 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    60x60 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (180px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-60@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 64x64 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    64x64 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (128px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-64@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 64x64 @3x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    64x64 @3x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (192px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPhone App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-64@3x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 68x68 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    68x68 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (136px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPad App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-68@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 76x76 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    76x76 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (152px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPad App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-76@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 83.5x83.5 @2x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    83.5x83.5 @2x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (167px)
                    </Text>
                  </Td>
                  <Td color="gray.400">iPad Pro App</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-83.5@2x.png
                    </Code>
                  </Td>
                </Tr>

                {/* 1024x1024 @1x */}
                <Tr
                  _hover={{
                    bg: 'rgba(255,255,255,0.02)'
                  }}>

                  <Td>
                    <Box
                      w="80px"
                      h="80px"
                      bg={THEME_COLOR}
                      borderRadius="22.5%"
                      p={1.5}>

                      <Image
                        src={MASCOT_URL}
                        w="100%"
                        h="100%"
                        objectFit="contain" />

                    </Box>
                  </Td>
                  <Td color="white" fontWeight="medium">
                    1024x1024 @1x{' '}
                    <Text as="span" color="gray.500" fontSize="sm" ml={2}>
                      (1024px)
                    </Text>
                  </Td>
                  <Td color="gray.400">App Store</Td>
                  <Td>
                    <Code
                      bg="rgba(0,0,0,0.3)"
                      color={THEME_COLOR}
                      px={2}
                      py={1}
                      rounded="md">

                      icon-1024.png
                    </Code>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <SimpleGrid
          columns={{
            base: 1,
            lg: 2
          }}
          spacing={8}
          mb={16}>

          {/* 3. Setup Instructions */}
          <Box
            bg="rgba(255,255,255,0.06)"
            p={8}
            rounded="2xl"
            borderWidth="1px"
            borderColor="rgba(171, 115, 209, 0.3)">

            <Heading as="h3" size="md" color="white" mb={6}>
              Setup Instructions
            </Heading>
            <VStack align="flex-start" spacing={5}>
              <Flex gap={4}>
                <Badge
                  bg={THEME_COLOR}
                  color="white"
                  rounded="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}>

                  1
                </Badge>
                <Text color="gray.300">
                  Export your icon as a 1024x1024 PNG with{' '}
                  <Text as="span" color={THEME_COLOR} fontWeight="bold">
                    {THEME_COLOR}
                  </Text>{' '}
                  background.
                </Text>
              </Flex>
              <Flex gap={4}>
                <Badge
                  bg={THEME_COLOR}
                  color="white"
                  rounded="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}>

                  2
                </Badge>
                <Text color="gray.300">
                  Use a tool like App Icon Generator (appicon.co) to generate
                  all sizes from the 1024px master.
                </Text>
              </Flex>
              <Flex gap={4}>
                <Badge
                  bg={THEME_COLOR}
                  color="white"
                  rounded="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}>

                  3
                </Badge>
                <Text color="gray.300">
                  In Xcode, open{' '}
                  <Code bg="rgba(0,0,0,0.3)" color="white" px={2} rounded="sm">
                    Assets.xcassets
                  </Code>{' '}
                  →{' '}
                  <Code bg="rgba(0,0,0,0.3)" color="white" px={2} rounded="sm">
                    AppIcon
                  </Code>
                  .
                </Text>
              </Flex>
              <Flex gap={4}>
                <Badge
                  bg={THEME_COLOR}
                  color="white"
                  rounded="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}>

                  4
                </Badge>
                <Text color="gray.300">
                  Drag the generated icons into the appropriate slots.
                </Text>
              </Flex>
              <Flex gap={4}>
                <Badge
                  bg={THEME_COLOR}
                  color="white"
                  rounded="full"
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}>

                  5
                </Badge>
                <Text color="gray.300">
                  The Contents.json file has been generated — place it in your{' '}
                  <Code bg="rgba(0,0,0,0.3)" color="white" px={2} rounded="sm">
                    AppIcon.appiconset
                  </Code>{' '}
                  folder.
                </Text>
              </Flex>
            </VStack>
          </Box>

          {/* 4. Color Specification Card */}
          <Box
            bg="rgba(255,255,255,0.06)"
            p={8}
            rounded="2xl"
            borderWidth="1px"
            borderColor="rgba(255,255,255,0.08)">

            <Heading as="h3" size="md" color="white" mb={6}>
              Color Specifications
            </Heading>
            <VStack align="stretch" spacing={4}>
              <Flex align="center" gap={4} mb={2}>
                <Box
                  w="40px"
                  h="40px"
                  bg={THEME_COLOR}
                  rounded="md"
                  shadow="sm"
                  border="1px solid rgba(255,255,255,0.1)" />

                <Text color="white" fontSize="lg" fontWeight="bold">
                  {THEME_COLOR}
                </Text>
              </Flex>

              <Box>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mb={1}>

                  RGB
                </Text>
                <Code
                  w="100%"
                  bg="rgba(0,0,0,0.3)"
                  color="gray.300"
                  p={3}
                  rounded="md">

                  R:171 G:115 B:209
                </Code>
              </Box>

              <Box>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mb={1}>

                  HSL
                </Text>
                <Code
                  w="100%"
                  bg="rgba(0,0,0,0.3)"
                  color="gray.300"
                  p={3}
                  rounded="md">

                  H:276° S:52% L:64%
                </Code>
              </Box>

              <Box>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mb={1}>

                  Swift UIColor
                </Text>
                <Code
                  w="100%"
                  bg="rgba(0,0,0,0.3)"
                  color="gray.300"
                  p={3}
                  rounded="md">

                  UIColor(red: 0.671, green: 0.451, blue: 0.820, alpha: 1.0)
                </Code>
              </Box>

              <Box>
                <Text
                  color="gray.500"
                  fontSize="xs"
                  textTransform="uppercase"
                  fontWeight="bold"
                  mb={1}>

                  SwiftUI Color
                </Text>
                <Code
                  w="100%"
                  bg="rgba(0,0,0,0.3)"
                  color="gray.300"
                  p={3}
                  rounded="md">

                  Color(red: 0.671, green: 0.451, blue: 0.820)
                </Code>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* 5. Contents.json Preview */}
        <Box
          bg="rgba(255,255,255,0.06)"
          p={8}
          rounded="2xl"
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.08)">

          <Flex
            justify="space-between"
            align="center"
            mb={6}
            wrap="wrap"
            gap={4}>

            <Heading as="h3" size="md" color="white">
              Contents.json
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Place in{' '}
              <Code
                bg="rgba(0,0,0,0.3)"
                color={THEME_COLOR}
                px={2}
                rounded="sm">

                Assets.xcassets/AppIcon.appiconset/Contents.json
              </Code>
            </Text>
          </Flex>

          <Box
            bg="#0D0814"
            p={6}
            rounded="xl"
            overflowX="auto"
            border="1px solid rgba(255,255,255,0.05)">

            <pre
              style={{
                margin: 0
              }}>

              <Code
                bg="transparent"
                color="gray.300"
                display="block"
                whiteSpace="pre"
                fontFamily="monospace">

                {`{
  "images" : [
    {
      "size" : "20x20",
      "idiom" : "iphone",
      "filename" : "icon-20@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "20x20",
      "idiom" : "iphone",
      "filename" : "icon-20@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "icon-29@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "29x29",
      "idiom" : "iphone",
      "filename" : "icon-29@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "38x38",
      "idiom" : "iphone",
      "filename" : "icon-38@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "38x38",
      "idiom" : "iphone",
      "filename" : "icon-38@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "icon-40@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "40x40",
      "idiom" : "iphone",
      "filename" : "icon-40@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "icon-60@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "60x60",
      "idiom" : "iphone",
      "filename" : "icon-60@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "64x64",
      "idiom" : "iphone",
      "filename" : "icon-64@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "64x64",
      "idiom" : "iphone",
      "filename" : "icon-64@3x.png",
      "scale" : "3x"
    },
    {
      "size" : "68x68",
      "idiom" : "ipad",
      "filename" : "icon-68@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "76x76",
      "idiom" : "ipad",
      "filename" : "icon-76@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "83.5x83.5",
      "idiom" : "ipad",
      "filename" : "icon-83.5@2x.png",
      "scale" : "2x"
    },
    {
      "size" : "1024x1024",
      "idiom" : "ios-marketing",
      "filename" : "icon-1024.png",
      "scale" : "1x"
    }
  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}`}
              </Code>
            </pre>
          </Box>
        </Box>
      </Container>
    </Box>);

}