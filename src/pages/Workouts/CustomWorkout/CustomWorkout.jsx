import React from 'react'
import { AspectRatio,Box, Grid, GridItem ,Heading,Image,Link,Text} from '@chakra-ui/react'
import "./CustomWorkout.css"
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
   
    Button,
    
    Flex,
    
    
    Stack,
    
    useBreakpointValue,
  } from '@chakra-ui/react';
import Slide from "./Slide"
const CustomWorkout = () => {
  return (
    <Box fontFamily='Maison Neue","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif' w="100%">
       
         <Slide/>
        
        
        <Box borderBottom="0.5px solid gray " textAlign='center' p={7} color='#4296cb'>
           <Link >Walkthrough</Link>
        </Box>
        <Box mt={5}>
        <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={2}
      >
        <GridItem>
            <Image src='https://cloudfront.fitnessblender.com/assets/img/fbplus/custom-card-list.jpg' />
        </GridItem>
        <GridItem>
            <Box textAlign='center' w='70%' h='auto'  m='auto' 
             mt={{
                md:"30%",
                xl: "30%"
              }}>
            <Heading textAlign='left'
            fontSize={
                {
                    base:"25px",
                    md:"30px"
,                   xl:"40px"
                }

            }
           
            >Add Your Own Workouts to Fitness Blender</Heading>
            <Text textAlign='left' mt="20px" lineHeight={2} color='gray.500'
             w={
                {
                base:"90%",
                md:"100%",
                xl:"85%"
                }
            }
            fontSize={
                {
                    base:"11px",
                    md:"11px"
,                   xl:"15px"
                }

            }
            >Whether you want to track your evening walk or earn your workout complete with your favorite videos from outside Fitness Blender, you can now add custom workouts to your <span style={{color:'#4296cb'}}>FB Plus</span> account.</Text>
            </Box>
        </GridItem>
        
        </Grid>
        </Box>
        <Box borderTop='1px solid gray' mt={5}>
        <Grid
        w={"full"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={2}
      >
        <GridItem>
            <Box textAlign='center' w='70%' h='auto'  m='auto' 
             mt={{
                md:"30%",
                xl: "30%"
              }}>
            <Heading textAlign='left'
            fontSize={
                {
                    base:"25px",
                    md:"30px"
,                   xl:"40px"
                }

            }
           
            >Add, Schedule, and Track</Heading>
            <Text textAlign='left' mt="20px" lineHeight={2} color='gray.500'
             w={
                {
                base:"90%",
                md:"100%",
                xl:"85%"
                }
            }
            fontSize={
                {
                    base:"11px",
                    md:"11px"
,                   xl:"15px"
                }

            }
            >Create a custom workout with detailed information just like a Fitness Blender workout. You can then add it to your calendar, earn your workout complete, and track its stats on the FB dashboard.</Text>
            </Box>
        </GridItem>
        <GridItem>
            <Image src='https://cloudfront.fitnessblender.com/assets/img/fbplus/custom-calendar.jpg' />
        </GridItem>
        </Grid>
        </Box>
    
<Box width={[
      '100%', 
      '100%', 
      '100%', 
      
    ]}
    backgroundColor='#e3ebee'
    m='auto'
    height='auto'
    pt={14}
    pb={14}
    pl={9}
    pr={9}
   
    >
 <AspectRatio 
 width={[
    '100%', 
    '100%', 
    '70%', 
    
  ]}
  height={{
    base: '300px', 
    md: '500px', 
    xl: '550px', 
  }}
   ratio={1}
   m='auto'>
  <iframe
   
      
      
    title='New: Add Independent Workouts & Third Party Workout Videos to FB Calendar - FB Plus Feature'
    src='https://www.youtube.com/embed/Fm4Tey-1Xxc'
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  />
</AspectRatio>
</Box>

    </Box>
  )
}

export default CustomWorkout