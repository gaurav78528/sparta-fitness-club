import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletecart } from '../../store/Cart/CartAction';

const Cart = () => {
  const Productarray = useSelector((store) => store.Product);
  // const total = useSelector((store) => store.Product);
  console.log(Productarray,"data")
  const dispatch = useDispatch()

  
// console.log(total)
//   useEffect(()=>{
// if(Productarray.product.length>0){
//   // const totalPrice= Productarray.product.reduce((prev,next)=>{ return Number(prev)+ Number(next.price)},0)
//   // console.log(totalPrice)
// }
   
//   },[Productarray])
  
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
<div  justifyContent={"space-around"} >

   {
      Productarray.product.length>0 &&
      Productarray.product.map((el)=>
      {
        return (
          <div key={el.id}>
          <Flex gap={10} >

          <Image w={"155px"} src={el.image} alt="" />
         
        <div>
        <p>FB PLUS PASS</p>
        
        <p>{el.pass}</p>
  
        <Text>Purchase:</Text>
        <div gap={3}>
          <Button bg={"rgb(33,36,50)"} color={"white"}>FOR MYSELF</Button>
          <Button> AS A GIFT</Button>
        </div>
        </div>
        </Flex>
       
      <Flex>
      <Button onClick={()=>dispatch(deletecart(el.id))}>Delete</Button>
      <p>{el.price}</p>

      </Flex>
        </div>
        )
      }
      
      )
    }
 
     
        </div>
</div>
<hr/>
<Heading>Total:{ Productarray .TotalPrice} </Heading>
    </div>
  )
}

export default Cart