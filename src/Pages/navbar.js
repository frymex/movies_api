import { ColorModeSwitcher } from '../ColorModeSwitcher';

import {
  Box,
  Flex,
HStack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function NavBar() {

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize='xl' className='logo'>czqv</Box>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

      </Box>
    </>
  );
}