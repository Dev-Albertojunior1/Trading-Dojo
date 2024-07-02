import React from 'react';
import { Box, Heading, Text, Link as ChakraLink, Flex, Image, Center } from '@chakra-ui/react';
import photo1 from "./images/cert1.jpg"
import photo2 from "./images/cert2.jpg"
import photo4 from "./images/cert3.jpg"
import photo5 from "./images/cert4.jpg"
import photo3 from './images/dj-removebg.png';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box 
      id="home" 
      color="white" 
      fontFamily="'Avenir Next', sans-serif"
      textAlign="center"
      py="8"
      px="4"
      maxW="800px"
      mx="auto"

    >

<Center>
        {/* Logo Responsivo */}
        <Image 
          src={photo3} 
          bg={"white"}
          alt="Logo da Empresa" 
          boxSize={{ base: '80px', md: '120px' }} // Ajusta o tamanho do logo para diferentes tamanhos de tela
          mb="4" 
        />
      </Center>
      <Center>
        <Heading as="h1" size="2xl" mb="4" fontFamily="Oswald, sans-serif" fontWeight="bold" mt={10}>
          You're Just One Trade Away From Financial Freedom...
        </Heading>
      </Center>

      <Center>
  <Text fontSize="l" mt="4" color="#00b6ff">
    <ChakraLink 
      as={RouterLink}  // Utilize o RouterLink aqui
      to="/course"  // Defina o "to" para a rota correta
      border="2px" 
      borderColor="#00b6ff" 
      px="4" 
      py="2" 
      borderRadius="md" 
      backgroundColor="transparent"
      _hover={{ textDecoration: 'none' }}
    >
      Escape the Matrix
    </ChakraLink>
  </Text>
</Center>

      <Box mt="8">
        <Center>
          <Heading as="h2" size="lg" mb="4" fontFamily="Oswald, sans-serif" fontWeight="bold">
            About Us
          </Heading>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
          Welcome to The Trading Dojo, your gateway to mastering the art of day trading and achieving profitable results through our time based concepts.
          </Text>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
          I will cut the corners right away and tell you that its not okay to jump strategy from strategy. There is a true way the market operates. That true way is time and that is exactly what we teach in our community.
          </Text>
        </Center>

        <Center>
          <Text fontSize="xl" textAlign="center" mb="4">
          We understand that studying something like this can seem overwhelming to beginners. Especially if you still doubt that it can work out for you. That’s why our mission is to simplify the process and provide you with weekly results to motivate you. Whether you’re a complete noob or an experienced trader looking to refine your skills, in the Trading Dojo, you’ll fill all the missing pieces.
          </Text>
        </Center>

        <Center>
          <Text fontSize="l" textAlign="center" mb="4" color="#00b6ff">
            <ChakraLink 
              as="a" 
              href="https://discord.gg/yqqn3s2PqY" 
              textDecoration="underline"
               
               
              px="4" 
              py="2" 
              borderRadius="md" 
              backgroundColor="transparent"
              _hover={{ textDecoration: 'none' }}
            >
              Click Here To Join our FREE Discord Community!
            </ChakraLink>
          </Text>
        </Center>
      </Box>

      <Box mt="8">
      <Center flexDirection="column">
  <Box textAlign="center" mb={4} w="100%">
    <Heading as="h3" size="lg" fontFamily="Oswald, " fontWeight="bold">
      Results
    </Heading>
    <Heading as="h3" size="l"  >
    Direct Results From Our Mentor At The Trading Dojo.  Learn How Today
    </Heading>
      {/* <Text fontSize="15" mt={2}  ml={0} maxW="80%" textAlign="justify" mx="auto" >
      Direct Results From Our Mentor At The Trading Dojo.  Learn How Today 
      </Text> */}
    
  </Box>

  <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" mb="4" gap={30}>
    <Image 
      src={photo1} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />
    <Image 
      src={photo2} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />

   

  </Flex>
  <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" mb="4" gap={30}>
    

   <Image 
      src={photo4} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />
     <Image 
      src={photo5} 
      alt="Results Image" 
      style={{height:"300px", width:"600px"}}
      boxSize={{ base: '100%', md: '50%' }} 
      objectFit="cover" 
      borderRadius="md" 
      mb={{ base: 4, md: 0 }} 
    />


  </Flex>
</Center>

      </Box>
    </Box>
  );
};

export default Home;
