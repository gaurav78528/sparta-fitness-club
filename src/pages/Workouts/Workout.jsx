import React from 'react'
import "./Workout.css"
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { MdSettings } from 'react-icons/md'
import { CalendarIcon} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { Calender } from './Calender';
import { Flex, Spacer,Box,Heading,Text ,Image} from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
const Workout = () => {
    const [liked, setLiked] = useState(null);
    

    let work=[
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1167-kickboxing-kettlebell-and-core-b94e.jpg',
            name:'Kickboxing, Kettlebell, and Core ',
            des:'Bored Easily Combo Workout',
            day:'38 Min • Total Body '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1022-beginner-friendly-cardio-warm-up-bae7.jpg',
            name:'Beginner-Friendly Cardio Warm Up  ',
            des:'Low-Impact Feel-Good Exercises ',
            day:'10 Min • Total Body '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1083-restorative-bodyweight-workout-ac41.jpg',
            name:'Restorative Bodyweight Workout  ',
            des:'Low Impact Exercises for Sore Muscles ',
            day:'24 Min • Total Body '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1133-single-weight-upper-body-a19e.jpg',
            name:'Single Weight Upper Body  ',
            des:'Quick Strength Training Circuit  ',
            day:'23 Min • Upper Body  '
        },
    ]
    
    let work1=[
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1154-intermediate-power-yoga-with-twists-adef.jpg',
            name:'Intermediate Power Yoga With Twists  ',
            des:'Free-Flow for Balance and Strength ',
            day:'52 Min • Total Body • Energizing  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg',
            name:'Quick HIIT With Extended Cool Down  ',
            des:'Tabata-Inspired Intervals and Feel-Good Foam Rolling  ',
            day:'29 Min • Total Body '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg',
            name:'Lower Body Strength   ',
            des:'Weighted Circuits with Bodyweight Tempo Training ',
            day:'66 Min • Lower Body • Challenging '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1155-express-upper-body-90e4.jpg',
            name:'Express Upper Body ',
            des:'Bored-Easily Strength Intervals  ',
            day:'17 Min • Upper Body • Feel-Good  '
        },
    ]
    let work3=[
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg',
            name:'Lower Body Strength and HIIT Cardio   ',
            des:'With Low Impact, Advanced, and Bodyweight Options ',
            day:'40 Min • Lower Body • Fun  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1022-beginner-friendly-cardio-warm-up-bae7.jpg',
            name:'Beginner-Friendly Cardio Warm Up  ',
            des:'Low-Impact Feel-Good Exercises   ',
            day:'10 Min • Total Body  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1141-weighted-core-strength-98b4.jpg',
            name:'Weighted Core Strength  ',
            des:'Functional Core Correction and Cross-Training ',
            day:'19 Min • Core • Empowering '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1143-bored-easily-strength-afcd.jpg',
            name:'Bored Easily Strength  ',
            des:'Dumbbell Workout With No Repeated Exercises   ',
            day:'40 Min • Total Body • Smart '
        },
    ]
    let work4=[
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1150-30-minute-hiit-a15c.jpg',
            name:'Quick HIIT With Extended Cool Down  ',
            des:'Tabata-Inspired Intervals and Feel-Good Foam Rolling  ',
            day:'29 Min • Total Body  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1146-aerobic-step-hiit-a107.jpg',
            name:'Aerobic Step HIIT   ',
            des:'Ascending and Descending Cardio Ladders   ',
            day:'33 Min • Total Body   '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1161-lower-body-strength-and-hiit-cardio-ba59.jpg',
            name:'Lower Body Strength and HIIT Cardio  ',
            des:'With Low Impact, Advanced, and Bodyweight Options  ',
            day:'40 Min • Lower Body • Fun  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1139-low-impact-tabata-hiit-a11e.jpg',
            name:'Low Impact Tabata HIIT  ',
            des:'Sweaty Level 5 Circuits  ',
            day:'33 Min • Total Body • Sweaty '
        },
    ]
    let work5=[
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1156-lower-body-strength-bb7d.jpg',
            name:'Lower Body Strength  ',
            des:'Weighted Circuits with Bodyweight Tempo Training   ',
            day:'66 Min • Lower Body • Challenging   '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1155-express-upper-body-90e4.jpg',
            name:'Express Upper Body   ',
            des:'Bored-Easily Strength Intervals   ',
            day:'17 Min • Upper Body • Feel-Good   '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1158-upper-body-strength-ab3b.jpg',
            name:'Upper Body Strength   ',
            des:'Circuit Training With Push-Ups Intermissions  ',
            day:'51 Min • Upper Body • Challenging  '
        },
        {
            image:'https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1167-kickboxing-kettlebell-and-core-b94e.jpg',
            name:'Kickboxing, Kettlebell, and Core  ',
            des:'Bored Easily Combo Workout ',
            day:'38 Min • Total Body '
        },
    ]
  return (
    <div>
          {/* top image */}
          <div className='WorkTop'>
               <div className='WorkTopdiv'>
                    <div>ONLINE WORKOUT VIDEOS</div>
                    <h1>
                    Find Your Fitness.
                    <br></br>
                    Something for Everyone.
                    </h1>
                    <p>A huge selection of workout videos and programs to help you look and feel your best.</p>
               </div>
               <div>
               {/* <FontAwesomeIcon icon="fa-thin fa-chevron-down" /> */}
               </div>
          </div>
          {/* top image end */}
          {/* card */}

          <div className='WorkCard'>
            <div className='WorkCard1'>
            <Flex minWidth='max-content' alignItems='center' gap='2' pb={8}>
               <Box p='2'>
               <Heading as='h2' size='xl'>Newest Free Workout Videos</Heading>
               </Box>
              <Spacer />
               <Box gap='2' >
               <Text color='#4296cb'>View All Free Workouts</Text>
                 </Box>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} >
                    {
                        work.map((e)=>(
                           <GridItem  h='auto' pb={5} bg='#fff'>
                             
                             <Image src={e.image} />
                             <Box color='white' className='Free'>
                                <div>Free</div>
                             </Box>
                             <Box p={2} marginTop={2}>
                              
                              
                                  <Flex gap={2}>
                                  <Box p='2'>
                                  <Text fontSize='md'>{e.name}</Text>
                                  </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   <Calender/>
                                  </Box>
                                 </Flex>
                                 <Flex gap={2} mt='-15px'>
                                  <Box p='2'>
                                 <Text fontSize='sm'>{e.des}</Text>
                                 </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   {/* <Calender/> */}
                                  </Box>
                                 </Flex>
                                 <Text fontSize='sm' color='#4296cb' pl={1}>{e.day}</Text>
                              </Box>
                           </GridItem>
                        ))
                    }
                </Grid>

            
            </div>
          </div>
          {/* card end */}
          {/* 2nd card */}
          <div className='WorkCard2'>
            <div className='WorkCard1'>
            <Flex minWidth='max-content' alignItems='center' gap='2' pb={8}>
               <Box p='2'>
               <Heading as='h2' size='xl'>Newest Plus Workout Videos</Heading>
               </Box>
              <Spacer />
               <Box gap='2' >
               <Text color='#4296cb'>View All Plus Workouts</Text>
                 </Box>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} >
                    {
                        work.map((e)=>(
                           <GridItem  h='auto' pb={5} bg='#fff'>
                             
                             <Image src={e.image} />
                           
                             <Box p={2} marginTop={2}>
                              
                              
                                  <Flex gap={2}>
                                  <Box p='2'>
                                  <Text fontSize='md'>{e.name}</Text>
                                  </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   <Calender/>
                                  </Box>
                                 </Flex>
                                 <Flex gap={2} mt='-15px'>
                                  <Box p='2'>
                                 <Text fontSize='sm'>{e.des}</Text>
                                 </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   {/* <Calender/> */}
                                  </Box>
                                 </Flex>
                                 <Text fontSize='sm' color='#4296cb' pl={1}>{e.day}</Text>
                              </Box>
                           </GridItem>
                        ))
                    }
                </Grid>

            
            </div>
          </div>
          {/* 2nd card end */}
          {/* 3rd card */}
          <div className='WorkCard'>
            <div className='WorkCard1'>
            <Flex minWidth='max-content' alignItems='center' gap='2' pb={8}>
               <Box p='2'>
               <Heading as='h2' size='xl'>Beginner Workouts</Heading>
               </Box>
              <Spacer />
               <Box gap='2' >
               <Text color='#4296cb'>View All Beginner Workouts</Text>
                 </Box>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} >
                    {
                        work3.map((e)=>(
                           <GridItem  h='auto' pb={5} bg='#fff'>
                             
                             <Image src={e.image} />
                             
                             <Box p={2} marginTop={2}>
                              
                              
                                  <Flex gap={2}>
                                  <Box p='2'>
                                  <Text fontSize='md'>{e.name}</Text>
                                  </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   <Calender/>
                                  </Box>
                                 </Flex>
                                 <Flex gap={2} mt='-15px'>
                                  <Box p='2'>
                                 <Text fontSize='sm'>{e.des}</Text>
                                 </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   {/* <Calender/> */}
                                  </Box>
                                 </Flex>
                                 <Text fontSize='sm' color='#4296cb' pl={1}>{e.day}</Text>
                              </Box>
                           </GridItem>
                        ))
                    }
                </Grid>

            
            </div>
          </div>
          {/* 3rd card end */}
          {/* 3nd card */}
          <div className='WorkCard2'>
            <div className='WorkCard1'>
            <Flex minWidth='max-content' alignItems='center' gap='2' pb={8}>
               <Box p='2'>
               <Heading as='h2' size='xl'>HIIT Workouts</Heading>
               </Box>
              <Spacer />
               <Box gap='2' >
               <Text color='#4296cb'>View All HIIT Workouts</Text>
                 </Box>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} >
                    {
                        work4.map((e)=>(
                           <GridItem  h='auto' pb={5} bg='#fff'>
                             
                             <Image src={e.image} />
                           
                             <Box p={2} marginTop={2}>
                              
                              
                                  <Flex gap={2}>
                                  <Box p='2'>
                                  <Text fontSize='md'>{e.name}</Text>
                                  </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   <Calender/>
                                  </Box>
                                 </Flex>
                                 <Flex gap={2} mt='-15px'>
                                  <Box p='2'>
                                 <Text fontSize='sm'>{e.des}</Text>
                                 </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   {/* <Calender/> */}
                                  </Box>
                                 </Flex>
                                 <Text fontSize='sm' color='#4296cb' pl={1}>{e.day}</Text>
                              </Box>
                           </GridItem>
                        ))
                    }
                </Grid>

            
            </div>
          </div>
          {/* 4th end */}
          {/*  */}
          <div className='WorkCard'>
            <div className='WorkCard1'>
            <Flex minWidth='max-content' alignItems='center' gap='2' pb={8}>
               <Box p='2'>
               <Heading as='h2' size='xl'>Strength Workouts</Heading>
               </Box>
              <Spacer />
               <Box gap='2' >
               <Text color='#4296cb'>View All Strength Workouts</Text>
                 </Box>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} >
                    {
                        work5.map((e)=>(
                           <GridItem  h='auto' pb={5} bg='#fff'>
                             
                             <Image src={e.image} />
                             
                             <Box p={2} marginTop={2}>
                              
                              
                                  <Flex gap={2}>
                                  <Box p='2'>
                                  <Text fontSize='md'>{e.name}</Text>
                                  </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   <Calender/>
                                  </Box>
                                 </Flex>
                                 <Flex gap={2} mt='-15px'>
                                  <Box p='2'>
                                 <Text fontSize='sm'>{e.des}</Text>
                                 </Box>
                                  <Spacer />
                                  <Box gap='2' >
                                   {/* <Calender/> */}
                                  </Box>
                                 </Flex>
                                 <Text fontSize='sm' color='#4296cb' pl={1}>{e.day}</Text>
                              </Box>
                           </GridItem>
                        ))
                    }
                </Grid>

            
            </div>
          </div>
          {/*  */}
    </div>
  )
}

export default Workout;

