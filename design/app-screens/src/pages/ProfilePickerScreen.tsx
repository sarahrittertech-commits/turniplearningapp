import React, { useState } from 'react';
import { Box, Flex, VStack, HStack, Text, Icon, Image } from '@chakra-ui/react';
import { X, Settings, Pencil, Plus } from 'lucide-react';
interface Profile {
  id: string;
  name: string;
  avatarUrl: string;
  avatarBg: string;
}
interface ProfilePickerScreenProps {
  onSelectProfile: () => void;
}
const profiles: Profile[] = [
{
  id: '1',
  name: 'Sam',
  avatarUrl: "/turnipMascot.png",

  avatarBg: '#A2CE73'
},
{
  id: '2',
  name: 'John',
  avatarUrl: "/clownfish.jpg",

  avatarBg: '#4A90D9'
}];

const ProfileAvatar = ({
  profile,
  isSelected,
  onClick




}: {profile: Profile;isSelected: boolean;onClick: () => void;}) =>
<VStack spacing={3} cursor="pointer" onClick={onClick}>
    {/* Avatar with ring */}
    <Box
    w={36}
    h={36}
    borderRadius="full"
    border="4px solid"
    borderColor={isSelected ? '#1DB954' : 'whiteAlpha.300'}
    p={1}
    transition="all 0.2s"
    _hover={{
      transform: 'scale(1.05)',
      borderColor: isSelected ? '#1DB954' : 'whiteAlpha.500'
    }}>
    
      <Box
      w="full"
      h="full"
      borderRadius="full"
      bg={profile.avatarBg}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center">
      
        <Image
        src={profile.avatarUrl}
        alt={profile.name}
        w="80%"
        h="80%"
        objectFit="contain" />
      
      </Box>
    </Box>

    {/* Name */}
    <Text
    color={isSelected ? '#1DB954' : 'white'}
    fontSize="xl"
    fontWeight="bold"
    textAlign="center">
    
      {profile.name}
    </Text>

    {/* Edit button - only for selected profile */}
    {isSelected &&
  <Flex
    w={10}
    h={10}
    bg="whiteAlpha.200"
    borderRadius="full"
    align="center"
    justify="center"
    cursor="pointer"
    _hover={{
      bg: 'whiteAlpha.300'
    }}
    transition="background 0.2s">
    
        <Icon as={Pencil} color="white" boxSize={5} />
      </Flex>
  }
  </VStack>;

const AddAccountButton = () =>
<VStack spacing={3} cursor="pointer">
    {/* Dashed circle with plus */}
    <Flex
    w={36}
    h={36}
    borderRadius="full"
    border="3px dashed"
    borderColor="whiteAlpha.400"
    align="center"
    justify="center"
    transition="all 0.2s"
    _hover={{
      borderColor: 'whiteAlpha.600',
      transform: 'scale(1.05)'
    }}>
    
      <Icon as={Plus} color="whiteAlpha.600" boxSize={10} />
    </Flex>

    {/* Label */}
    <Text color="white" fontSize="xl" fontWeight="bold" textAlign="center">
      Add account
    </Text>
  </VStack>;

export const ProfilePickerScreen = ({
  onSelectProfile
}: ProfilePickerScreenProps) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    profiles[0].id
  );
  const handleProfileClick = (profileId: string) => {
    setSelectedProfileId(profileId);
    // Small delay to show selection before navigating
    setTimeout(() => {
      onSelectProfile();
    }, 300);
  };
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="#2D1050"
      direction="column"
      position="relative">
      
      {/* Top Bar */}
      <Flex w="full" px={8} py={6} justify="space-between" align="center">
        {/* Close button */}
        <Flex
          w={12}
          h={12}
          align="center"
          justify="center"
          cursor="pointer"
          borderRadius="xl"
          _hover={{
            bg: 'whiteAlpha.100'
          }}
          transition="background 0.2s">
          
          <Icon as={X} color="white" boxSize={8} />
        </Flex>

        {/* Grown-ups + Settings */}
        <HStack spacing={3}>
          <Text color="whiteAlpha.700" fontSize="lg" fontWeight="medium">
            Grown-ups
          </Text>
          <Flex
            w={10}
            h={10}
            bg="whiteAlpha.200"
            borderRadius="full"
            align="center"
            justify="center"
            cursor="pointer"
            _hover={{
              bg: 'whiteAlpha.300'
            }}
            transition="background 0.2s">
            
            <Icon as={Settings} color="white" boxSize={5} />
          </Flex>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex
        flex={1}
        direction="column"
        align="center"
        justify="center"
        px={8}
        pb={16}>
        
        {/* Heading */}
        <Text
          color="white"
          fontSize="4xl"
          fontWeight="bold"
          mb={16}
          textAlign="center">
          
          Who's listening?
        </Text>

        {/* Profile Grid - horizontal layout for iPad landscape */}
        <HStack
          spacing={20}
          align="flex-start"
          flexWrap="wrap"
          justify="center">
          
          {profiles.map((profile) =>
          <ProfileAvatar
            key={profile.id}
            profile={profile}
            isSelected={selectedProfileId === profile.id}
            onClick={() => handleProfileClick(profile.id)} />

          )}
          <AddAccountButton />
        </HStack>
      </Flex>
    </Flex>);

};