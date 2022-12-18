import React from 'react'
import {
    Box,
    chakra,
    Container,
    Grid,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    GridItem,
  } from '@chakra-ui/react';
  import {ViewIcon,CheckCircleIcon,ChatIcon,StarIcon,TriangleUpIcon} from '@chakra-ui/icons'
  import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
const getView = (url) => {
    return fetch(url)
    .then((res) => res.json());
  }
const WorkoutSingle = () => {
    const {id} = useParams()
   const [view, setView] = useState({});
   useEffect(() => {
    getView(`https://sparta-fitness-database.vercel.app/workoutVideos/${id}`).then((res) => 
   setView(res)
   
    )
},[id])
  return (
    <div>
     
        
      
             <Box w={"80%"}
             m="auto"
             mt={4}
             mb={4}
             height={"auto"}
             fontFamily='Maison Neue","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif'
             >
             <Image
              align={'center'}
              alt={'workvideo image'}
              src={view.image}
              w={'100%'}
              borderBottom='1px' borderColor='gray.200'
            />
            <Stack spacing={{ base: 6, md: 10 }} borderBottom='1px' borderColor='gray.200'>
            <Box as={'header'} mt={5} pb={5}>
              <Heading
                lineHeight={1.1}
                fontWeight={400}
                fontSize={{ base: 'xl', sm: 'xl', lg: '2xl' }}
                color='#101113'>
                 {view.name}
              </Heading>
              <Text
                color={'#101113'}
                fontWeight={400}
                fontSize={'lg'}
                >
                {view.des}
              </Text>
              <Text
                color={'#4296cb'}
                fontWeight={200}
                lineHeight={2}
                fontSize={'md'}>
                {view.time}
              </Text>
              <Grid 
               templateColumns='repeat(2, 1fr)'
               spacing={{ base: 8, md: 10 }}
               mt={3}
               pt={3}
               borderTop='1px' borderColor='gray.200'
               >
                 <GridItem
                >
                 <Text
                color={'#101113'}
                fontWeight={400}
                fontSize={ 'lg'}
                >
                
                <Text><span>Training Type :</span> <spacing /> <span >Cardiovascular, Pilates</span></Text>
                <Text><span> Equipment :</span> <spacing /> <span>Mat</span></Text>
                <Text><span>  Burn Estimate :</span> <spacing /> <span><ViewIcon />149-236 Calories</span></Text>
                
              </Text>
                 </GridItem>
                 <GridItem
                   borderLeft='1px' borderColor='gray.200'
                   pl="4">
                 <Text
                color={'#101113'}
                fontWeight={400}
                fontSize={ 'lg'}
                >Community </Text>
                <Text color={'blue'}><CheckCircleIcon/> 216</Text>
                <Text color={'red'}><StarIcon/> 102</Text>
                <Text color={'green'}><ChatIcon/> 32</Text>
                 </GridItem>
              </Grid>
            </Box>
            </Stack>

             </Box>
    
    </div>
  )
}

export default WorkoutSingle;