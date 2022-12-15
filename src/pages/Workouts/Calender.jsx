import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react';
  import React from 'react'
  import { CalendarIcon} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import Calender1 from './Calender1';
  export const Calender = () => {
    return (
      <div><Popover>
      <PopoverTrigger>
      <Icon as={CalendarIcon} boxSize={6} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
        <PopoverBody><Calender1/></PopoverBody>
      </PopoverContent>
    </Popover></div>
    )
  }
  