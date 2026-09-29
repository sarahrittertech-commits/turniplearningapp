import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);