// import React from 'react'

// const WorkSingleVideo = () => {
 
//   return (
//     <div>WorkSingleVideo</div>
//   )
// }

// export default WorkSingleVideo;
import React from 'react'
import {
    Box,
    Grid,
    Stack,
    Text,
    Image,
    Heading,
    GridItem,
    AspectRatio,
   Button,
   Divider,
   ButtonGroup
  } from '@chakra-ui/react';
  import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
  import {ViewIcon,CheckCircleIcon,ChatIcon,StarIcon,TriangleUpIcon} from '@chakra-ui/icons'
  import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
const getVideoView = (url) => {
    return fetch(url)
    .then((res) => res.json());
  }
const WorkSingleVideo = () => {
    const {id} = useParams()
   const [viewVideo, setViewVideo] = useState({});
   useEffect(() => {
    getVideoView(`https://sparta-fitness-database.vercel.app/work/${id}`).then((res) => 
    setViewVideo(res)
   
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
           <Box
        width={["100%", "100%", "100%"]}
        // backgroundColor="#e3ebee"
        m="auto"
        height="auto"
        
        pb={14}
        
      >
        <AspectRatio
          width={["100%", "100%", "100%"]}
          height={{
            base: "300px",
            md: "500px",
            xl: "650px",
          }}
          ratio={1}
          m="auto"
        >
          <iframe
            title="New: Add Independent Workouts & Third Party Workout Videos to FB Calendar - FB Plus Feature"
            src={viewVideo.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
            <Stack spacing={{ base: 6, md: 10 }} borderBottom='1px' borderColor='gray.200'>
            <Box as={'header'} mt={5} pb={5}>
              <Heading
                lineHeight={1.1}
                fontWeight={400}
                fontSize={{ base: 'xl', sm: 'xl', lg: '2xl' }}
                color='#101113'>
                 {viewVideo.name}
              </Heading>
              <Text
                color={'#101113'}
                fontWeight={400}
                fontSize={'lg'}
                >
                {viewVideo.des}
              </Text>
              <Text
                color={'#4296cb'}
                fontWeight={200}
                lineHeight={2}
                fontSize={'md'}>
                {viewVideo.day}
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
{/*  */}
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  mt={10}
>
  {/* <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  /> */}

  <Stack>
    <CardBody w={'85%'} lineHeight={'8'}>
      <Heading size='lg'>Details</Heading>

      <Text py='2' color={'gray.600'}>
      This routine has a little bit of everything,which makes it very fun and goes by very quickly. In just over 30 minutes, you get a warm-up, cool-down, and 4 combo groups of sweaty, challenging goodness in between. So if you like kickboxing, you are going to like this routine;if you like kettlebells, you are going to like this routine; if you like core, then you will like this routine; and if you like all three, then, well, this may just be your dream workout. Haha.
      </Text>
      <Text color={'gray.600'}>Each of the 4 workout groups are built in the same fashion, but each has unique exercises, meaning they feel like their own mini workouts. Each group includes two exercises each of cardio kickboxing, kettlebell, and core. This approach keeps the workout fast and fun while getting a little strength, cardio, and toning all in one routine.</Text>
      <Text color={'gray.600'}>If this happens to be your first time doing kettlebell or kickboxing, be sure to really focus on that warm-up (and you may even want to do a bit of an extra warm-up). Both kickboxing and kettlebell are ballistic types of movement, which can increase your chances of injury (pulled muscles) if you are not properly warmed up. So, take your time with the warm-up and be sure to pay very close attention to your form. You can also lower your intensity or the amount of weight being used until you know how this type of training will affect you.</Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Post A Comment
      </Button>
    </CardFooter>
  </Stack>
  
 {/*  */}
 <Card maxW='sm' h={'450'}>
  <CardBody >
    <Image
      src='https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_6_fb-reach-stretching-yoga-and-pilates-program-for-flexibility-and-total-body-toning.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='sm'>FB Reach - Stretching, Yoga, & Pilates Program for Flexibility & Total Body Toning</Heading>
      <Text color={'gray.600'}>
      Pilates, yoga & stretching come together to create an easy-on-the-body blend. Combine with any other Fitness Blender program to accelerate gains in flexibility, tone, and range of motion.
      </Text>
     
    </Stack>
  </CardBody>
 
</Card>

 {/*  */}
</Card>

             </Box>
    
    </div>
  )
}

export default WorkSingleVideo;