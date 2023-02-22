import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import  NavBar from './Pages/navbar'
import  Content from './Pages/content'

import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Content/>
    </ChakraProvider>
  );
}

export default App;
