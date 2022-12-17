import React from 'react'
import { Box } from '@chakra-ui/react';
import {
    MinusIcon
  } from "@chakra-ui/icons";
const Hovering = () => {
  return (
    <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white' p={2}>
              <Box><MinusIcon /></Box>
        </Box>
    </div>
  )
}

export default Hovering;