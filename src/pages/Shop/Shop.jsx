import { Card, CardFooter } from '@chakra-ui/card';
import { Stack, Text } from '@chakra-ui/layout';
import { Button, ButtonGroup, Divider ,CardBody,Image
    ,Heading, 
    SimpleGrid} from '@chakra-ui/react'
  import React from 'react'
  import { useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { getAllgift } from '../../store/shop/action';
  
  const Shop = () => {
  
    const dispatch=useDispatch()
    const {gift}=useSelector((store)=>store.gift);

    useEffect(()=>{
      dispatch(getAllgift())
    },[])
    return (
      <div>
          <h1 >FB Plus Passes</h1>
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
 
      </div>
    )
  }
  
  export default Shop