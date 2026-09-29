import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack, Icon, Text } from '@chakra-ui/react';
import { Home, Compass, PlayCircle, Palette } from 'lucide-react';
import { SpotifyKidsHome } from './components/SpotifyKidsHome';
import { DesignSystem } from './pages/DesignSystem';
import { BrowsePage } from './pages/BrowsePage';
import { SplashScreen } from './pages/SplashScreen';
import { LoginScreen } from './pages/LoginScreen';
import { VideoPlayerScreen } from './pages/VideoPlayerScreen';
import { ProfilePickerScreen } from './pages/ProfilePickerScreen';
const NavItem = ({
  icon,
  label,
  isActive,
  onClick





}: {icon: any;label: string;isActive: boolean;onClick: () => void;}) =>
<Flex
  direction="column"
  align="center"
  justify="center"
  w="full"
  py={3}
  px={2}
  cursor="pointer"
  borderRadius="xl"
  bg={isActive ? 'whiteAlpha.200' : 'transparent'}
  _hover={{
    bg: 'whiteAlpha.150'
  }}
  transition="background 0.2s"
  onClick={onClick}
  gap={1}>
  
    <Icon as={icon} color="white" boxSize={6} />
    <Text
    color="white"
    fontSize="xs"
    fontWeight={isActive ? 'bold' : 'medium'}
    textAlign="center">
    
      {label}
    </Text>
  </Flex>;

export function App() {
  const [appState, setAppState] = useState<
    'splash' | 'login' | 'profilePicker' | 'main' | 'player'>(
    'splash');
  const [activeTab, setActiveTab] = useState<
    'home' | 'design-system' | 'browse'>(
    'browse');
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState('login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  // Full-screen states (no sidebar)
  if (appState === 'splash') {
    return <SplashScreen />;
  }
  if (appState === 'login') {
    return <LoginScreen onLogin={() => setAppState('profilePicker')} />;
  }
  if (appState === 'profilePicker') {
    return <ProfilePickerScreen onSelectProfile={() => setAppState('main')} />;
  }
  if (appState === 'player') {
    return (
      <VideoPlayerScreen
        onGoBack={() => {
          setActiveTab('browse');
          setAppState('main');
        }} />);


  }
  // Main app with left nav rail (100pt wide)
  return (
    <Flex h="100vh" w="100vw" overflow="hidden">
      {/* Left Nav Rail — 100pt wide */}
      <Flex
        w="100px"
        flexShrink={0}
        bg="#1a1a2e"
        direction="column"
        align="center"
        pt="20px"
        pb="40px"
        borderRight="1px solid"
        borderColor="whiteAlpha.100">
        
        {/* App Logo / Mascot */}
        <Box
          w={12}
          h={12}
          borderRadius="xl"
          overflow="hidden"
          bg="white"
          mb={8}
          boxShadow="md"
          flexShrink={0}>
          
          <img
            src="/turnipMascot.png"
            alt="Turnip mascot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} />
          
        </Box>

        {/* Nav Items */}
        <VStack spacing={2} w="full" px={2} flex={1}>
          <NavItem
            icon={Home}
            label="Home"
            isActive={activeTab === 'home'}
            onClick={() => setActiveTab('home')} />
          
          <NavItem
            icon={Compass}
            label="Browse"
            isActive={activeTab === 'browse'}
            onClick={() => setActiveTab('browse')} />
          
          <NavItem
            icon={PlayCircle}
            label="Player"
            isActive={false}
            onClick={() => setAppState('player')} />
          
          <NavItem
            icon={Palette}
            label="Design"
            isActive={activeTab === 'design-system'}
            onClick={() => setActiveTab('design-system')} />
          
        </VStack>
      </Flex>

      {/* Main Content Area — fills remaining width */}
      <Box flex={1} h="100vh" overflow="auto" position="relative">
        {activeTab === 'home' && <SpotifyKidsHome />}
        {activeTab === 'browse' && <BrowsePage />}
        {activeTab === 'design-system' && <DesignSystem />}
      </Box>
    </Flex>);

}