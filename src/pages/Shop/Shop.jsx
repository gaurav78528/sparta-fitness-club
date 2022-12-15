
import { Card, CardFooter } from '@chakra-ui/card';
import { Stack, Text } from '@chakra-ui/layout';
import { Button, ButtonGroup, Divider ,CardBody,Image
    ,Heading, 
    SimpleGrid} from '@chakra-ui/react'
  import React from 'react'
// import { Button, ButtonGroup, Divider ,CardBody,Image
//     ,Heading, 
//     SimpleGrid,
//     Card,
//     Stack,
//     CardFooter} from '@chakra-ui/react'
  import { Box, Button, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
  import { useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { getAllgift, getAllpassess } from '../../store/shop/action';
  
  
  const Shop = () => {
    const dispatch=useDispatch()
    const giftstore=useSelector((store)=>store.gift);
    console.log(giftstore.gift[0],"rtyukl");
    console.log(giftstore.gift[1],"Alllahhhaaa");
    useEffect(()=>{
      dispatch(getAllpassess())
      dispatch(getAllgift())

    },[])
// const [data,setdata]=useState([])
// const [isError,seterr]=useState("")
// useEffect(()=>{
//   axios.get(" http://localhost:8080/gift")
//   .then((res)=>setdata(res.data))



// },[])
    return (
      <div>
        <Grid 
          w={"full"}
          templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(4,1fr)'}}
          gap={2}
         
          >
            {giftstore.gift[0]&&giftstore.gift[0].map((el)=>(
              <GridItem  key={el.id}>
                <Box>
       <Image src={el.image}/>     
         <p>{el.price}</p>
              <Button>Add to cart</Button>

                </Box>
             
              </GridItem>
            ))}
          </Grid>



          
          <Heading >FB Plus Passes</Heading>
          <p>Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule, and extend your access with another pass at any time. Multiple passes can be purchased at once for longer access.</p>   
   <SimpleGrid columns={4}>
   <Card maxW='sm'>
    <CardBody>
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          $450
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
   </SimpleGrid>
          <Grid 
          w={"full"}
          templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(4,1fr)'}}
          gap={2}
         
          >
            {giftstore.gift[1]&&giftstore.gift[1].map((el)=>(
              <GridItem  key={el.id}>
                <Box>
              <Image src={el.image}/>
              <p>{el.price}</p>
              <Button>Add to cart</Button>

                </Box>
             
              </GridItem>
            ))}
          </Grid>
      </div>
    )
  }
  
  export default Shop