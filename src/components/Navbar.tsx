import React from 'react';
import {
  Box,
  Flex,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
// import photo1 from './images/dj-removebg.png';

const Navbar: React.FC = () => {
  return (
    <Box bg="#0f0f0f" px={4} boxShadow="sm" className="nav" fontFamily="'Avenir Next', sans-serif">
      {/* Título com linha inferior vermelha */}
      <Box borderBottom="1px" borderBottomColor="#484848" color="white" textAlign="center" py={2} fontSize="xl">
        <b>Unlock Your Path To Financial Freedom</b>
      </Box>

      {/* Navbar */}
      <Flex alignItems="center" justifyContent="space-between" mt={4} px={4} maxW="1200px" mx="auto">
        {/* Ícone do menu hambúrguer para telas menores */}
        <Flex alignItems="center">
          <Flex display={{ base: 'flex', md: 'none' }} alignItems="center" mr={4}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
  
                variant="outline"
                size="md"
                colorScheme="red"
              />
              <MenuList backgroundColor="#383838" color="white">
                <MenuItem as={RouterLink} to="/" bg="#383838">
                  Home
                </MenuItem>
                <MenuItem as={RouterLink} to="/course" bg="#383838">
                  Courses
                </MenuItem>
                <MenuItem as={RouterLink} to="/contact" bg="#383838">
                  Contact
                </MenuItem>
                <MenuItem as={RouterLink} to="/terms" bg="#383838">
                  Terms
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          {/* Logo ou nome da empresa */}
          {/* <img src={photo1} alt="Logo da Empresa" style={{ height: '90px', marginRight: '10px', width: '120px' }} /> */}

          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" ml={4}>
            <Link as={RouterLink} to="/" mr={4} color="white">
              Home
            </Link>
            <Link as={RouterLink} to="/course" mr={4} color="white">
              Course & Private Mentorship
            </Link>
            <Link as={RouterLink} to="/contact" mr={4} color="white">
              Contact
            </Link>
            <Link as={RouterLink} to="/terms" color="white">
              Terms & Conditions
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
