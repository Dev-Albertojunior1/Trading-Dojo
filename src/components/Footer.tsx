import React from 'react';
import { Box, Flex, Text, Link, IconButton } from '@chakra-ui/react';
import { FaTelegram, FaDiscord, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.800" color="white" py={4} >
      <Flex direction="column" align="center">
      <Text as="span" color="white">
                  Contact us
                </Text>
        <Flex>
            
          <Link href="https://t.me/ictdojo" isExternal>
            <IconButton
              aria-label="Telegram"
              icon={<FaTelegram />}
              colorScheme="telegram"
              variant="ghost"
              mr={2}
            />
          </Link>
          <Link href="https://discord.gg/yqqn3s2PqY" isExternal>
            <IconButton
              aria-label="Discord"
              icon={<FaDiscord />}
              colorScheme="discord"
              variant="ghost"
              mr={2}
            />
          </Link>
          <Link href="https://www.instagram.com/ict_dojo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
              variant="ghost"
            />
          </Link>
        </Flex>
        <Text mb={4}>© {new Date().getFullYear()} The Trading Dojo. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
