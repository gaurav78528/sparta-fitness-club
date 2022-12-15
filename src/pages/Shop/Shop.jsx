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