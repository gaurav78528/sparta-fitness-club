import { CheckCircleIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    CheckboxIcon,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import React from 'react'
import SlideCard from './SlideCard'
  

const Routines = () => {
  return (
    <div> 
         <SlideCard/>
        
 <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
<Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://cloudfront.fitnessblender.com/assets/img/fbplus/my-routines.png'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        
            <Text color={'black.400'} as={'span'}>
            Create, Save, and Repeat Personal Routines
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Routines allow you to build your own workout plans that you can save and schedule on the calendar. With access to our entire workout library, you can create Routines personalized for your individual fitness level, exercise preferences, and personal goals.
          </Text>
          
        </Stack>
      </Flex>

      
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

     
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        
            <Text color={'black.400'} as={'span'}>
            Easy to Use for Beginners, Advanced Enough for Pros
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Whether you want to save time scheduling your favorite morning warm-up each week, or you want to create a comprehensive fitness plan, building Routines couldn’t be easier. Adding workouts from your favorites list is a great place to start, or you can leverage filters, tags, and the content-aware Routine details to build highly customized Routines with targeted criteria.
          </Text>
          
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://cloudfront.fitnessblender.com/assets/img/fbplus/draft-mode.png'
          }
        />
      </Flex>
      
    </Stack>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
<Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://cloudfront.fitnessblender.com/assets/img/fbplus/routine-custom-workouts.png'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{base: '2xl', md: '3xl', lg: '4xl' }}>
        
            <Text color={'black.400'} as={'span'}>
            Custom Workouts
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Routines wouldn't be complete without the ability to add your own workouts. If you take a daily walk, follow other workouts online, or want to include other types of activity in your schedule, simply create your custom workout and add it to your routine like any video from Fitness Blender.
          </Text>
          
        </Stack>
      </Flex>

      
    </Stack>

   <Box w={"full"}   p={20} bg="#f0f4f6">
<Box marginBottom={"40px"}>
    <Heading>Routines Features</Heading>
</Box>
<Box>
    <Flex borderBottom={"1px solid gray"} justifyContent="space-between" p={4}>
        <Text  fontSize={"20px"} fontWeight="bold">Features</Text> 
        <Text fontSize={"20px"} fontWeight="bold">Active</Text> 

    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Access to the entire library of free and Plus-only workouts for an almost endless variety of routine combinations.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>1, 2, 4, and 8-week options for short, convenient routines, or robust, longer-term exercise plans.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Live content-aware routine details that help you focus your routines on specific criteria as you build.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Draft mode that allows you to edit all at once or build over time, and launch when you’re ready.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Draft selector so you aren’t locked into building just one routine at a time.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Multiple day selector so you don’t have to add workouts to only one day at a time.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex borderBottom={"1px solid gray"}  justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Visual styling options to customize the look of each routine in your list.</Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
    <Flex    justifyContent="space-between" p={4}>
        <Text fontSize={"20px"}>Include your non-Fitness Blender activity by adding custom workouts to your routines. <Button fontSize={"10px"} color={"white"} bg={"yellow.400"}>NEW</Button></Text> 
         <CheckCircleIcon color={"green.400"} fontSize="20px" />
    </Flex>
</Box>
   </Box>

   <Box  w={"full"}   p={20} bg="gray.600" lineHeight={10}>
      <Heading color={"white"} marginBottom="70px">Frequently Asked Questions</Heading>
      <Heading color={"white"}>Can I share my routine with other members?</Heading>
      <Text color={"white"} marginBottom="50px">Not right now, this is a feature we are exploring. Let us know if this is something you’d like us to prioritize.</Text>
   
      <Heading color={"white"}>How do I edit all the details of my routine?</Heading>
      <Text color={"white"} marginBottom="50px">You can directly edit basic information like the title, description, and length of your Routine. Our content-aware algorithm automatically generates the rest of the details like daily duration, days per week, etc. to simplify the process of building a Routine. To change the details of your routine, you’ll need to edit or select workouts that match the criteria you’re trying to achieve.</Text>

      <Heading color={"white"}>Can I edit my routine once it is live?</Heading>
      <Text color={"white"}>You can edit basic information like the title, description, etc. by selecting the edit button in the top right of the title card. But you won’t be able to change the workouts or sequence of a routine after you’ve launched it, so be sure you’re happy with your Routine before you hit that Save and Launch button.</Text>
   </Box>

    </div>
  )
}

export default Routines