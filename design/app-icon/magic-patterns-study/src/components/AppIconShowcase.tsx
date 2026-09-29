import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Badge,
  VStack,
  HStack,
  Divider } from
'@chakra-ui/react';
const MASCOT_URL = "/turnipMascot.png";

export function AppIconShowcase() {
  return (
    <Box bg="#110B1F" minH="100vh" py={12} fontFamily="system-ui, sans-serif">
      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Box
            w="150px"
            h="150px"
            bg="rgba(255,255,255,0.05)"
            rounded="full"
            shadow="md"
            p={4}
            border="4px solid rgba(155, 142, 192, 0.3)">

            <Image
              src={MASCOT_URL}
              alt="Turnip Mascot Original"
              w="100%"
              h="100%"
              objectFit="contain" />

          </Box>
          <Box>
            <Heading
              as="h1"
              size="2xl"
              color="white"
              mb={2}
              fontWeight="extrabold">

              App Icon Generator
            </Heading>
            <Text fontSize="xl" color="gray.400">
              Inspired by Turnip Mascot
            </Text>
          </Box>
        </VStack>

        {/* iOS Color Exploration */}
        <Box mb={16}>
          <Heading as="h2" size="lg" color="white" mb={2}>
            iOS Color Exploration
          </Heading>
          <Text fontSize="md" color="gray.400" mb={8}>
            Your selected colors on the iOS icon style
          </Text>

          <SimpleGrid
            columns={{
              base: 2,
              md: 4
            }}
            spacing={8}>

            {/* Green #A2CE73 */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(162, 206, 115, 0.12)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="140px"
                  h="140px"
                  bg="#A2CE73"
                  borderRadius="22.5%"
                  shadow="lg"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Fresh Green
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                iOS App Store
              </Text>
              <Badge bg="#A2CE73" color="white" rounded="md" px={2} py={1}>
                #A2CE73
              </Badge>
            </Box>

            {/* Medium Purple #ab73d1 */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(171, 115, 209, 0.12)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="140px"
                  h="140px"
                  bg="#ab73d1"
                  borderRadius="22.5%"
                  shadow="lg"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Medium Purple
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                iOS App Store
              </Text>
              <Badge bg="#ab73d1" color="white" rounded="md" px={2} py={1}>
                #ab73d1
              </Badge>
            </Box>

            {/* Deep Purple #73318f */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(115, 49, 143, 0.15)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="140px"
                  h="140px"
                  bg="#73318f"
                  borderRadius="22.5%"
                  shadow="lg"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Deep Purple
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                iOS App Store
              </Text>
              <Badge bg="#73318f" color="white" rounded="md" px={2} py={1}>
                #73318f
              </Badge>
            </Box>

            {/* Soft Lavender #C39DC8 */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(195, 157, 200, 0.12)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="140px"
                  h="140px"
                  bg="#C39DC8"
                  borderRadius="22.5%"
                  shadow="lg"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.15))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Soft Lavender
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                iOS App Store
              </Text>
              <Badge bg="#C39DC8" color="white" rounded="md" px={2} py={1}>
                #C39DC8
              </Badge>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Icon Variations Grid */}
        <Box mb={16}>
          <Heading as="h2" size="lg" color="white" mb={8}>
            Style Variations
          </Heading>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
              xl: 4
            }}
            spacing={8}>

            {/* 1. iOS Style */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(74, 64, 99, 0.2)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#2D1B4E"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                iOS Style
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                iOS App Store
              </Text>
              <Badge colorScheme="purple" rounded="md" px={2} py={1}>
                180x180
              </Badge>
            </Box>

            {/* 2. Android Adaptive */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(6, 78, 59, 0.15)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#064E3B"
                  borderRadius="full"
                  p={4}
                  shadow="inner">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Android Adaptive
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Google Play Store
              </Text>
              <Badge colorScheme="green" rounded="md" px={2} py={1}>
                108x108
              </Badge>
            </Box>

            {/* 3. macOS Style */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(219, 39, 119, 0.1)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bgGradient="linear(to-br, #EC4899, #7C3AED)"
                  borderRadius="25%"
                  shadow="2xl"
                  p={3}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                macOS Style
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Mac App Store
              </Text>
              <Badge colorScheme="blue" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 4. Favicon */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="#134E4A"
                rounded="xl"
                overflow="hidden">

                <HStack spacing={4} align="flex-end">
                  <Image
                    src={MASCOT_URL}
                    w="64px"
                    h="64px"
                    objectFit="contain" />

                  <Image
                    src={MASCOT_URL}
                    w="32px"
                    h="32px"
                    objectFit="contain" />

                  <Image
                    src={MASCOT_URL}
                    w="16px"
                    h="16px"
                    objectFit="contain" />

                </HStack>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Favicon
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Browser Tabs
              </Text>
              <Badge colorScheme="orange" rounded="md" px={2} py={1}>
                16/32/64px
              </Badge>
            </Box>

            {/* 5. Circle */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(219, 39, 119, 0.1)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#BE185D"
                  borderRadius="full"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow="sm">

                  <Image
                    src={MASCOT_URL}
                    w="180%"
                    maxW="none"
                    transform="translateY(15%)"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Circle Zoom
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Social Media Avatars
              </Text>
              <Badge colorScheme="teal" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 6. Dark Mode */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(74, 64, 99, 0.2)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#0F0520"
                  borderRadius="22.5%"
                  boxShadow="0 0 25px rgba(167, 139, 250, 0.6)"
                  p={2}
                  border="1px solid rgba(255,255,255,0.1)">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Dark Mode
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Dark Theme UI
              </Text>
              <Badge colorScheme="gray" rounded="md" px={2} py={1}>
                180x180
              </Badge>
            </Box>

            {/* 7. Gradient */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(6, 78, 59, 0.15)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bgGradient="linear(to-tr, #F472B6, #10B981)"
                  borderRadius="22.5%"
                  p={3}
                  shadow="md">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Gradient
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Modern App Icon
              </Text>
              <Badge colorScheme="purple" rounded="md" px={2} py={1}>
                1024x1024
              </Badge>
            </Box>

            {/* 8. Minimal White */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(6, 78, 59, 0.15)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#D1FAE5"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={6}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Minimal White
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Clean Aesthetics
              </Text>
              <Badge colorScheme="gray" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 9. Vibrant */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(219, 39, 119, 0.1)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#DB2777"
                  borderRadius="22.5%"
                  p={2}
                  shadow="md">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Vibrant
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                High Contrast
              </Text>
              <Badge colorScheme="purple" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 10. Outlined */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(74, 64, 99, 0.2)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#EDE9FE"
                  border="4px solid #6D28D9"
                  borderRadius="22.5%"
                  p={3}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Outlined
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Sticker Style
              </Text>
              <Badge colorScheme="pink" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 11. Badge Style */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(6, 78, 59, 0.15)"
                rounded="xl"
                overflow="hidden">

                <Box
                  position="relative"
                  w="120px"
                  h="120px"
                  bg="#14532D"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={2}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                  <Flex
                    position="absolute"
                    top="-8px"
                    right="-8px"
                    bg="red.500"
                    color="white"
                    w="36px"
                    h="36px"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontWeight="bold"
                    fontSize="lg"
                    border="3px solid white"
                    shadow="sm">

                    3
                  </Flex>
                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Badge Style
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Notifications
              </Text>
              <Badge colorScheme="red" rounded="md" px={2} py={1}>
                180x180
              </Badge>
            </Box>

            {/* 12. Monochrome */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(74, 64, 99, 0.2)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#1E1B4B"
                  borderRadius="22.5%"
                  p={2}
                  shadow="sm">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="grayscale(100%) contrast(1.2)" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Monochrome
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Disabled / Inactive
              </Text>
              <Badge colorScheme="gray" rounded="md" px={2} py={1}>
                180x180
              </Badge>
            </Box>

            {/* 13. Duotone */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(219, 39, 119, 0.1)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#831843"
                  borderRadius="22.5%"
                  p={2}
                  shadow="sm">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="sepia(100%) hue-rotate(290deg) saturate(400%) brightness(0.7)" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Duotone
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Artistic Filter
              </Text>
              <Badge colorScheme="purple" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>

            {/* 14. Watercolor */}
            <Box
              bg="rgba(255,255,255,0.06)"
              p={6}
              rounded="2xl"
              shadow="sm"
              borderWidth="1px"
              borderColor="rgba(255,255,255,0.08)"
              transition="transform 0.2s"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'md'
              }}>

              <Flex
                justify="center"
                align="center"
                h="200px"
                mb={5}
                bg="rgba(219, 39, 119, 0.1)"
                rounded="xl"
                overflow="hidden">

                <Box
                  w="120px"
                  h="120px"
                  bg="#FCE7F3"
                  borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                  shadow="md"
                  p={3}>

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    filter="opacity(0.85) drop-shadow(0 0 10px rgba(155,142,192,0.5)) saturate(0.8)" />

                </Box>
              </Flex>
              <Heading size="md" mb={1} color="white">
                Watercolor
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Soft Pastel
              </Text>
              <Badge colorScheme="yellow" rounded="md" px={2} py={1}>
                512x512
              </Badge>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider borderColor="rgba(155, 142, 192, 0.2)" mb={16} />

        {/* Size Preview Section */}
        <Box mb={12}>
          <Heading as="h2" size="lg" color="white" mb={4}>
            Size Preview
          </Heading>
          <Text fontSize="md" color="gray.400" mb={8}>
            iOS style icon rendered at standard required dimensions, from
            largest to smallest.
          </Text>

          <Box
            w="100%"
            overflowX="auto"
            bg="rgba(255,255,255,0.06)"
            p={8}
            rounded="2xl"
            shadow="sm"
            borderWidth="1px"
            borderColor="rgba(255,255,255,0.08)">

            <Flex gap={12} align="center" minW="max-content" pb={4}>
              {/* 1024px */}
              <VStack spacing={4}>
                <Box
                  w="1024px"
                  h="1024px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="md"
                  p={16}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  1024px
                </Text>
              </VStack>

              {/* 512px */}
              <VStack spacing={4}>
                <Box
                  w="512px"
                  h="512px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="md"
                  p={8}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  512px
                </Text>
              </VStack>

              {/* 256px */}
              <VStack spacing={4}>
                <Box
                  w="256px"
                  h="256px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={4}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  256px
                </Text>
              </VStack>

              {/* 128px */}
              <VStack spacing={4}>
                <Box
                  w="128px"
                  h="128px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={2}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  128px
                </Text>
              </VStack>

              {/* 64px */}
              <VStack spacing={4}>
                <Box
                  w="64px"
                  h="64px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={1}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  64px
                </Text>
              </VStack>

              {/* 32px */}
              <VStack spacing={4}>
                <Box
                  w="32px"
                  h="32px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="sm"
                  p={0.5}
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  32px
                </Text>
              </VStack>

              {/* 16px */}
              <VStack spacing={4}>
                <Box
                  w="16px"
                  h="16px"
                  bg="white"
                  borderRadius="22.5%"
                  shadow="sm"
                  border="1px solid"
                  borderColor="gray.100">

                  <Image
                    src={MASCOT_URL}
                    w="100%"
                    h="100%"
                    objectFit="contain" />

                </Box>
                <Text fontWeight="bold" color="white">
                  16px
                </Text>
              </VStack>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>);

}