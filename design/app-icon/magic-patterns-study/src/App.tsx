import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppIconShowcase } from './components/AppIconShowcase';
import { iOSIconGuide } from './components/iOSIconGuide';
export function App() {
  return (
    <ChakraProvider>
      <iOSIconGuide />
      <AppIconShowcase />
    </ChakraProvider>);

}