import { Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <div style={{backgroundColor:"rgb(241,245,246)"}}>
        <Heading p={10}>Shopping Bag</Heading>
<div style={{backgroundColor:"white", width:"80%" ,margin:"auto", padding:"10px"}}>
    
<Flex justifyContent={"space-around"} bg={'white'}>
           <Text>Item</Text> 
           <Text marginLeft={"410px"}>Remove</Text>
           <Text>Price</Text>
        </Flex>
        <hr/>
<Flex   justifyContent={"space-around"} >
    <Flex gap={10}>

        <Image w={"155px"} src="https://d18zdz9g6n5za7.cloudfront.net/products/320/320-15-7-day-pass-8070.jpg" alt="" />
       
      <div>
      <p>FB PLUS PASS</p>
      
      <p>7-Day Pass</p>

      <Text>Purchase:</Text>
      <Center gap={3}>
        <Button bg={"rgb(33,36,50)"} color={"white"}>FOR MYSELF</Button>
        <Button> AS A GIFT</Button>
      </Center>
      </div>
    </Flex>
      <Button>Delete</Button>
      <p>562</p>
        </Flex>
</div>
<hr/>
    </div>
  )
}

export default Cart