import { Box, Button, Center, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const AdminHome = () => {
  return (
    <Center w={"full"} >
        <Box>
           <Center >
          <Heading>
            Add Products
        </Heading>  
        </Center>
        <Box w={"md"}>
            <form  >
          <Input type="url" placeholder='Image url'/>
          <Input type="text" placeholder='Description'/>
          <select name="" id="">
            <option value="">1 WEEK Challenge</option>
            <option value="">2 WEEK Challenge</option>
            <option value="">3 WEEK Challenge</option>
            <option value="">4 WEEK Challenge</option>
            <option value="">8 WEEK Challenge</option> 
          </select>
          <select name="" id="">
            <option value="">15 MIN/DAY</option>
            <option value="">20 MIN/DAY</option>
            <option value="">25 MIN/DAY</option>
            <option value="">30 MIN/DAY</option>
            <option value="">35 MIN/DAY</option> 
            <option value="">40 MIN/DAY</option> 
            <option value="">45 MIN/DAY</option> 
            <option value="">50 MIN/DAY</option> 
            <option value="">55 MIN/DAY</option> 
            <option value="">60 MIN/DAY</option> 
          </select>
          <Input type="number" placeholder='Price'/>
           <Button type='submit'>Add</Button>
            </form>
            

        </Box>  
        </Box>
       
        
    </Center>
  )
}

export default AdminHome