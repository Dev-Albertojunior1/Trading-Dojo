import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Course from './components/Course';
import Terms from './components/terms'; // Verifique se o nome do arquivo e importação estão corretos
import Contact from './components/Contact';

import { Box } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/tradingdojo">
      <Box display="flex" flexDirection="column" minHeight="100vh" bg="#0f0f0f" color="white">
        <Navbar />
        <Box as="main" flex="1" p={5}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
