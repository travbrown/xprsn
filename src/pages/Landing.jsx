import React from 'react';
import logo from '../media/xprsn_logo.png';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Center,
} from '@chakra-ui/react';
import Emojis from '../components/atoms/Emojis';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundColor={'black'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6} direction={'column'}>
        <Emojis symbol="💧"/>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            XPRSV 
          </Text>
          
          <Stack direction={'row'}>
            <Link to="/thought">thought</Link>
            <Link to="/about">about</Link>
            <Link to="/art">art</Link>
          </Stack>
          <Emojis symbol="🌊"/>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Landing;